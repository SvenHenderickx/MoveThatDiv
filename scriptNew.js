function MoveThatDiv(selector){

  /**
   * The default settings for the shake
   * @type {{selector: string, tiltAngle: number, speed: number}}
   */
  var defaultSettingsShake = {
    selector: '',
    tiltAngle: 10, // The deg to which the shake moves at max
    speed: 10 //The speed at which the shake moves in ms
  };

  /**
   * The default settings for the gradient mover
   * @type {{selector: string, colorInner: string, colorOuter: string, speed: number}}
   */
  var defaultSettingsGradient = {
    selector: '',
    colorInner: 'blue', // color in string
    colorOuter: 'darkBlue', // color in string
    speed: 100 // speed of the percentage in ms
  };

  var defaultSettingsShakeList = [];

  var defaultSettingsGradientList = [];

  /**
   * Makes it able to use a function upon itself
   * @type {Object}
   */
  var self = {};
  self.selector = selector;
  self.element = document.querySelector(self.selector);

  /**
   * The list which stores all the counters which are used to count the angle and percentage
   * @type {Array}
   */
   var counterList = [];

  /**
   * Makes the number (counter) wait untill he is 0 again
   * @type {Boolean}
   */
  // var waiting = false;

  /**
   * Set updateScreen to shake
   * @type {[type]}
   */
   var updateScreen;

  /**
  * the function which applies the shake
  * @return {[type]} [description]
  */
  var shake = function(input, lengthIn, el){
    // el = el;
    var counterNumber = input.nmb;
    var waiting = input.waitBool;

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

    counterList[lengthIn].nmb = counterNumber;
    counterList[lengthIn].waitBool = waiting;

    el.style.webkitTransform = 'rotate('+counterNumber+'deg)';
    el.style.mozTransform    = 'rotate('+counterNumber+'deg)';
    el.style.msTransform     = 'rotate('+counterNumber+'deg)';
    el.style.oTransform      = 'rotate('+counterNumber+'deg)';
    el.style.transform       = 'rotate('+counterNumber+'deg)';

    el.style.backgroundColor = 'red';
  };

  /**
  * the function which applies the shake
  * @return {[type]} [description]
  */
  var shakeAll = function(input, lengthIn, el, settings){
    // el = el;
    var i;
    for(i = 0; i < el.length; i++){
      var counterNumber = input.nmb;
      var waiting = input.waitBool;

      if(counterNumber < settings.tiltAngle && !waiting){
        counterNumber = counterNumber + 1;
      }
      else{
        waiting = true;
        counterNumber = counterNumber - 1;
        if(counterNumber === 0 - settings.tiltAngle){
          waiting = false;
        }
      }

      counterList[lengthIn].nmb = counterNumber;
      counterList[lengthIn].waitBool = waiting;

      el[i].style.webkitTransform = 'rotate('+counterNumber+'deg)';
      el[i].style.mozTransform    = 'rotate('+counterNumber+'deg)';
      el[i].style.msTransform     = 'rotate('+counterNumber+'deg)';
      el[i].style.oTransform      = 'rotate('+counterNumber+'deg)';
      el[i].style.transform       = 'rotate('+counterNumber+'deg)';
    }

  };

  /**
   * the function which applies the gradient
   * @return {[type]} [description]
   */
  var moveGradient = function(input, lengthIn, el){
    var nmb = input.nmb;
    var waiting = input.waitBool;

    // console.log("test");
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
    counterList[lengthIn].waitBool = waiting;
    counterList[lengthIn].nmb = nmb;

    el.style.background ='radial-gradient('+defaultSettingsGradient.colorInner+' '+ counterList[lengthIn].nmb +'%, '+defaultSettingsGradient.colorOuter+' 100%)';
    // el.style.background = 'red';
  };

  /**
   * the function which applies the gradient
   * @return {[type]} [description]
   */
  var moveGradientAll = function(input, lengthIn, el, settings){
    var i;
    for(i = 0; i < el.length; i++){
      var nmb = input.nmb;
      var waiting = input.waitBool;

      // console.log("test");
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

      counterList[lengthIn].waitBool = waiting;
      counterList[lengthIn].nmb = nmb;
      el[i].style.background ='radial-gradient('+settings.colorInner+' '+ counterList[lengthIn].nmb +'%, '+settings.colorOuter+' 100%)';
    }

  };

  var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
        return object1;
    };


  self.customShake = function(settings){
    var newSettings;
    if(settings != null){
       newSettings = mergeObjects(defaultSettingsShake, settings);
    }
    else{
      newSettings = defaultSettingsShake;
    }

    defaultSettingsShakeList.push(newSettings);
    element = document.querySelectorAll(self.selector);
    counter = new Object;
    counter.nmb = 0;
    counter.waitBool = false;
    counterList.push(counter);

    setInterval(shakeAll, newSettings.speed, counterList[counterList.length - 1], counterList.length - 1, element, defaultSettingsShakeList[defaultSettingsShakeList.length - 1]);
    return self;
  };

  /**
   * The function which you can call when you want to apply the custom gradient
   * @param  {[type]} selector [description]
   * @param  {[type]} settings [description]
   * @return {[type]}          [description]
   */
  self.customGradient = function(settings){
    var newSettings;
    if(settings != null){
       newSettings = mergeObjects(defaultSettingsGradient, settings);
    }
    else{
      newSettings = defaultSettingsGradient;
    }

    defaultSettingsGradientList.push(newSettings);
    element = document.querySelectorAll(self.selector);
    counter = new Object;
    counter.nmb = 0;
    counterList.push(counter);

    setInterval(moveGradientAll, newSettings.speed, counterList[counterList.length - 1], counterList.length - 1, element, defaultSettingsGradientList[defaultSettingsGradientList.length - 1]);
    return self;
  };

  return self;
};
