var PageAnalytics = PageAnalytics || {};
PageAnalytics.Shared = PageAnalytics.Shared || {};


PageAnalytics.Shared = function() {
  
  function trackLink(e) {
    var linkPath = window.location.pathname;
    var linkText = $(this).attr('title')!==undefined ? $(this).attr('title') : $(this).text();    
    
    _analytics.trackLink(linkPath,'trackLink: '+linkText);
  }

  function init() {
    $('footer a').on('click', trackLink);
  }
  
  init();

  return {
    trackLink: trackLink
  }
  
}

var pageAnalyticsShared;

$(document).ready(function(){
  
  pageAnalyticsShared = new PageAnalytics.Shared();
      
});