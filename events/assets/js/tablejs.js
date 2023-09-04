/*------------------------------
Register plugins
------------------------------*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/*------------------------------
Init ScrollSmoother
------------------------------*/
const scrollerSmoother = ScrollSmoother.create({
  content: '#cont',
  wrapper: '#wrap',
  smooth: true,
  effects: false,
  normalizeScroll: true
})

const tl = gsap.timeline({
  scrollTrigger: {
      trigger: '.accords',
      pin: true,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      ease: 'linear',
    }
})

tl.to('.accord .text', {
  height: 0,
  paddingBottom: 0,
  opacity: 0,
  stagger: .5,
})
tl.to('.accord', {
  marginBottom: -15,
  stagger: .5,
}, '<')
