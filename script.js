const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//Animation when loading page
function firstPageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });
  t1.to(".boundingelem", {
    y: "0",
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
  t1.from("#herofooter", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
    stagger: 0.2,
  });
}

function cursorCircle() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

cursorCircle();
firstPageAnim();
