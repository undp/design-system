/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
!(function (t, e) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = e() : typeof define === 'function' && define.amd ? define(e) : t.Glide = e();
}(this, () => {
  const n = {
    type: 'slider',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: !1,
    hoverpause: !0,
    keyboard: !0,
    bound: !1,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: !1,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: !0,
    rewindDuration: 800,
    animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
    throttle: 10,
    direction: 'ltr',
    peek: 0,
    breakpoints: {},
    classes: {
      direction: {
        ltr: 'glide--ltr',
        rtl: 'glide--rtl',
      },
      slider: 'glide--slider',
      carousel: 'glide--carousel',
      swipeable: 'glide--swipeable',
      dragging: 'glide--dragging',
      cloneSlide: 'glide__slide--clone',
      activeNav: 'glide__bullet--active',
      activeSlide: 'glide__slide--active',
      disabledArrow: 'glide__arrow--disabled',
    },
  };

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  }
  const r = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) {
    return typeof t;
  } : function (t) {
    return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
  };
  const t = function (t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  };

  function o(t, e) {
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  const a = Object.assign || function (t) {
    for (let e = 1; e < arguments.length; e++) {
      const n = arguments[e];
      for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  };

  function y(t) {
    return parseInt(t);
  }

  function s(t) {
    return typeof t === 'string';
  }

  function u(t) {
    const e = void 0 === t ? 'undefined' : r(t);
    return e === 'function' || e === 'object' && !!t;
  }

  function c(t) {
    return typeof t === 'function';
  }

  function l(t) {
    return void 0 === t;
  }

  function f(t) {
    return t.constructor === Array;
  }

  function d(t, e, n) {
    Object.defineProperty(t, e, n);
  }

  function h(t, e) {
    const n = { ...t, ...e };
    return e.hasOwnProperty('classes') && (n.classes = { ...t.classes, ...e.classes }, e.classes.hasOwnProperty('direction') && (n.classes.direction = { ...t.classes.direction, ...e.classes.direction })), e.hasOwnProperty('breakpoints') && (n.breakpoints = { ...t.breakpoints, ...e.breakpoints }), n;
  }
  const v = (t(e, [{
    key: 'on',
    value(t, e) {
      if (f(t)) for (let n = 0; n < t.length; n++) this.on(t[n], e);
      this.hop.call(this.events, t) || (this.events[t] = []);
      const i = this.events[t].push(e) - 1;
      return {
        remove() {
          delete this.events[t][i];
        },
      };
    },
  }, {
    key: 'emit',
    value(t, e) {
      if (f(t)) for (let n = 0; n < t.length; n++) this.emit(t[n], e);
      this.hop.call(this.events, t) && this.events[t].forEach((t) => {
        t(e || {});
      });
    },
  }]), e);

  function e() {
    const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  const p = (t(m, [{
    key: 'mount',
    value(t) {
      const e = arguments.length > 0 && void 0 !== t ? t : {};
      return this._e.emit('mount.before'), u(e) && (this._c = (function (t, e, n) {
        const i = {};
        for (const r in e) c(e[r]) && (i[r] = e[r](t, i, n));
        for (const o in i) c(i[o].mount) && i[o].mount();
        return i;
      }(this, e, this._e))), this._e.emit('mount.after'), this;
    },
  }, {
    key: 'mutate',
    value(t) {
      const e = arguments.length > 0 && void 0 !== t ? t : [];
      return f(e) && (this._t = e), this;
    },
  }, {
    key: 'update',
    value(t) {
      const e = arguments.length > 0 && void 0 !== t ? t : {};
      return this.settings = h(this.settings, e), e.hasOwnProperty('startAt') && (this.index = e.startAt), this._e.emit('update'), this;
    },
  }, {
    key: 'go',
    value(t) {
      return this._c.Run.make(t), this;
    },
  }, {
    key: 'move',
    value(t) {
      return this._c.Transition.disable(), this._c.Move.make(t), this;
    },
  }, {
    key: 'destroy',
    value() {
      return this._e.emit('destroy'), this;
    },
  }, {
    key: 'play',
    value(t) {
      const e = arguments.length > 0 && void 0 !== t && t;
      return e && (this.settings.autoplay = e), this._e.emit('play'), this;
    },
  }, {
    key: 'pause',
    value() {
      return this._e.emit('pause'), this;
    },
  }, {
    key: 'disable',
    value() {
      return this.disabled = !0, this;
    },
  }, {
    key: 'enable',
    value() {
      return this.disabled = !1, this;
    },
  }, {
    key: 'on',
    value(t, e) {
      return this._e.on(t, e), this;
    },
  }, {
    key: 'isType',
    value(t) {
      return this.settings.type === t;
    },
  }, {
    key: 'settings',
    get() {
      return this._o;
    },
    set(t) {
      u(t) && (this._o = t);
    },
  }, {
    key: 'index',
    get() {
      return this._i;
    },
    set(t) {
      this._i = y(t);
    },
  }, {
    key: 'type',
    get() {
      return this.settings.type;
    },
  }, {
    key: 'disabled',
    get() {
      return this._d;
    },
    set(t) {
      this._d = !!t;
    },
  }]), m);

  function m(t) {
    const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i(this, m), this._c = {}, this._t = [], this._e = new v(), this.disabled = !1, this.selector = t, this.settings = h(n, e), this.index = this.settings.startAt;
  }

  function g() {
    return (new Date()).getTime();
  }

  function b(n, i, r) {
    let o = void 0;
    let s = void 0;
    let u = void 0;
    let a = void 0;
    let c = 0;
    r = r || {};

    function l() {
      c = !1 === r.leading ? 0 : g(), o = null, a = n.apply(s, u), o || (s = u = null);
    }

    function t() {
      const t = g();
      c || !1 !== r.leading || (c = t);
      const e = i - (t - c);
      return s = this, u = arguments, e <= 0 || i < e ? (o && (clearTimeout(o), o = null), c = t, a = n.apply(s, u), o || (s = u = null)) : o || !1 === r.trailing || (o = setTimeout(l, e)), a;
    }
    return t.cancel = function () {
      clearTimeout(o), c = 0, o = s = u = null;
    }, t;
  }
  const w = {
    ltr: ['marginLeft', 'marginRight'],
    rtl: ['marginRight', 'marginLeft'],
  };

  function _(t) {
    if (t && t.parentNode) {
      for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
      return n;
    }
    return [];
  }

  function k(t) {
    return !!(t && t instanceof window.HTMLElement);
  }
  const S = '[data-glide-el="track"]';
  const H = (t(T, [{
    key: 'on',
    value(t, e, n, i) {
      const r = arguments.length > 3 && void 0 !== i && i;
      s(t) && (t = [t]);
      for (let o = 0; o < t.length; o++) this.listeners[t[o]] = n, e.addEventListener(t[o], this.listeners[t[o]], r);
    },
  }, {
    key: 'off',
    value(t, e, n) {
      const i = arguments.length > 2 && void 0 !== n && n;
      s(t) && (t = [t]);
      for (let r = 0; r < t.length; r++) e.removeEventListener(t[r], this.listeners[t[r]], i);
    },
  }, {
    key: 'destroy',
    value() {
      delete this.listeners;
    },
  }]), T);

  function T() {
    const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, T), this.listeners = t;
  }
  const x = ['ltr', 'rtl'];
  const O = {
    '>': '<',
    '<': '>',
    '=': '=',
  };

  function A(t, e) {
    return {
      modify(t) {
        return e.Direction.is('rtl') ? -t : t;
      },
    };
  }

  function M(i, r, o) {
    const s = [function (e, n) {
      return {
        modify(t) {
          return t + n.Gaps.value * e.index;
        },
      };
    }, function (t, e) {
      return {
        modify(t) {
          return t + e.Clones.grow / 2;
        },
      };
    }, function (n, i) {
      return {
        modify(t) {
          if (n.settings.focusAt >= 0) {
            const e = i.Peek.value;
            return u(e) ? t - e.before : t - e;
          }
          return t;
        },
      };
    }, function (o, s) {
      return {
        modify(t) {
          const e = s.Gaps.value;
          const n = s.Sizes.width;
          const i = o.settings.focusAt;
          const r = s.Sizes.slideWidth;
          return i === 'center' ? t - (n / 2 - r / 2) : t - r * i - e * i;
        },
      };
    }].concat(i._t, [A]);
    return {
      mutate(t) {
        for (let e = 0; e < s.length; e++) {
          const n = s[e];
          c(n) && c(n().modify) && (t = n(i, r, o).modify(t));
        }
        return t;
      },
    };
  }
  let C = !1;
  try {
    const P = Object.defineProperty({}, 'passive', {
      get() {
        C = !0;
      },
    });
    window.addEventListener('testPassive', null, P), window.removeEventListener('testPassive', null, P);
  } catch (t) {}
  const L = C;
  const z = ['touchstart', 'mousedown'];
  const j = ['touchmove', 'mousemove'];
  const D = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
  const E = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

  function R(t) {
    return u(t) ? (function (n) {
      return Object.keys(n).sort().reduce((t, e) => (t[e] = n[e], t[e], t), {});
    }(t)) : {};
  }
  const W = {
    Html(e, t) {
      const n = {
        mount() {
          this.root = e.selector, this.track = this.root.querySelector(S), this.slides = Array.prototype.slice.call(this.wrapper.children).filter((t) => !t.classList.contains(e.settings.classes.cloneSlide));
        },
      };
      return d(n, 'root', {
        get() {
          return n._r;
        },
        set(t) {
          s(t) && (t = document.querySelector(t)), k(t) && (n._r = t);
        },
      }), d(n, 'track', {
        get() {
          return n._t;
        },
        set(t) {
          k(t) && (n._t = t);
        },
      }), d(n, 'wrapper', {
        get() {
          return n.track.children[0];
        },
      }), n;
    },
    Translate(r, o, s) {
      const u = {
        set(t) {
          const e = M(r, o).mutate(t);
          o.Html.wrapper.style.transform = `translate3d(${-1 * e}px, 0px, 0px)`;
        },
        remove() {
          o.Html.wrapper.style.transform = '';
        },
      };
      return s.on('move', (t) => {
        const e = o.Gaps.value;
        const n = o.Sizes.length;
        const i = o.Sizes.slideWidth;
        return r.isType('carousel') && o.Run.isOffset('<') ? (o.Transition.after(() => {
          s.emit('translate.jump'), u.set(i * (n - 1));
        }), u.set(-i - e * n)) : r.isType('carousel') && o.Run.isOffset('>') ? (o.Transition.after(() => {
          s.emit('translate.jump'), u.set(0);
        }), u.set(i * n + e * n)) : u.set(t.movement);
      }), s.on('destroy', () => {
        u.remove();
      }), u;
    },
    Transition(n, i, t) {
      let r = !1;
      const e = {
        compose(t) {
          const e = n.settings;
          return r ? `${t} 0ms ${e.animationTimingFunc}` : `${t} ${this.duration}ms ${e.animationTimingFunc}`;
        },
        set(t) {
          const e = arguments.length > 0 && void 0 !== t ? t : 'transform';
          i.Html.wrapper.style.transition = this.compose(e);
        },
        remove() {
          i.Html.wrapper.style.transition = '';
        },
        after(t) {
          setTimeout(() => {
            t();
          }, this.duration);
        },
        enable() {
          r = !1, this.set();
        },
        disable() {
          r = !0, this.set();
        },
      };
      return d(e, 'duration', {
        get() {
          const t = n.settings;
          return n.isType('slider') && i.Run.offset ? t.rewindDuration : t.animationDuration;
        },
      }), t.on('move', () => {
        e.set();
      }), t.on(['build.before', 'resize', 'translate.jump'], () => {
        e.disable();
      }), t.on('run', () => {
        e.enable();
      }), t.on('destroy', () => {
        e.remove();
      }), e;
    },
    Direction(t, e, n) {
      const i = {
        mount() {
          this.value = t.settings.direction;
        },
        resolve(t) {
          const e = t.slice(0, 1);
          return this.is('rtl') ? t.split(e).join(O[e]) : t;
        },
        is(t) {
          return this.value === t;
        },
        addClass() {
          e.Html.root.classList.add(t.settings.classes.direction[this.value]);
        },
        removeClass() {
          e.Html.root.classList.remove(t.settings.classes.direction[this.value]);
        },
      };
      return d(i, 'value', {
        get() {
          return i._v;
        },
        set(t) {
          x.indexOf(t) > -1 && (i._v = t);
        },
      }), n.on(['destroy', 'update'], () => {
        i.removeClass();
      }), n.on('update', () => {
        i.mount();
      }), n.on(['build.before', 'update'], () => {
        i.addClass();
      }), i;
    },
    Peek(n, t, e) {
      const i = {
        mount() {
          this.value = n.settings.peek;
        },
      };
      return d(i, 'value', {
        get() {
          return i._v;
        },
        set(t) {
          u(t) ? (t.before = y(t.before), t.after = y(t.after)) : t = y(t), i._v = t;
        },
      }), d(i, 'reductor', {
        get() {
          const t = i.value;
          const e = n.settings.perView;
          return u(t) ? t.before / e + t.after / e : 2 * t / e;
        },
      }), e.on(['resize', 'update'], () => {
        i.mount();
      }), i;
    },
    Sizes(t, i, e) {
      const n = {
        setupSlides() {
          for (let t = `${this.slideWidth}px`, e = i.Html.slides, n = 0; n < e.length; n++) e[n].style.width = t;
        },
        setupWrapper(t) {
          i.Html.wrapper.style.width = `${this.wrapperSize}px`;
        },
        remove() {
          for (let t = i.Html.slides, e = 0; e < t.length; e++) t[e].style.width = '';
          i.Html.wrapper.style.width = '';
        },
      };
      return d(n, 'length', {
        get() {
          return i.Html.slides.length;
        },
      }), d(n, 'width', {
        get() {
          return i.Html.root.offsetWidth;
        },
      }), d(n, 'wrapperSize', {
        get() {
          return n.slideWidth * n.length + i.Gaps.grow + i.Clones.grow;
        },
      }), d(n, 'slideWidth', {
        get() {
          return n.width / t.settings.perView - i.Peek.reductor - i.Gaps.reductor;
        },
      }), e.on(['build.before', 'resize', 'update'], () => {
        n.setupSlides(), n.setupWrapper();
      }), e.on('destroy', () => {
        n.remove();
      }), n;
    },
    Gaps(e, o, t) {
      const n = {
        apply(t) {
          for (let e = 0, n = t.length; e < n; e++) {
            const i = t[e].style;
            const r = o.Direction.value;
            i[w[r][0]] = e !== 0 ? `${this.value / 2}px` : '', e !== t.length - 1 ? i[w[r][1]] = `${this.value / 2}px` : i[w[r][1]] = '';
          }
        },
        remove(t) {
          for (let e = 0, n = t.length; e < n; e++) {
            const i = t[e].style;
            i.marginLeft = '', i.marginRight = '';
          }
        },
      };
      return d(n, 'value', {
        get() {
          return y(e.settings.gap);
        },
      }), d(n, 'grow', {
        get() {
          return n.value * (o.Sizes.length - 1);
        },
      }), d(n, 'reductor', {
        get() {
          const t = e.settings.perView;
          return n.value * (t - 1) / t;
        },
      }), t.on(['build.after', 'update'], b(() => {
        n.apply(o.Html.wrapper.children);
      }, 30)), t.on('destroy', () => {
        n.remove(o.Html.wrapper.children);
      }), n;
    },
    Move(t, i, r) {
      const e = {
        mount() {
          this._o = 0;
        },
        make(t) {
          const e = this;
          const n = arguments.length > 0 && void 0 !== t ? t : 0;
          this.offset = n, r.emit('move', {
            movement: this.value,
          }), i.Transition.after(() => {
            r.emit('move.after', {
              movement: e.value,
            });
          });
        },
      };
      return d(e, 'offset', {
        get() {
          return e._o;
        },
        set(t) {
          e._o = l(t) ? 0 : y(t);
        },
      }), d(e, 'translate', {
        get() {
          return i.Sizes.slideWidth * t.index;
        },
      }), d(e, 'value', {
        get() {
          const t = this.offset;
          const e = this.translate;
          return i.Direction.is('rtl') ? e + t : e - t;
        },
      }), r.on(['build.before', 'run'], () => {
        e.make();
      }), e;
    },
    Clones(v, p, t) {
      const e = {
        mount() {
          this.items = [], v.isType('carousel') && (this.items = this.collect());
        },
        collect(t) {
          for (var e = arguments.length > 0 && void 0 !== t ? t : [], n = p.Html.slides, i = v.settings, r = i.perView, o = i.classes, s = r + +!!v.settings.peek, u = n.slice(0, s), a = n.slice(-s), c = 0; c < Math.max(1, Math.floor(r / n.length)); c++) {
            for (let l = 0; l < u.length; l++) {
              const f = u[l].cloneNode(!0);
              f.classList.add(o.cloneSlide), e.push(f);
            }
            for (let d = 0; d < a.length; d++) {
              const h = a[d].cloneNode(!0);
              h.classList.add(o.cloneSlide), e.unshift(h);
            }
          }
          return e;
        },
        append() {
          for (var t = this.items, e = p.Html, n = e.wrapper, i = e.slides, r = Math.floor(t.length / 2), o = t.slice(0, r).reverse(), s = t.slice(r, t.length), u = `${p.Sizes.slideWidth}px`, a = 0; a < s.length; a++) n.appendChild(s[a]);
          for (let c = 0; c < o.length; c++) n.insertBefore(o[c], i[0]);
          for (let l = 0; l < t.length; l++) t[l].style.width = u;
        },
        remove() {
          for (let t = this.items, e = 0; e < t.length; e++) p.Html.wrapper.removeChild(t[e]);
        },
      };
      return d(e, 'grow', {
        get() {
          return (p.Sizes.slideWidth + p.Gaps.value) * e.items.length;
        },
      }), t.on('update', () => {
        e.remove(), e.mount(), e.append();
      }), t.on('build.before', () => {
        v.isType('carousel') && e.append();
      }), t.on('destroy', () => {
        e.remove();
      }), e;
    },
    Resize(t, e, n) {
      const i = new H();
      const r = {
        mount() {
          this.bind();
        },
        bind() {
          i.on('resize', window, b(() => {
            n.emit('resize');
          }, t.settings.throttle));
        },
        unbind() {
          i.off('resize', window);
        },
      };
      return n.on('destroy', () => {
        r.unbind(), i.destroy();
      }), r;
    },
    Build(n, i, t) {
      const e = {
        mount() {
          t.emit('build.before'), this.typeClass(), this.activeClass(), t.emit('build.after');
        },
        typeClass() {
          i.Html.root.classList.add(n.settings.classes[n.settings.type]);
        },
        activeClass() {
          const e = n.settings.classes;
          const t = i.Html.slides[n.index];
          t && (t.classList.add(e.activeSlide), _(t).forEach((t) => {
            t.classList.remove(e.activeSlide);
          }));
        },
        removeClasses() {
          const e = n.settings.classes;
          i.Html.root.classList.remove(e[n.settings.type]), i.Html.slides.forEach((t) => {
            t.classList.remove(e.activeSlide);
          });
        },
      };
      return t.on(['destroy', 'update'], () => {
        e.removeClasses();
      }), t.on(['resize', 'update'], () => {
        e.mount();
      }), t.on('move.after', () => {
        e.activeClass();
      }), e;
    },
    Run(o, n, i) {
      const t = {
        mount() {
          this._o = !1;
        },
        make(t) {
          const e = this;
          o.disabled || (o.disable(), this.move = t, i.emit('run.before', this.move), this.calculate(), i.emit('run', this.move), n.Transition.after(() => {
            e.isStart() && i.emit('run.start', e.move), e.isEnd() && i.emit('run.end', e.move), (e.isOffset('<') || e.isOffset('>')) && (e._o = !1, i.emit('run.offset', e.move)), i.emit('run.after', e.move), o.enable();
          }));
        },
        calculate() {
          const t = this.move;
          const e = this.length;
          const n = t.steps;
          const i = t.direction;
          const r = (function (t) {
            return typeof t === 'number';
          }(y(n))) && y(n) !== 0;
          switch (i) {
            case '>':
              n === '>' ? o.index = e : this.isEnd() ? o.isType('slider') && !o.settings.rewind || (this._o = !0, o.index = 0) : r ? o.index += Math.min(e - o.index, -y(n)) : o.index++;
              break;
            case '<':
              n === '<' ? o.index = 0 : this.isStart() ? o.isType('slider') && !o.settings.rewind || (this._o = !0, o.index = e) : r ? o.index -= Math.min(o.index, y(n)) : o.index--;
              break;
            case '=':
              o.index = n;
          }
        },
        isStart() {
          return o.index === 0;
        },
        isEnd() {
          return o.index === this.length;
        },
        isOffset(t) {
          return this._o && this.move.direction === t;
        },
      };
      return d(t, 'move', {
        get() {
          return this._m;
        },
        set(t) {
          const e = t.substr(1);
          this._m = {
            direction: t.substr(0, 1),
            steps: e ? y(e) ? y(e) : e : 0,
          };
        },
      }), d(t, 'length', {
        get() {
          const t = o.settings;
          const e = n.Html.slides.length;
          return o.isType('slider') && t.focusAt !== 'center' && t.bound ? e - 1 - (y(t.perView) - 1) + y(t.focusAt) : e - 1;
        },
      }), d(t, 'offset', {
        get() {
          return this._o;
        },
      }), t;
    },
    Swipe(d, h, v) {
      const n = new H();
      let p = 0;
      let m = 0;
      let g = 0;
      let i = !1;
      const r = !!L && {
        passive: !0,
      };
      const t = {
        mount() {
          this.bindSwipeStart();
        },
        start(t) {
          if (!i && !d.disabled) {
            this.disable();
            const e = this.touches(t);
            p = null, m = y(e.pageX), g = y(e.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), v.emit('swipe.start');
          }
        },
        move(t) {
          if (!d.disabled) {
            const e = d.settings;
            const n = e.touchAngle;
            const i = e.touchRatio;
            const r = e.classes;
            const o = this.touches(t);
            const s = y(o.pageX) - m;
            const u = y(o.pageY) - g;
            const a = Math.abs(s << 2);
            const c = Math.abs(u << 2);
            const l = Math.sqrt(a + c);
            const f = Math.sqrt(c);
            if (!(180 * (p = Math.asin(f / l)) / Math.PI < n)) return !1;
            t.stopPropagation(), h.Move.make(s * (function (t) {
              return parseFloat(t);
            }(i))), h.Html.root.classList.add(r.dragging), v.emit('swipe.move');
          }
        },
        end(t) {
          if (!d.disabled) {
            const e = d.settings;
            const n = this.touches(t);
            const i = this.threshold(t);
            const r = n.pageX - m;
            const o = 180 * p / Math.PI;
            let s = Math.round(r / h.Sizes.slideWidth);
            this.enable(), i < r && o < e.touchAngle ? (e.perTouch && (s = Math.min(s, y(e.perTouch))), h.Direction.is('rtl') && (s = -s), h.Run.make(h.Direction.resolve(`<${s}`))) : r < -i && o < e.touchAngle ? (e.perTouch && (s = Math.max(s, -y(e.perTouch))), h.Direction.is('rtl') && (s = -s), h.Run.make(h.Direction.resolve(`>${s}`))) : h.Move.make(), h.Html.root.classList.remove(e.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), v.emit('swipe.end');
          }
        },
        bindSwipeStart() {
          const e = this;
          const t = d.settings;
          t.swipeThreshold && n.on(z[0], h.Html.wrapper, (t) => {
            e.start(t);
          }, r), t.dragThreshold && n.on(z[1], h.Html.wrapper, (t) => {
            e.start(t);
          }, r);
        },
        unbindSwipeStart() {
          n.off(z[0], h.Html.wrapper, r), n.off(z[1], h.Html.wrapper, r);
        },
        bindSwipeMove() {
          const e = this;
          n.on(j, h.Html.wrapper, b((t) => {
            e.move(t);
          }, d.settings.throttle), r);
        },
        unbindSwipeMove() {
          n.off(j, h.Html.wrapper, r);
        },
        bindSwipeEnd() {
          const e = this;
          n.on(D, h.Html.wrapper, (t) => {
            e.end(t);
          });
        },
        unbindSwipeEnd() {
          n.off(D, h.Html.wrapper);
        },
        touches(t) {
          return E.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0];
        },
        threshold(t) {
          const e = d.settings;
          return E.indexOf(t.type) > -1 ? e.dragThreshold : e.swipeThreshold;
        },
        enable() {
          return i = !1, h.Transition.enable(), this;
        },
        disable() {
          return i = !0, h.Transition.disable(), this;
        },
      };
      return v.on('build.after', () => {
        h.Html.root.classList.add(d.settings.classes.swipeable);
      }), v.on('destroy', () => {
        t.unbindSwipeStart(), t.unbindSwipeMove(), t.unbindSwipeEnd(), n.destroy();
      }), t;
    },
    Images(t, e, n) {
      const i = new H();
      const r = {
        mount() {
          this.bind();
        },
        bind() {
          i.on('dragstart', e.Html.wrapper, this.dragstart);
        },
        unbind() {
          i.off('dragstart', e.Html.wrapper);
        },
        dragstart(t) {
          t.preventDefault();
        },
      };
      return n.on('destroy', () => {
        r.unbind(), i.destroy();
      }), r;
    },
    Anchors(t, e, n) {
      const i = new H();
      let r = !1;
      let o = !1;
      const s = {
        mount() {
          this._a = e.Html.wrapper.querySelectorAll('a'), this.bind();
        },
        bind() {
          i.on('click', e.Html.wrapper, this.click);
        },
        unbind() {
          i.off('click', e.Html.wrapper);
        },
        click(t) {
          o && (t.stopPropagation(), t.preventDefault());
        },
        detach() {
          if (o = !0, !r) {
            for (let t = 0; t < this.items.length; t++) this.items[t].draggable = !1, this.items[t].setAttribute('data-href', this.items[t].getAttribute('href')), this.items[t].removeAttribute('href');
            r = !0;
          }
          return this;
        },
        attach() {
          if (o = !1, r) {
            for (let t = 0; t < this.items.length; t++) this.items[t].draggable = !0, this.items[t].setAttribute('href', this.items[t].getAttribute('data-href'));
            r = !1;
          }
          return this;
        },
      };
      return d(s, 'items', {
        get() {
          return s._a;
        },
      }), n.on('swipe.move', () => {
        s.detach();
      }), n.on('swipe.end', () => {
        e.Transition.after(() => {
          s.attach();
        });
      }), n.on('destroy', () => {
        s.attach(), s.unbind(), i.destroy();
      }), s;
    },
    Controls(i, e, t) {
      const n = new H();
      const r = !!L && {
        passive: !0,
      };
      const o = {
        mount() {
          this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]'), this.addBindings();
        },
        setActive() {
          for (let t = 0; t < this._n.length; t++) this.addClass(this._n[t].children);
        },
        removeActive() {
          for (let t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children);
        },
        addClass(t) {
          const e = i.settings;
          const n = t[i.index];
          n && (n.classList.add(e.classes.activeNav), _(n).forEach((t) => {
            t.classList.remove(e.classes.activeNav);
          }));
        },
        removeClass(t) {
          const e = t[i.index];
          e && e.classList.remove(i.settings.classes.activeNav);
        },
        addBindings() {
          for (let t = 0; t < this._c.length; t++) this.bind(this._c[t].children);
        },
        removeBindings() {
          for (let t = 0; t < this._c.length; t++) this.unbind(this._c[t].children);
        },
        bind(t) {
          for (let e = 0; e < t.length; e++) n.on('click', t[e], this.click), n.on('touchstart', t[e], this.click, r);
        },
        unbind(t) {
          for (let e = 0; e < t.length; e++) n.off(['click', 'touchstart'], t[e]);
        },
        click(t) {
          t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute('data-glide-dir')));
        },
      };
      return d(o, 'items', {
        get() {
          return o._c;
        },
      }), t.on(['mount.after', 'move.after'], () => {
        o.setActive();
      }), t.on('destroy', () => {
        o.removeBindings(), o.removeActive(), n.destroy();
      }), o;
    },
    Keyboard(t, e, n) {
      const i = new H();
      const r = {
        mount() {
          t.settings.keyboard && this.bind();
        },
        bind() {
          i.on('keyup', document, this.press);
        },
        unbind() {
          i.off('keyup', document);
        },
        press(t) {
          t.keyCode === 39 && e.Run.make(e.Direction.resolve('>')), t.keyCode === 37 && e.Run.make(e.Direction.resolve('<'));
        },
      };
      return n.on(['destroy', 'update'], () => {
        r.unbind();
      }), n.on('update', () => {
        r.mount();
      }), n.on('destroy', () => {
        i.destroy();
      }), r;
    },
    Autoplay(e, n, t) {
      const i = new H();
      const r = {
        mount() {
          this.start(), e.settings.hoverpause && this.bind();
        },
        start() {
          const t = this;
          e.settings.autoplay && l(this._i) && (this._i = setInterval(() => {
            t.stop(), n.Run.make('>'), t.start();
          }, this.time));
        },
        stop() {
          this._i = clearInterval(this._i);
        },
        bind() {
          const t = this;
          i.on('mouseover', n.Html.root, () => {
            t.stop();
          }), i.on('mouseout', n.Html.root, () => {
            t.start();
          });
        },
        unbind() {
          i.off(['mouseover', 'mouseout'], n.Html.root);
        },
      };
      return d(r, 'time', {
        get() {
          const t = n.Html.slides[e.index].getAttribute('data-glide-autoplay');
          return y(t || e.settings.autoplay);
        },
      }), t.on(['destroy', 'update'], () => {
        r.unbind();
      }), t.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], () => {
        r.stop();
      }), t.on(['run.after', 'play', 'swipe.end'], () => {
        r.start();
      }), t.on('update', () => {
        r.mount();
      }), t.on('destroy', () => {
        i.destroy();
      }), r;
    },
    Breakpoints(t, e, n) {
      const i = new H();
      const r = t.settings;
      let o = R(r.breakpoints);
      let s = { ...r };
      const u = {
        match(t) {
          if (void 0 !== window.matchMedia) for (const e in t) if (t.hasOwnProperty(e) && window.matchMedia(`(max-width: ${e}px)`).matches) return t[e];
          return s;
        },
      };
      return a(r, u.match(o)), i.on('resize', window, b(() => {
        t.settings = h(r, u.match(o));
      }, t.settings.throttle)), n.on('update', () => {
        o = R(o), s = { ...r };
      }), n.on('destroy', () => {
        i.off('resize', window);
      }), u;
    },
  };

  function G() {
    return i(this, G),
    (function (t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || typeof e !== 'object' && typeof e !== 'function' ? t : e;
    }(this, (G.__proto__ || Object.getPrototypeOf(G)).apply(this, arguments)));
  }
  return (function (t, e) {
    if (typeof e !== 'function' && e !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof e}`);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0,
      },
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }(G, p)), t(G, [{
    key: 'mount',
    value(t) {
      const e = arguments.length > 0 && void 0 !== t ? t : {};
      return (function t(e, n, i) {
        e === null && (e = Function.prototype);
        const r = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === r) {
          const o = Object.getPrototypeOf(e);
          return o === null ? void 0 : t(o, n, i);
        }
        if ('value' in r) return r.value;
        const s = r.get;
        return void 0 !== s ? s.call(i) : void 0;
      }(G.prototype.__proto__ || Object.getPrototypeOf(G.prototype), 'mount', this)).call(this, { ...W, ...e });
    },
  }]), G;
}));
