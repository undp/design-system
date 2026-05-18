import * as utility from './resize';

// SlowMo easing function approximation
// Smooth acceleration/deceleration curve: ease-out then ease-in
const slowMo = (t) => {
  if (t < 0.5) {
    return 2 * t * t;
  }
  return -1 + 4 * t - 2 * t * t;
};

// Interpolate between two colors (hex or rgba format)
const interpolateColor = (color1, color2, t) => {
  const parseColor = (hex) => {
    const clean = hex.replace('#', '');
    const len = clean.length;
    if (len === 8) {
      return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16),
        a: parseInt(clean.slice(6, 8), 16) / 255,
      };
    }
    if (len === 6) {
      return {
        r: parseInt(clean.slice(0, 2), 16),
        g: parseInt(clean.slice(2, 4), 16),
        b: parseInt(clean.slice(4, 6), 16),
        a: 1,
      };
    }
    return null;
  };

  const c1 = parseColor(color1);
  const c2 = parseColor(color2);
  if (!c1 || !c2) return color1;

  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  const a = c1.a + (c2.a - c1.a) * t;

  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
};

export function changeBackground(container) {
  const bodyElement = document.body;
  const section = container || '.heading-big';
  const sectionElement = typeof section === 'string' ? document.querySelector(section) : section;
  if (!sectionElement) {
    return;
  }

  const colorDark = sectionElement.dataset.colorDark || '#232E3E';
  const colorLight = sectionElement.dataset.colorLight || '#ffffff00';
  const headerElement = document.querySelector('.header');
  const headerHeight = (headerElement ? headerElement.offsetHeight : 115) + 5;

  // Scroll-scrubbed animation: progress is derived directly from scroll position.
  // Phase 1 (0→1): section top enters from bottom of viewport until section center reaches viewport center → fade to dark
  // Phase 2 (1→0): section center passes viewport center until section bottom leaves top of viewport → fade back to light
  const handleScroll = () => {
    const rect = sectionElement.getBoundingClientRect();
    const vh = window.innerHeight;

    // Phase 1: section top enters viewport (rect.top == vh) → section center at viewport center (rect.top == vh/2 - rect.height/2)
    const phase1Start = vh;                            // section top at bottom of viewport
    const phase1End = vh / 2 - rect.height / 2 + headerHeight; // section center at viewport center

    // Phase 2: section center at viewport center → section bottom leaves top of viewport (rect.bottom == headerHeight)
    const phase2Start = phase1End;
    const phase2End = headerHeight - rect.height;      // section bottom at top of viewport

    let progress;

    if (rect.top >= phase1Start) {
      // Section not yet in view
      progress = 0;
    } else if (rect.top >= phase1End) {
      // Phase 1: fading in (light → dark)
      progress = (phase1Start - rect.top) / (phase1Start - phase1End);
      progress = Math.max(0, Math.min(1, progress));
      const eased = slowMo(progress);
      bodyElement.style.backgroundColor = interpolateColor(colorLight, colorDark, eased);
      return;
    } else if (rect.top >= phase2End) {
      // Phase 2: fading out (dark → light)
      progress = (rect.top - phase2Start) / (phase2End - phase2Start);
      progress = Math.max(0, Math.min(1, progress));
      const eased = slowMo(progress);
      bodyElement.style.backgroundColor = interpolateColor(colorDark, colorLight, eased);
      return;
    } else {
      // Section scrolled past
      progress = 1;
    }

    bodyElement.style.backgroundColor = progress === 0 ? interpolateColor(colorLight, colorDark, 0) : interpolateColor(colorDark, colorLight, 1);
  };

  let rafId = null;
  const onScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      handleScroll();
      rafId = null;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  // Run once on init to set correct initial state
  handleScroll();

  utility.windowResize(window, () => {
    handleScroll();
  });
}
