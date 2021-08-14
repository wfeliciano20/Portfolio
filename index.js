/* Make the click function for the icons for small screen menu */

const navLink = document.getElementById("nav-links");

const hideMenu = () => {
    navLink.style.right = "-200px";

}

const showMenu = () => {
    navLink.style.right = "0";
}


/* Get the current year and replace it in the footer */

const year = new Date().getFullYear();

const footerSpan = Document.getElementById("current-year");

footerSpan.innerHTML = year;