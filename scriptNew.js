function MoveThatDiv(selector){

  /**
   * The default settings for the shake
   * @type {{selector: string, tiltAngle: number, speed: number}}
   */
  var defaultSettingsShake = {
    selector: '',
    tiltAngle: 10, // The deg to which the shake moves at max
    speed: 100, //The speed at which the shake moves in ms
  };

  /**
   * The default settings for the gradient mover
   * @type {Object}
   */
  var defaultSettingsGradient = {
    selector: '',
    colorInner: 'blue',
    colorOuter: 'darkBlue',
    speed: 10
  };

  var self = {};
  self.selector = selector;
  self.element = document.querySelector(self.selector);

  /**
   * The number used to change the element, starts at 0
   * @type {Number}
   */
   counterNumber: nu

  /**
   * Makes the number (counter) wait untill he is 0 again
   * @type {Boolean}
   */
  var waiting = false;

  /**
   * Set updateScreen to shake
   * @type {[type]}
   */
   var updateScreen;

  /**
  * the function which applies the shake
  * @return {[type]} [description]
  */
  var shake = function(counterNumber){
    element.style.webkitTransform = 'rotate('+counterNumber+'deg)';
    element.style.mozTransform    = 'rotate('+counterNumber+'deg)';
    element.style.msTransform     = 'rotate('+counterNumber+'deg)';
    element.style.oTransform      = 'rotate('+counterNumber+'deg)';
    element.style.transform       = 'rotate('+counterNumber+'deg)';
  };

  var logicNumber = function(number, wait){
    // counterIn = counterIn.number;
    var counterNumber = number;
    var waiting = wait;
    console.log(counterNumber);
    if(counterNumber < defaultSettingsShake.tiltAngle && !waiting){
      counterNumber = counterNumber + 1;
    }
    else{
      waiting = true;
      counterNumber = counterNumber - 1;
      if(counterNumber === 0 - defaultSettingsShake.tiltAngle){
        waiting = false;
      }
    }

    updateScreen(counterNumber, waiting);
  };

  var updateScreen = function(number, wait){
    setInterval(shake(number), defaultSettingsShake.speed);
  };

  /**
   * the function which applies the gradient
   * @return {[type]} [description]
   */
  var moveGradient = function(){
    if(nmb < 100 && !waiting){
      nmb = nmb + 1;
    }
    else{
      waiting = true;
      nmb = nmb - 1;
      if(nmb === 0){
        waiting = false;
      }
    }

    element.style.background = "radial-gradient("+defaultSettingsGradient.colorInner+" "+nmb+"%, "+defaultSettingsGradient.colorOuter+" 100%)"
  };

  self.customShake = function(){
    defaultSettingsShake.selector = self || defaultSettingsShake.selector;
    element = document.querySelector(self.selector);
    logicNumber(0, false);
    return self;
  };

  /**
   * The function which you can call when you want to apply the custom gradient
   * @param  {[type]} selector [description]
   * @param  {[type]} settings [description]
   * @return {[type]}          [description]
   */
  self.customGradient = function(){
    defaultSettingsGradient = self || defaultSettingsShake.selector;
    element = document.querySelector(self.selector);
    updateScreen = moveGradient;
    setInterval(updateScreen, defaultSettingsGradient.speed);
  };

  return self;
};


// var MoveThatDiv = function() {
//
//
//
//
//   /**
//    * The default settings for the gradient mover
//    * @type {Object}
//    */
//   var defaultSettingsGradient = {
//     selector: '',
//     colorInner: 'blue',
//     colorOuter: 'darkBlue',
//     speed: 10
//   };
//
//   /**
//    * The element which you plan to use
//    * @type {HTMLElement}
//    */
//   var element;
//
//
//
//   /**
//    * the function which applies the gradient
//    * @return {[type]} [description]
//    */
//   var moveGradient = function(){
//     if(counter < 100 && !waiting){
//       counter = counter + 1;
//     }
//     else{
//       waiting = true;
//       counter = counter - 1;
//       if(counter === 0){
//         waiting = false;
//       }
//     }
//
//     element.style.background = "radial-gradient("+defaultSettingsGradient.colorInner+" "+counter+"%, "+defaultSettingsGradient.colorOuter+" 100%)"
//   }
//
//
//
//   /**
//    * The function which you can call when you want to apply the custom gradient
//    * @param  {[type]} element [description]
//    * @return {this}         [description]
//    */
//   var customShake = function(selector, settings){
//     mergeObjects(defaultSettingsShake, settings || {});
//     selector = selector || defaultSettingsShake.selector;
//     element = document.querySelector(selector);
//     updateScreen = shake;
//     setInterval(updateScreen, defaultSettingsShake.speed);
//   };
//
//   /**
//    * The function which you can call when you want to apply the custom gradient
//    * @param  {[type]} selector [description]
//    * @param  {[type]} settings [description]
//    * @return {[type]}          [description]
//    */
//   var customGradient = function(selector, settings){
//     mergeObjects(defaultSettingsGradient, settings || {});
//     selector = selector || defaultSettingsGradient.selector;
//     element = document.querySelector(selector);
//     updateScreen = moveGradient;
//     setInterval(updateScreen, defaultSettingsGradient.speed);
//   };
//
//   return{
//     customShake: customShake,
//     customGradient: customGradient
//   };
// }
