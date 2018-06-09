function MoveThatDiv(selector){

  /**
   * The default settings for the shake
   * @type {{selector: string, tiltAngle: number, speed: number}}
   */
  var defaultSettingsShake = {
    tiltAngle: 10, // The deg to which the shake moves at max
    speed: 10 //The speed at which the shake moves in ms
  };

  /**
   * The default settings for the gradient mover
   * @type {{selector: string, colorInner: string, colorOuter: string, speed: number}}
   */
  var defaultSettingsGradient = {
    colorInner: 'blue', // color in string
    colorOuter: 'darkBlue', // color in string
    speed: 100 // speed of the percentage in ms
  };

  /**
   * The list which the settings are stored in for the shake.
   * @type {Array} Array of objects
   */
  var defaultSettingsShakeList = [];

  /**
   * The list which the settings are stored in for the gradient.
   * @type {Array} Array of objects
   */
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
   * @type {Array} Array
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
  * the function which applies the shake, old function. Isn't used anymore. Can't use custom settings here and doesn't apply the effect on all the elemnts with the same selector
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
   * The function which contains the logic of the shake effect
   * @param  {[type]} input    Is the object of the custom counter and waiting bool
   * @param  {[type]} lengthIn The location of the object in the array
   * @param  {[type]} el       The element which the effect applies on
   * @param  {[type]} settings The custom settings as an object
   */
  var shakeAll = function(input, lengthIn, el, settings){

    var i;
    //This loops through all the elements which match the selector and applies the effect to it
    for(i = 0; i < el.length; i++){
      var counterNumber = input.nmb;
      var waiting = input.waitBool;

      //Makes the shake go up until it reaches max, then goes all the way back until it matches the degree
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

      //Saves the new numbers to the object in the list
      counterList[lengthIn].nmb = counterNumber;
      counterList[lengthIn].waitBool = waiting;

      //The css which is needed applied
      el[i].style.webkitTransform = 'rotate('+counterNumber+'deg)';
      el[i].style.mozTransform    = 'rotate('+counterNumber+'deg)';
      el[i].style.msTransform     = 'rotate('+counterNumber+'deg)';
      el[i].style.oTransform      = 'rotate('+counterNumber+'deg)';
      el[i].style.transform       = 'rotate('+counterNumber+'deg)';
    }

  };

  /**
   * the function which applies the gradient, old function. Isn't used anymore. Can't use custom settings here and doesn't apply the effect on all the elemnts with the same selector
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
   * The logic behind the moving gradient, this is a new function. Old one isn't used any more because it only worked with 1 element
   * @param  {[type]} input    Is the object of the custom counter and waiting bool
   * @param  {[type]} lengthIn The location of the object in the array
   * @param  {[type]} el       The element which the effect applies on
   * @param  {[type]} settings The custom settings as an object
   */
  var moveGradientAll = function(input, lengthIn, el, settings){
    var i;
    //Loops through all of the elements which match the same selector
    for(i = 0; i < el.length; i++){
      var nmb = input.nmb;
      var waiting = input.waitBool;

      //Adds 1 to the percentage untill 100%, then goes back to 0
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

      //Saves the new numbers to the object
      counterList[lengthIn].waitBool = waiting;
      counterList[lengthIn].nmb = nmb;

      //CSS which is used for the effect
      el[i].style.background ='radial-gradient('+settings.colorInner+' '+ counterList[lengthIn].nmb +'%, '+settings.colorOuter+' 100%)';
    }

  };

  /**
   * Merges the settings into 1 object where it differs
   * @param  {[Object]} object1 defaultSettings
   * @param  {[Object]} object2 new settings
   * @return {[object]} The new settings mixed with default
   */
  var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
        return object1;
    };


  /**
  * You can call this function from outside out the scope, this will make the element selected a custom gradient.
  * @param  {[Object]} settings parameter where you can enter you custom settings, can also be left empty for defaults
  * @return {[HTMLElement]} returns the element which it changes
  */
  self.customShake = function(settings){
    // Checks for new settings and leaves default if not entered
    var newSettings;
    if(settings != null){
       newSettings = mergeObjects(defaultSettingsShake, settings);
    }
    else{
      newSettings = defaultSettingsShake;
    }

    defaultSettingsShakeList.push(newSettings);

    element = document.querySelectorAll(self.selector);

    //new object with neccesary variables
    counter = new Object;
    counter.nmb = 0;
    counter.waitBool = false;
    counterList.push(counter);

    //Sets the interval so the effect is able to move, parameters of the shakeAll function are put here
    setInterval(shakeAll, newSettings.speed, counterList[counterList.length - 1], counterList.length - 1, element, defaultSettingsShakeList[defaultSettingsShakeList.length - 1]);
    return self;
  };

  /**
   * You can call this function from outside out the scope, this will make the element selected a custom gradient.
   * @param  {[Object]} settings parameter where you can enter you custom settings, can also be left empty for defaults
   * @return {[HTMLElement]} returns the element which it changes
   */
  self.customGradient = function(settings){
    // Checks for new settings and leaves default if not entered
    var newSettings;
    if(settings != null){
       newSettings = mergeObjects(defaultSettingsGradient, settings);
    }
    else{
      newSettings = defaultSettingsGradient;
    }

    defaultSettingsGradientList.push(newSettings);
    element = document.querySelectorAll(self.selector);

    //new object with neccesary variables
    counter = new Object;
    counter.nmb = 0;
    counterList.push(counter);

    //Sets the interval so the effect is able to move, parameters of the moveGradientAll function are put here
    setInterval(moveGradientAll, newSettings.speed, counterList[counterList.length - 1], counterList.length - 1, element, defaultSettingsGradientList[defaultSettingsGradientList.length - 1]);
    return self;
  };

  return self;
};
