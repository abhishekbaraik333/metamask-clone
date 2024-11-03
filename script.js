document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  const close = document.getElementById("close");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});

document
  .getElementById("video-container")
  .addEventListener("click", function () {
    const videoIframe = document.createElement("iframe");
    videoIframe.src = "https://www.youtube.com/embed/YVgfHZMFFFQ?autoplay=1";
    videoIframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    videoIframe.setAttribute("allowfullscreen", "");
    videoIframe.classList.add(
      "absolute",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "rounded-lg"
    );

    // Replace the placeholder with the actual video iframe
    document.getElementById("video-container").innerHTML = "";
    document.getElementById("video-container").appendChild(videoIframe);
  });

function toggleDropdown(id) {
  // Get all dropdown contents and icons
  const dropdowns = document.querySelectorAll(".dropdown-content");
  const icons = document.querySelectorAll(".icon");

  // Close all other dropdowns except the clicked one
  dropdowns.forEach((dropdown, index) => {
    if (index + 1 === id) {
      dropdown.classList.toggle("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  });
}

gsap.from(".web3", {
  scrollTrigger: {
    trigger: ".web3", // Element that triggers the animation
  },
  x: -100, // Moves the element vertically by 100 pixels
  opacity: 0, // Starts with opacity 0
  duration: 1, // Animation duration
});
gsap.from(".web3-image", {
  scrollTrigger: {
    trigger: ".web3-image", // Element that triggers the animation
  },
  x: 100, // Moves the element vertically by 100 pixels
  opacity: 0, // Starts with opacity 0
  duration: 1, // Animation duration
});

gsap.from(".data", {
  scrollTrigger: {
    trigger: ".data", // Element that triggers the animation
  },
  x: -100, // Moves the element vertically by 100 pixels
  opacity: 0, // Starts with opacity 0
  duration: 1, // Animation duration
});
gsap.from(".data-image", {
  scrollTrigger: {
    trigger: ".data-image", // Element that triggers the animation
  },
  x: 100, // Moves the element vertically by 100 pixels
  opacity: 0, // Starts with opacity 0
  duration: 1, // Animation duration
});

gsap.from(".explore", {
  scrollTrigger: {
    trigger: ".explore", // Element that triggers the animation
  },
  x: 100, // Moves the element vertically by 100 pixels
  opacity: 0, // Starts with opacity 0
  duration: 1, // Animation duration
});

gsap.from(".explore-image", {
  scrollTrigger: {
    trigger: ".explore-image", // Element that triggers the animation
  },
  x: -100, // Moves the element vertically by 100 pixels
  opacity: 0, // Starts with opacity 0
  duration: 1, // Animation duration
});

