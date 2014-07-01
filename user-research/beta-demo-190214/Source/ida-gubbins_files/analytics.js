var Analytics = Analytics || {};

Analytics.Utils = function() {
    
  function saveOnServer() {
    _paq.push(['trackPageView']); 
  }
  
  function trackLink(key,value) {
    _paq.push(['trackLink', key, value]);
    console.log('trackLink', key, value);
    saveOnServer();
  }
  
  function saveVisitVar(id,key,value) {
    _paq.push(['setCustomVariable', id, key, value, 'visit']); 
    saveOnServer();
  }

  function savePageVar(id,key,value) {
    _paq.push(['setCustomVariable', id, key, value, 'page']); 
    saveOnServer();
  }
  
  function init(hook) {
    window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};
  }
  
  init();
  
  return {
    saveVisitVar: saveVisitVar,
    savePageVar: savePageVar,
    saveOnServer: saveOnServer,
    trackLink: trackLink
  }
  
}

_analytics = Analytics.Utils();