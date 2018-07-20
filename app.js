/*
TODO:

1. Logic for deciding which data to display under DC/ TPDI. CUrrently its all DC
2. Render Edge Cases
3.Import DOM Names/ Make it more robust to changes


*/


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

  /*
    var formatNumber = function(num){
      		//is number >999
          console.log(num);
          var n = num.toString();
          console.log(n);
      if (num.length>3){
        n=n.substr(0,n.length-3) + ","+ n.substr(n.length-3,3);
      }
      console.log(n);
      return n;
    }
*/
  return {
    renderUnderinsured: function(data, net, htmlWrapper) {
      //Creat HTML string with placeholder text
    var htmlUnderInsured =
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
      document.querySelector(htmlWrapper).insertAdjacentHTML('beforeend',htmlUnderInsured);
    },

    renderOverinsured: function(data, htmlWrapper) {
      //Creat HTML string with placeholder text
      var htmlOverInsured =
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
      document.querySelector(htmlWrapper).insertAdjacentHTML('beforeend',htmlOverInsured);
    },
    /*
    renderNoInsurance: function(data, htmlWrapper){

      var requiredCover, requiredPremium;
      //Display DC or TPDI data depending on which class wrapper is passed into function
      if(htmlWrapper ===".wrapperDC"){
        requiredCover = data.DCREQUIREDCOVER;
        requiredPremium = data.DCREQUIREDPREMIUM;
      }else if (htmlWrapper === ".wrapperTPDI"){
        requiredCover = data.TPDIREQUIREDCOVER;
        requiredPremium = data.TPDIREQUIREDPREMIUM;
      }else{
        alert("htmlWrapper MUST EQUAL Dom Wrapper ClassName")
      }

      var noInsurance = '<div class="progress"><div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div></div>'

              +'<div class = "infoBox float-right">'
              +' <div class="triangle triangle-red"></div>'
              +'<button type="button" class="btn btn-danger">'
              +'<span><h6 class="text-white">Required</h6></span>'
              +'  <span><h4 class ="text-white">$'+requiredCover+'</h4></span>'
                +'<span class = "text-white">'
                  +'<p class = "cost-p">cost: $'+requiredPremium+'/year'
                   +'<span class="dot float-right">'
                    +'<i class="fas fa-info"></i>'
                    +'</span>'
                  +'<p>'
                +'</span>'
                +'</button>'
              +'</div>'

              +'<div class = "infoBox infoBox-left">'
                +'<div class="triangle triangle-red" ></div>'
                +'<div class="current bg-light text-center">'
                  +'<p class="font-weight-bold">Current</p>'
                  +'<p class="text-danger">You are not insured</p>'
                +'</div>'
              +'</div>';



      //Insert the HTML into the DOM
      document.querySelector(htmlWrapper).insertAdjacentHTML('beforeend',noInsurance);

    }
    */



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
  //console.log(data);

    //Calculate level of over / under insurance
    var DCNetCoverage = data.DCREQUIREDCOVER - data.DCCURRENTCOVER;
    var TPDNetCoverage =data.TPDREQUIREDCOVER -data.TPDCURRENTCOVER;
    console.log(TPDNetCoverage);

    //Check Insurance Requirements and render accordingly

      if (DCNetCoverage>0){
          viewCtrl.renderUnderinsured(data,DCNetCoverage,'.wrapperDC');
      }else{
          viewCtrl.renderOverinsured(data, '.wrapperDC');
      }


      if (TPDNetCoverage>0){
        viewCtrl.renderUnderinsured(data,TPDNetCoverage,'.wrapperTPDI');
      }else{
        viewCtrl.renderOverinsured(data, '.wrapperTPDI');
      }
  });
}



  return {

    init: function(){
      setUpEventListener();

    }

  }

})(modelController,viewController);

Controller.init();
