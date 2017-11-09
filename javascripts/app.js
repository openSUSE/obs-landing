$(document)
  .ready(function() {

    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed'
    });
    
    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });
  });
