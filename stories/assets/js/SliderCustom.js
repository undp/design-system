export function StatsSliderFun(){
  new Glide('.stats-card-slider', {
    autoplay: false,
    gap:20,
    peek: {
      before: 0,
      after: 70
    }
  }).mount();
}