var Page = Page || {};
Page.StartPage = Page.StartPage || {};

Page.StartPage = function() {

  var messageBox;
  
  function govtGatewayClicked(e) {
    e.preventDefault();
    messageBox.show();
  }
  
  function init() {
    messageBox = new Page.MessageBox({'autohide':false});
    $('.govt-gateway').on('click', govtGatewayClicked);
  }
  
  init();

  return {}

}

var pageSignin;

$(document).ready(function(){
  
  pageSignin = new Page.StartPage();
      
});