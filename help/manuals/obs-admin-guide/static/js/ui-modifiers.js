const { origin, pathname } = window.location;
const htmlMatch = pathname.match(/\/(single-html|html)\//);
const releaseNotesMatch = pathname.match(/^\/releasenotes\//);

let result;

if (releaseNotesMatch) {
  result = origin + "/?tab=release-notes";
} else if (htmlMatch) {
  const basePath = pathname.slice(0, htmlMatch.index);
  result = origin + (basePath || "/") + "/";
} else {
  result = origin + pathname;
}

document.addEventListener("DOMContentLoaded", () => {
  const crumb = document.querySelector(".index-page-crumb");
  if (crumb) {
    crumb.setAttribute("href", result);
  }
});
