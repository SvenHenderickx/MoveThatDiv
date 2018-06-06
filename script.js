// var anim = function() {
//   return {
//     createGradient: function () { new Shake().creat}
//   }
// }();

var MoveThatDiv = function() {

  /**
   * The default settings for the shake
   * @type {{selector: string, tiltAngle: number, speed: number}}
   */
  var defaultSettingsShake = {
    selector: '',
    tiltAngle: 20, // The deg to which the shake moves at max
    speed: 10, //The speed at which the shake moves in ms
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

  /**
   * The element which you plan to use
   * @type {HTMLElement}
   */
  var element;

  /**
   * The number used to change the element, starts at 0
   * @type {Number}
   */
  var nmb = 0;

  /**
   * Makes the number (nmb) wait untill he is 0 again
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
  var shake = function(){
    if(nmb < defaultSettingsShake.tiltAngle && !waiting){
      nmb = nmb + 1;
    }
    else{
      waiting = true;
      nmb = nmb - 1;
      if(nmb === 0 - defaultSettingsShake.tiltAngle){
        waiting = false;
      }
    }

    element.style.webkitTransform = 'rotate('+nmb+'deg)';
    element.style.mozTransform    = 'rotate('+nmb+'deg)';
    element.style.msTransform     = 'rotate('+nmb+'deg)';
    element.style.oTransform      = 'rotate('+nmb+'deg)';
    element.style.transform       = 'rotate('+nmb+'deg)';
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
  }

  var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };

  /**
   * The function which you can call when you want to apply the custom gradient
   * @param  {[type]} element [description]
   * @return {this}         [description]
   */
  var customShake = function(selector, settings){
    mergeObjects(defaultSettingsShake, settings || {});
    selector = selector || defaultSettingsShake.selector;
    element = document.querySelector(selector);
    updateScreen = shake;
    setInterval(updateScreen, defaultSettingsShake.speed);
  };

  /**
   * The function which you can call when you want to apply the custom gradient
   * @param  {[type]} selector [description]
   * @param  {[type]} settings [description]
   * @return {[type]}          [description]
   */
  var customGradient = function(selector, settings){
    mergeObjects(defaultSettingsGradient, settings || {});
    selector = selector || defaultSettingsGradient.selector;
    element = document.querySelector(selector);
    updateScreen = moveGradient;
    setInterval(updateScreen, defaultSettingsGradient.speed);
  };

  return{
    customShake: customShake,
    customGradient: customGradient
  };
}
