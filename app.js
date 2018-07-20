
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
    var htmlUnderInsured;
  return {
    addDC: function() {
      //Creat HTML string with placeholder text
      htmlUnderInsured =
                '  <div class="progress"> <div class="progress-bar orange-light" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'
               +' <div class = "infoBox float-right">'
                 +'   <div class="triangle triangle-green"></div>'
                   +' <button type="button" class="btn btn-success">'
                   +'   <span><h6 class="text-white">Required</h6></span>'
                     +' <span><h4 class ="text-white">$400,000</h4></span>'
                   +' <span class = "text-white">'
                       +' <p class = "cost-p">cost: $300/year'
                        +' <span class="dot float-right">'
                          +'<i class="fas fa-info"></i>'
                          +'</span>'
                       +'<p>'
                     +'</span>'
                   +'</button>'
                  +'</div>'

                   +'<div class = "infoBox infoBox-left">'
                    +' <div class="triangle triangle-orange" ></div>'
                     +'<div class="current bg-light text-center">'
                      +'<span class="font-weight-bold">Current</span>'
                       +'<span><h5 class ="text-orange">$250,000</h5></span>'
                       +'<span><p>cost: $300/year</p></span>'
                     +'</div>'
                    +'</div>';

      //Insert the HTML into the DOM
      document.querySelector('.wrapperDC').insertAdjacentHTML('beforeend',htmlUnderInsured);

    }

  }

})();

//Global APP CONTROLLER
var Controller = (function(modelCtrl,viewCtrl){

  //submit button
  var setUpEventListener = function(){

    document.querySelector('#inputSubmit').addEventListener('click',function(){
    event.preventDefault();

    console.log(modelCtrl.getInputValue());
    viewCtrl.addDC();
  });
}



  return {

    init: function(){
      setUpEventListener();

    }

  }

})(modelController,viewController);

Controller.init();
