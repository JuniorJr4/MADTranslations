import "../src/style.css";

function dropdownMenu() {
  const workDropdown = document.querySelector(".work-dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let timeoutId;
  //const dropdownItems = document.querySelectorAll(".dropdown-item"); //Needed?
  function dropdownMenuMouseover() {
    clearTimeout(timeoutId);
    dropdownMenu.classList.remove("hidden");
  }
  function dropdownMenuTimeout() {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 2000);
  }
  function dropdownMenuClickOut(e) {
    if (!dropdownMenu.contains(e.target) && e.target !== workDropdown) {
      dropdownMenu.classList.add("hidden");
    }
  }
  workDropdown.addEventListener("mouseover", dropdownMenuMouseover);
  dropdownMenu.addEventListener("mouseover", dropdownMenuMouseover);

  workDropdown.addEventListener("mouseout", dropdownMenuTimeout);
  dropdownMenu.addEventListener("mouseout", dropdownMenuTimeout);
  document.addEventListener("click", dropdownMenuClickOut);
  //   workDropdown.addEventListener("mouseout", dropdownMenuClickOut);
  //   dropdownMenu.addEventListener("mouseout", dropdownMenuClickOut);
}
function imageSlider() {
  console.log(window.location.pathname);
  // First ensure user is on portfolio page
  if (
    window.location.pathname ===
    "/home/junior4/repos/MADTranslations/src/portfolio.html"
  ) {
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slides = slider.querySelectorAll("li");
    const dotsContainer = document.querySelector(".slider-dots");
    let currentIndex = 0;

    function showSlide(index) {
      // hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // show the slide at the given index
      slides[index].style.display = "block";
      updateActiveDot(index);
    }

    function goToSlide(index) {
      // update the current index
      currentIndex = index;
      // show the slide at the new index
      showSlide(currentIndex);
    }

    function goToNextSlide() {
      console.log("dd");
      // go to the next slide (loop back to the start if at the end)
      if (currentIndex === slides.length - 1) {
        goToSlide(0);
      } else {
        goToSlide(currentIndex + 1);
      }
      console.log("dd");
    }

    function goToPrevSlide() {
      // go to the previous slide (loop back to the end if at the start)
      if (currentIndex === 0) {
        goToSlide(slides.length - 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }

    function updateActiveDot(index) {
      // remove the active class from all dots
      const dots = dotsContainer.querySelectorAll(".slider-dot");
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      // add the active class to the dot at the given index
      dots[index].classList.add("active");
    }

    // create a dot for each slide
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("slider-dot");
      // set the active class on the first dot
      if (i === 0) {
        dot.classList.add("active");
      }
      // add a click event listener to go to the corresponding slide
      dot.addEventListener("click", () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }

    // show the first slide by default
    showSlide(currentIndex);

    // add click event listeners to the buttons
    prevButton.addEventListener("click", goToPrevSlide);
    nextButton.addEventListener("click", goToNextSlide);
    console.log(currentIndex);
  }
}

//Toggle article content
function showArticleContent() {
  // First ensure user is on blog page
  if (
    window.location.pathname ===
    "/home/junior4/repos/MADTranslations/src/blog.html"
  ) {
    console.log("y");
    const articleTitles = document.querySelectorAll(".article-title");

    articleTitles.forEach((title) => {
      const plusSign = title.firstElementChild;
      const article = title.nextElementSibling;
      console.log(article, plusSign);

      plusSign.addEventListener("click", (e) => {
        article.classList.toggle("article-expanded");
        plusSign
      });
    });
  }
}

function commentHandler() {
  const commentForm = document.querySelector("#comment-form");
  const commentSection = document.querySelector(".comment-section");
  const commentsList = [];

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;;
    const comment = e.target.comment.value;
    const email = e.target.email.value;

    commentsList.push({ name, email, comment  });

    e.target.reset();
    console.log(commentsList);
    displayComments();
  });

  function displayComments() {
    commentSection.textContent = "";

    commentsList.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

      const commentName = document.createElement("h3");
      commentName.textContent = comment.name;

      const commentEmail = document.createElement("p");
      commentEmail.textContent = comment.email;

      const commentComment = document.createElement("p");
      commentComment.textContent = comment.comment;

      commentDiv.appendChild(commentName);
      commentDiv.appendChild(commentEmail);
      commentDiv.appendChild(commentComment);

      commentSection.appendChild(commentDiv);
    });
  }
}

export default function pageLoader() {
  dropdownMenu();
  imageSlider();
  showArticleContent();
  commentHandler();
}
pageLoader();
