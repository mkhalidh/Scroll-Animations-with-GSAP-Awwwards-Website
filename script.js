//gsap mei 2 hotea hain, kahan sea and kahan tk

let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // main div 200%
    // Jb bhi 75% is page(main ki div) ka aae then 50% image display krdo
    start: "50% 40%",

    // end mei display full krde
    end: "100% 60%",

    // scrub means jab bhi scroll wapis upper jae tou dobara small honea lag jae image (back animation)

    // ek bar scrub ko comment kr kea bhi chalalena
    scrub: 5,

    // duration - time 1s
    duration: 1,

    // it means div is waiting for opening image
    pin: true,
  },
});

//How image is opening

t1

  //.to means kahan tk
  .to(".img", { width: "100vw", height: "100vh" });
