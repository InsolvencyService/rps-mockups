var Page = Page || {};

Page.MessageBox = function(properties) {
  
  var timer = null;
  var enableAutoHide = false;
  
  function documentKeyUp(e) {
    if (e.keyCode == 27) { 
      hide();
    }
  }
  
  function backgroundClicked(e) { 
    if( e.target !== this ) {
      return;     
    }
   hide();
  }
  
  function init() {
    $('#message-box').on('click', backgroundClicked);
    $('#message-box .dialog-cancel').on('click', function(e) {
      e.preventDefault();
      hide();
    });
    $(document).on('keyup',documentKeyUp);
  };
  
  function hide() {
    $('#message-box').removeClass('on');
    clearTimeout(timer);
  }
  
  function autoHide(){
    return timer = setTimeout(hide,2000);
  }

  init();
  
  return {
    show: function() {
      $('#message-box').addClass('on');
      if(properties.autohide) {
        autoHide();
      }
    },
    hide: hide
  };

};  
  
  
