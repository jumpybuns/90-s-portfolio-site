import { gsap } from 'gsap';
const tl = gsap.timeline();
export const hiddenText = (elem) => {
  tl.to(elem, { x: '-948%', ease: 'power2.out', duration: 1 });
};
