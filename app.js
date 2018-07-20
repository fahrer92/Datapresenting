
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
    },

  }

})();

// view CONTROLLER
var viewController = (function(){
    var htmlUnderInsured;
  return {
    dcUnderinsured: function(data, net) {
      //Creat HTML string with placeholder text
      htmlUnderInsured =
                 '<p>You might need another $'+ net + ' of cover to protect your family against the unexpected.</p>'
                +'  <div class="progress"> <div class="progress-bar orange-light" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'

               +' <div class = "infoBox float-right">'
                 +'   <div class="triangle triangle-green"></div>'
                   +' <button type="button" class="btn btn-success">'
                   +'   <span><h6 class="text-white">Required</h6></span>'
                     +' <span><h4 class ="text-white">$'+data.DCREQUIREDCOVER+'</h4></span>'
                   +' <span class = "text-white">'
                       +' <p class = "cost-p">cost:$' +data.DCREQUIREDPREMIUM+ '/year'
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
                       +'<span><h5 class ="text-orange">$'+data.DCCURRENTCOVER+'</h5></span>'
                       +'<span><p>cost: $'+data.DCCURRENTCOVERPREMIUM+'/year</p></span>'
                     +'</div>'
                    +'</div>';

      //Insert the HTML into the DOM
      document.querySelector('.wrapperDC').insertAdjacentHTML('beforeend',htmlUnderInsured);
    },

    dcOverinsured: function(data) {
      //Creat HTML string with placeholder text
      htmlOverInsured =
                 '<p>You might have more than enough to give you a cash flow safety net.</p>'
                +'  <div class="progress"><div class="progress-bar green" role="progressbar" style="width: 25%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div><div class="progress-bar blue" role="progressbar" style="width: 75%"; aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div></div>'

              +'<div class = "infoBox float-right">'
                +'<div class="triangle triangle-blue"></div>'
                +'<div class="current bg-light text-center">'
                  +' <span class="font-weight-bold">Current</span>'
                    +'<span><h5 class ="text-blue">$'+data.DCREQUIREDCOVER+'</h5></span>'
                    +'<span><p>cost: $'+data.DCREQUIREDPREMIUM+'/year</p></span>'
                  +'</div>'
                +'</div>'

                +'<div class = "infoBox infoBox-left">'
                    +'<div class="triangle triangle-green"></div>'
                    +'<button type="button" class="btn btn-success" >'
                      +' <span><h6 class="text-white">Required</h6></span>'
                      +'<span><h4 class ="text-white">$'+ data.DCCURRENTCOVER +'</h4></span>'
                      +'<span class = "text-white">'
                        +' <p class = "cost-p">cost: $'+data.DCCURRENTCOVERPREMIUM+'/year'
                           +' <span class="dot float-right">'
                              +' <i class="fas fa-info"></i>'
                            +' </span>'
                        +' <p>'
                      +' </span>'
                    +' </button>'
                  +'</div>'

      //Insert the HTML into the DOM
      document.querySelector('.wrapperDC').insertAdjacentHTML('beforeend',htmlOverInsured);
    },



  }

})();

//Global APP CONTROLLER
var Controller = (function(modelCtrl,viewCtrl){
  var data = modelCtrl.getInputValue();
  //submit button
  var setUpEventListener = function(){

    document.querySelector('#inputSubmit').addEventListener('click',function(){
    event.preventDefault();

    console.log(modelCtrl.getInputValue());

    //Calculate level of over / under insurance
    var DCNetCoverage = data.DCREQUIREDCOVER - data.DCCURRENTCOVER;

    //viewCtrl.dcUnderinsured(data,DCNetCoverage);
    viewCtrl.dcOverinsured(data);
  });
}



  return {

    init: function(){
      setUpEventListener();

    }

  }

})(modelController,viewController);

Controller.init();
