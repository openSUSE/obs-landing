/*
JavaScript for SUSE documentation

Authors:
   Stefan Knorr, Thomas Schraitle, Adam Spiers

License: GPL 2+

(c) 2012-2022 SUSE LLC
*/

var active = false;
var deactivatePosition = -1;

var bugtrackerUrl = $( 'meta[name="tracker-url"]' ).attr('content');
var bugtrackerType = $( 'meta[name="tracker-type"]' ).attr('content');

// we handle Github (= gh) and bugzilla.suse.com (= bsc), default to bsc
if ((bugtrackerType != 'gh') && (bugtrackerType != 'bsc')) {
  bugtrackerType = 'bsc';
}

// For Bugzilla
var bscComponent = $( 'meta[name="tracker-bsc-component"]' ).attr('content');
if (!bscComponent) {
  bscComponent = 'Documentation'; // default component
}
var bscProduct = $( 'meta[name="tracker-bsc-product"]' ).attr('content');
var bscAssignee = $( 'meta[name="tracker-bsc-assignee"]' ).attr('content');
var bscVersion = $( 'meta[name="tracker-bsc-version"]' ).attr('content');
var bscTemplate = $( 'meta[name="tracker-bsc-template"]' ).attr('content');
// For GitHub
var ghAssignee = $( 'meta[name="tracker-gh-assignee"]' ).attr('content');
var ghLabels = $( 'meta[name="tracker-gh-labels"]' ).attr('content');
var ghMilestone = $( 'meta[name="tracker-gh-milestone"]' ).attr('content');
var ghTemplate = $( 'meta[name="tracker-gh-template"]' ).attr('content');

const source_svg = '<svg class="source_svg" xmlns="http://www.w3.org/2000/svg" width="23.067348" height="26.213722" viewBox="0 0 6.1032359 6.9357145" version="1.1"><path fill="none" stroke="#c0c2c4" stroke-width="0.264583px" d="m 0.1327732,0.13229144 5.8381716,1.076e-5 -3.6e-6,4.7625 -3.7041668,1.21e-5 -1.0583335,1.6009044 -1.07e-5,-1.6009045 -1.05833339,5.9e-6 z M 3.9857659,1.7577095 4.8046844,2.5766279 3.985766,3.3955459 M 2.2976362,1.7577096 1.4787181,2.5766278 2.297636,3.3955459 M 3.6535249,1.5529801 2.6298773,3.6002755" /></svg>';
const bug_svg = '<svg class="bug_svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 6.1 6.94" version="1.1"><path fill="none" stroke="black" stroke-width="0.264581" d="m 3.04305,3.18412 5e-4,0.25999 M 3.04101,2.12253 3.04255,2.92414 M 3.03946,1.32091 4.64727,3.70101 1.46248,3.70713 Z M 0.155698,0.134866 5.98364,0.123661 5.99281,4.89001 2.26639,4.89718 1.18621,6.50249 1.18313,4.89926 0.164862,4.90122 Z" /></svg>';


function show_meta() {
  console.group("Global variables");
  console.log("bugtrackerUrl: %s", bugtrackerUrl);
  console.log("bugtrackerType: ", bugtrackerType);

  console.log("----");
  console.log("bscComponent: %s", bscComponent);
  console.log("bscProduct: %s", bscProduct);
  console.log("bscAssignee: %s", bscAssignee);
  console.log("bscVersion: %s", bscVersion);
  console.log("bscTemplate: %s", bscTemplate);
  console.log("----");
  console.log("ghAssignee: %s", ghAssignee);
  console.log("ghLabels: %s", ghLabels);
  console.log("ghMilestone: %s", ghMilestone);
  console.log("ghTemplate: %s", ghTemplate);
  // console.log("report bug SVG: %s", bug_svg);
  console.groupEnd();
}


$(function() {
  /* http://css-tricks.com/snippets/jquery/smooth-scrolling/ */
  var speed = 400;

  show_meta();

  $('a.top-button[href=\\#]').click(function() {
    $('html,body').animate({ scrollTop: 0 }, speed,
      function() { location = location.pathname + '#'; });
    return false;
  });


  $('body').removeClass('js-off');
  $('body').addClass('js-on');

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { deactivate() }
  });

  if( window.addEventListener ) {
    window.addEventListener('scroll', scrollDeactivator, false);
  }

  hashActivator();
  window.onhashchange = hashActivator;

  $('._share-print').show();

  if (location.protocol.match(/^(http|spdy)/)) {
    $('body').removeClass('offline');
  }

  labelInputFind();

  $('#_toc-area-button').click(function(){activate('_toc-area'); return false;});
  $('#_fixed-header .single-crumb').unbind('click');
  $('#_fixed-header .single-crumb').click(function(){activate('_fixed-header-wrap'); return false;});
  $('#_header .single-crumb').unbind('click');
  $('#_header .single-crumb').click(function(){ moveToc('up'); return false;});
  $('#_find-area-button').click(function(){activate('_toc-area'); return false;});
  $('#_format-picker-button').click(function(){activate('_format-picker'); return false;});
  $('#_language-picker-button').click(function(){activate('_language-picker'); return false;});
  $('html').click(function(e){deactivate(); e.stopPropagation();});
  $('#_find-input').focus(function(){unlabelInputFind();});
  $('#_find-input').blur(function(){labelInputFind();});
  $('#_find-input-label').click(function(){$('#_find-input').focus();});

  $('._share-fb').click(function(){share('fb');});
  $('._share-in').click(function(){share('in');});
  $('._share-tw').click(function(){share('tw');});
  $('._share-mail').click(function(){share('mail');});
  $('._print-button').click(function(){print();});

  $('#_bubble-toc ol > li').filter(':has(ol)').children('a').unbind('click');
  $('#_bubble-toc ol > li').filter(':has(ol)').children('a').append('<span class="arrow">&nbsp;</span>');
  $('#_bubble-toc ol > li').filter(':has(ol)').children('a').click(function(e) {
    exchClass('#_bubble-toc > ol > li', 'active', 'inactive');
    $(this).parent('li').removeClass('inactive');
    $(this).parent('li').addClass('active');
    e.stopPropagation();
    e.preventDefault();
    return false;
  });
  $('#_bubble-toc ol > li').not(':has(ol)').children('a').click(function(e) {
    deactivate();
  });
  $('#_bubble-toc > ol').not(':has(li > ol)').addClass('full-width');
  $('#_bubble-toc ol > li').not(':has(ol)').children('a').addClass('leads-to-page');
  $('#_bubble-toc ol > li').not(':has(ol)').children('a').click(function(e) {
    exchClass('#_bubble-toc > ol > li', 'active', 'inactive');
  });
  $('#_bubble-toc ol > li').has('ol').children('a').append('<span class="arrow">&nbsp;</span>');
  $('#_bubble-toc ol ol').prepend('<li class="bubble-back"><a href="#"><span class="back-icon">&nbsp;</span></a></li>');
  $('.bubble-back').click(function(){exchClass('#_bubble-toc > ol > li', 'active', 'inactive'); return false;});
  $('#_pickers a.selected').append('<span class="tick">&nbsp;</span>');
  $(".bubble").click(function(e) {e.stopPropagation();});
  $('.bubble h6').append('<span class="bubble-closer">&nbsp;</span>');
  $('.bubble-closer').click(function(){deactivate(); return false;});
  $('.question').click(function(){ $(this).parent('dl').toggleClass('active'); });
  $('.table tr').has('td[rowspan]').addClass('contains-rowspan');
  $('.informaltable tr').has('td[rowspan]').addClass('contains-rowspan');

  if ( !( $('#_nav-area div').length ) ) {
    $('#_toolbar').addClass('only-toc');
  }
  else if ( !( $('#_toc-area div').length && $('#_nav-area div').length ) ) {
    $('#_toolbar').addClass('only-nav');
  }

  addBugLinks();
  // hljs likes to unset click handlers, so run after it
  var hljsInterval = window.setInterval(function() {
    if (typeof(hljs) !== 'undefined') {
      addClipboardButtons();
      window.clearInterval(hljsInterval);
    };
  }, 500);
});


function addBugLinks() {
  // do not create links if there is no URL
  if ( typeof(bugtrackerUrl) == 'string') {

    $('.permalink:not([href^=\\#idm])').each(function (index) {
      var permalink = this.href;
      var sectionNumber = "";
      var sectionName = "";
      var url = "";
      var parentnode = $(this).parent()

      function prev(x, node=parentnode) {
        return node.children(x);
      };

      if ( prev('.title-number') ) {
        sectionNumber = prev('.title-number').text();
      }
      if ( prev('span.title-number') ) {
        sectionName = prev('.title-name').text();
      }

      // for the first link and when we have an empty section title,
      // it's the title
      if ( sectionName == "" && index == 1) {
        // we are at the first link
        sectionName = $("meta[name=book-title]").attr("content");
      }

      if ( sectionName == "" ) {
        // usually bridgeheads
        // console.log("section name is empty. Doing something else.");
        sectionName = prev('.name').text();
      }

      console.log("Section[%s]: %s: '%s'", index, sectionNumber, sectionName);

      if (bugtrackerType == 'bsc') {
        url = bugzillaUrl(sectionNumber, sectionName, permalink);
      }
      else {
        url = githubUrl(sectionNumber, sectionName, permalink);
      }

      report_bug_link = "<a class=\"report-bug\" target=\"_blank\" href=\""
                        + url
                        + "\" title=\"Report a bug against this section of the documentation\">"
                        // + "&#9733;"
                        // + "Report Bug "
                        // + "<img src=\"bug-report.svg\" height=\"\"/>"
                        + bug_svg
                        + "</a> ";
      console.log("Report bug link: %s", report_bug_link);
      $(this).after(report_bug_link);
      source_bug_link = "<a class=\"source-link\" title=\"Hallo\""
                        + source_svg
                        + "</a> ";
      $(this).after(source_bug_link);
      return true;
    });
  }
  else {
    return false;
  }
}

function githubUrl(sectionNumber, sectionName, permalink) {
  var body = sectionNumber + " " + sectionName + ":\n\n" + permalink;
  if (ghTemplate) {
    if (ghTemplate.indexOf('@@source@@') !== -1) {
      body = ghTemplate.replace(/@@source@@/i, body);
    } else {
      body = body + '\n' + ghTemplate;
    };
  };
  var url = bugtrackerUrl
     + "?title=" + encodeURIComponent('[doc] ' + sectionNumber + ' ' + sectionName)
     + "&amp;body=" + encodeURIComponent(body);
  if (ghAssignee) {
    url += "&amp;assignee=" + encodeURIComponent(ghAssignee);
  }
  if (ghMilestone) {
    url += "&amp;milestone=" + encodeURIComponent(ghMilestone);
  }
  if (ghLabels) {
    url += "&amp;labels=" + encodeURIComponent(ghLabels);
  }
  return url;
}

function bugzillaUrl(sectionNumber, sectionName, permalink) {
  var body = sectionNumber + " " + sectionName + ":\n\n" + permalink;
  if (bscTemplate) {
    if (bscTemplate.indexOf('@@source@@') !== -1) {
      body = bscTemplate.replace(/@@source@@/i, body);
    } else {
      body = body + '\n' + bscTemplate;
    };
  };
  var url = bugtrackerUrl + "?&amp;product=" + encodeURIComponent(bscProduct)
    + '&amp;component=' + encodeURIComponent(bscComponent)
    + "&amp;short_desc=" + encodeURIComponent('[doc] ' + sectionNumber + ' ' + sectionName)
    + "&amp;comment=" + encodeURIComponent(body);
  if (bscAssignee) {
    url += "&amp;assigned_to=" + encodeURIComponent(bscAssignee);
  }
  if (bscVersion) {
    url += "&amp;version=" + encodeURIComponent(bscVersion);
  }
  return url;
}

function addClipboardButtons() {
  $( ".verbatim-wrap > pre" ).each(function () {
      var clipButton = $('<button/>', {
          class: 'clip-button',
          text: 'Copy',
          click: function () {
            var elm = this.previousSibling;
            copyToClipboard(elm);
            elm.parentElement.classList.add("copy-success");
            setTimeout(function() {
              elm.parentElement.classList.remove("copy-success");
            }, 1000);
          }
        }
      );
      $(this).after(clipButton);
      return true;
    }
  );
}

function copyToClipboard(elm) {
  // use temporary hidden form element for selection and copy action
  var targetId = "__hiddenCopyText__";
  target = document.getElementById(targetId);
  if (!target) {
    var target = document.createElement("textarea");
    target.style.position = "fixed";
    target.style.left = "-9999px";
    target.style.top = "0";
    target.id = targetId;
    document.body.appendChild(target);
  } else {
    // empty out old content
    target.textContent = "";
  };
  $(elm).contents().each(function () {
      try {
        // we only want user-selectable elements, but not prompts.
        // (notably, if we have deeper nesting of inline elements, this
        // detection will fail but it should be good enough for common cases)
        if (getComputedStyle(this)['user-select'] != 'none') {
          target.textContent += this.textContent;
        };
      } catch(e) {
        // it's not an element node but a text node, so we always want it
        target.textContent += this.textContent;
      };
    }
  );
  // select the content
  var currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);

  // copy the selection
  var succeed;
  try {
    succeed = document.execCommand("copy");
  } catch(e) {
    succeed = false;
  }
  // restore original focus
  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }

  return succeed;
}


function activate( elm ) {
  var element = elm;
  if (element == '_toc-area' || element == '_find-area' ||
    element == '_language-picker' || element == '_format-picker' ||
    element == '_fixed-header-wrap') {
    deactivate();
    active = true;
    exchClass( '#' + element , 'inactive', 'active' );
    if (element == '_fixed-header-wrap') {
      $('#_fixed-header .single-crumb').unbind('click');
      $('#_fixed-header .single-crumb').click(function(){deactivate(); return false;});
      exchClass( '#_find-area', 'active', 'inactive' );
      deactivatePosition = $('html').scrollTop();
    }
    else {
      if (element == '_find-area') {
        $('#_find-input').focus();
      }
      else if ((element == '_toc-area')) {
        exchClass( '#_find-area', 'active', 'inactive' );
        deactivatePosition = $('html').scrollTop();
        if ( $(window).width() < 450 ) {
          $('body').css('overflow', 'hidden');
          $('body').css('height', '100%');
        }
      }
      $('#' + element + '-button').unbind('click');
      $('#' + element + '-button').click(function(){deactivate(); return false;});
    }
  }
}

function moveToc ( direction ) {
  if (direction == 'up') {
    active = true;
    $('#_fixed-header-wrap > .bubble').detach().appendTo('#_toc-bubble-wrap');
    exchClass( '#_toc-bubble-wrap', 'inactive', 'active' );
    exchClass( '#_header .crumbs', 'inactive', 'active' );
    $('#_header .single-crumb').unbind('click');
    $('#_header .single-crumb').click(function(){ moveToc('down'); return false;});
    deactivatePosition = $('html').scrollTop();
    if ( $(window).width() < 450 ) {
      $('body').css('overflow', 'hidden');
      $('body').css('height', '100%');
    }
  }
  else if (direction == 'down') {
    active = true;
    $('#_toc-bubble-wrap > .bubble').detach().appendTo('#_fixed-header-wrap');
    exchClass( '#_toc-bubble-wrap', 'active', 'inactive' );
    exchClass( '#_header .crumbs', 'active', 'inactive' );
    $('#_header .single-crumb').unbind('click');
    $('#_header .single-crumb').click(function(){ moveToc('up'); return false;});
  }
}

function scrollDeactivator() {
  if (deactivatePosition != -1 && $(window).width() > 450 ) {
    var diffPosition = $('html').scrollTop() - deactivatePosition;
    if ((diffPosition < -300) || (diffPosition > 300)) {
      deactivate();
    }
  }
}

function hashActivator() {
  if ( location.hash.length ) {
    var locationhash = location.hash.replace( /(:|\.|\[|\])/g, "\\$1" );
    if ( $( locationhash ).is(".free-id") ) {
      $( locationhash ).next(".qandaentry").addClass('active');
    };
    if ( $( locationhash ).is(".question") ) {
      location.hash = $( locationhash ).parent(".qandaentry").prev('.free-id').attr('id');
    };
  };
}

function deactivate() {
  if (active == true) {
    deactivatePosition = -1;
    var changeClass = new Array('_toc-area','_language-picker','_format-picker');
    for (var i = 0; i < changeClass.length; ++i) {
      exchClass( '#' + changeClass[i] , 'active', 'inactive');
      $('#' + changeClass[i] + '-button').unbind('click');
    }
    moveToc( 'down' );
    $('#_fixed-header .single-crumb').unbind('click');
    exchClass('#_fixed-header-wrap', 'active', 'inactive');
    $('#_find-area-button').unbind('click');
    $('#_toc-area-button').click(function(){activate('_toc-area'); return false;});
    $('#_find-area-button').click(function(){activate('_find-area'); return false;});
    $('#_language-picker-button').click(function(){activate('_language-picker'); return false;});
    $('#_format-picker-button').click(function(){activate('_format-picker'); return false;});
    $('#_fixed-header .single-crumb').click(function(){activate('_fixed-header-wrap'); return false;});
    exchClass( '#_find-area', 'inactive', 'active' );
    $('body').css('overflow', 'auto');
    $('body').css('height', 'auto');
    active = false;
  }
}

function share( service ) {
  // helpful: https://github.com/bradvin/social-share-urls
  u = encodeURIComponent( document.URL );
  t = encodeURIComponent( document.title );
  shareSettings = 'menubar=0,toolbar=1,status=0,width=600,height=650';
  if ( service == 'fb' ) {
    shareURL = 'https://www.facebook.com/sharer.php?u=' + u + '&amp;t=' + t;
    window.open(shareURL,'sharer', shareSettings);
  }
    else if ( service == 'tw' ) {
    shareURL = 'https://twitter.com/share?text=' + t + '&amp;url=' + u + '&amp;hashtags=suse,docs';
    window.open(shareURL, 'sharer', shareSettings);
  }
    else if ( service == 'in' ) {
    shareURL = 'https://www.linkedin.com/shareArticle?mini=true&' + u + '&amp;title=' + t;
    window.open(shareURL, 'sharer', shareSettings);
  }
    else if ( service == 'mail' ) {
    shareURL = 'mailto:?subject=Check%20out%20the%20SUSE%20Documentation%2C%20%22' + t + '%22&body=' + u;
    window.location.assign(shareURL);
  };
}

function unlabelInputFind() {
  $('#_find-input-label').hide();
}

function labelInputFind() {
  if ( !($('#_find-input').val()) ) {
    $('#_find-input-label').show();
  }
}

function exchClass(path, clsOld, clsNew) {
  $(path).addClass(clsNew);
  $(path).removeClass(clsOld);
}
