## Scroll Animation

### Overview
This repository features a web page with a scroll-triggered animation implemented using GSAP (GreenSock Animation Platform). The main focus is on dynamically revealing an image as the user scrolls through the page.

### Code Description

#### HTML
- **Structure:** Basic HTML structure with navigation, content, image, and script references.
- **Content:** Thoughtful message in the main content section and a placeholder text section.

#### CSS
- **Styling:** Minimal styling for a clean and visually appealing layout.
- **Font Faces:** Custom font faces for text elements.

#### JavaScript (script.js)
- **GSAP Timeline:** Defines a GSAP timeline for the scroll-triggered animation.
- **ScrollTrigger Settings:** Specifies trigger, start, end, scrub, duration, and pin settings.

  ```javascript
  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      start: "50% 40%",
      end: "100% 60%",
      scrub: 5,
      duration: 1,
      pin: true,
    },
  });
  ```

- **Animation:** Dynamically changes the size of the image based on scroll position.

  ```javascript
  t1.to(".img", { width: "100vw", height: "100vh" });
  ```

### Technologies
- **HTML, CSS, JavaScript:** Web development technologies.
- **GSAP, ScrollTrigger:** Animation libraries for creating dynamic effects.

### Usage
1. Clone the repository.
2. Open `index.html` in a web browser.

### How to Customize
Feel free to modify content, styles, or animations in the HTML, CSS, and JavaScript files for your specific requirements.

### ScrollTrigger Settings and Animation
- **Trigger (`trigger`):** Element that triggers the animation (in this case, the element with the ID "main").
- **Start (`start`):** Defines when the animation starts relative to the trigger (50% down and 40% across the viewport).
- **End (`end`):** Specifies when the animation ends relative to the trigger (100% down and 60% across the viewport).
- **Scrub (`scrub`):** Smoothens the animation when scrolling back up.
- **Duration (`duration`):** Time taken for the animation (1 second).
- **Pin (`pin`):** Pins the element during the animation.



