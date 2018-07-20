
// Model CONTROLLER
var modelController = (function(){

  var data = {
      TPDCURRENTCOVER:-1,
      TPDCURRENTCOVERPREMIUM:-1,
      TPDREQUIREDCOVER:-1,
      TPDREQUIREDPREMIUM:-1,
      DCCURRENTCOVER:-1,
      DCCURRENTCOVERPREMIUM:-1,
      DCREQUIREDCOVER:-1,
      DCREQUIREDPREMIUM:-1
    }

  return {
    getInputValue:function(){
      data.TPDCURRENTCOVER = document.getElementById('TPD_current_cover').value;
      data.TPDCURRENTCOVERPREMIUM = document.getElementById('TPD_current_cover_premium').value;
      data.TPDREQUIREDCOVER = document.getElementById('TPD_current_required_cover').value;
      data.TPDREQUIREDPREMIUM = document.getElementById('TPD_current_required_premium').value;
      data.DCCURRENTCOVER = document.getElementById('DC_current_cover').value;
      data.DCCURRENTCOVERPREMIUM = document.getElementById('DC_current_cover_premium').value;
      data.DCREQUIREDCOVER = document.getElementById('DC_current_required_cover').value;
      data.DCREQUIREDPREMIUM = document.getElementById('DC_current_required_premium').value;

      return data;
    }
  }

})();

// view CONTROLLER
var viewController = (function(){

  return {

  }

})();

//Global APP CONTROLLER
var Controller = (function(modelCtrl,viewCtrl){

  //submit button
  var setUpEventListener = function(){

    document.querySelector('#inputSubmit').addEventListener('click',function(){
    event.preventDefault();

    console.log('test')
    console.log(modelCtrl.getInputValue());

  });
}



  return {

    init: function(){
      setUpEventListener();

    }

  }

})(modelController,viewController);

Controller.init();
