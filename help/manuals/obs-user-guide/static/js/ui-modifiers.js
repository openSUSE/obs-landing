const { origin, pathname } = window.location;
const htmlMatch = pathname.match(/\/(single-html|html)\//);
const releaseNotesMatch = pathname.match(/\/releasenotes\//);

let result;

if (htmlMatch) {
  const basePath = pathname.slice(0, htmlMatch.index);
  result = origin + (basePath || "/") + "/";
} else if (releaseNotesMatch) {
  const newPath = pathname.replace(/\/releasenotes\//, "/");
  result = origin + newPath;
} else {
  result = origin + pathname;
}

document.addEventListener("DOMContentLoaded", () => {
  const crumb = document.querySelector(".index-page-crumb");
  if (crumb) {
    crumb.setAttribute("href", result);
  }
});
