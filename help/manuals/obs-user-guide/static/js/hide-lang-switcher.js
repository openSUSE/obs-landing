// Hides the language switcher on the SUSE header
var interval = setInterval(function () {
   var sharedHeader = document.querySelector("shared-header");
   var header = document.querySelector("header");

   if (header) {
      clearInterval(interval);
   } else if (sharedHeader) {
      var dropdown = document.querySelector('shared-header').shadowRoot.querySelector('suse-pl-dropdown');
      if (dropdown) {
        dropdown.style.display = "none";
        clearInterval(interval);
      }
   }
}, 100);
