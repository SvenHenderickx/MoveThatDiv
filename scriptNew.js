function MoveThatDiv(selector){

  /**
   * The default settings for the shake
   * @type {{selector: string, tiltAngle: number, speed: number}}
   */
  var defaultSettingsShake = {
    selector: '',
    tiltAngle: 50, // The deg to which the shake moves at max
    speed: 20 //The speed at which the shake moves in ms
  };

  /**
   * The default settings for the gradient mover
   * @type {{selector: string, colorInner: string, colorOuter: string, speed: number}}
   */
  var defaultSettingsGradient = {
    selector: '',
    colorInner: 'blue', // color in string
    colorOuter: 'darkBlue', // color in string
    speed: 10 // speed of the percentage in ms
  };

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
    console.log(counterNumber);
    console.log(counterList[lengthIn]);
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
   * the function which applies the gradient
   * @return {[type]} [description]
   */
  var moveGradient = function(input, lengthIn, el){
    var nmb = input.nmb;
    var waiting = input.waitBool;
    console.log(nmb);
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
    console.log(el);
    el.style.background ='radial-gradient('+defaultSettingsGradient.colorInner+' '+ counterList[lengthIn].nmb +'%, '+defaultSettingsGradient.colorOuter+' 100%)';
    // el.style.background = 'red';
  };

  self.customShake = function(){
    // defaultSettingsShake.selector = self || defaultSettingsShake.selector;
    element = document.querySelector(self.selector);
    counter = new Object;
    counter.nmb = 0;
    counter.waitBool = false;
    counterList.push(counter);
    console.log(counterList[counterList.length - 1]);
    setInterval(shake, defaultSettingsShake.speed, counterList[counterList.length - 1], counterList.length - 1, element);
    return self;
  };

  /**
   * The function which you can call when you want to apply the custom gradient
   * @param  {[type]} selector [description]
   * @param  {[type]} settings [description]
   * @return {[type]}          [description]
   */
  self.customGradient = function(){
    // defaultSettingsGradient.selector = self || defaultSettingsGradient.selector;
    element = document.querySelector(self.selector);
    counter = new Object;
    counter.nmb = 0;
    counterList.push(counter);
    console.log(counterList[counterList.length - 1]);
    setInterval(moveGradient, defaultSettingsGradient.speed, counterList[counterList.length - 1], counterList.length - 1, element);
    return self;
  };

  return self;
};
