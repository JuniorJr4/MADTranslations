import "../src/style.css";

function dropdownMenu() {
  const workDropdown = document.querySelector(".work-dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
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

export default function pageLoader() {
  dropdownMenu();
}
pageLoader();
