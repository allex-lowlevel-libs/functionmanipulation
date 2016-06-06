'use strict';

function dummyFunc() {}

function createFunctionManipulation(inherit) {
  function functionCopy(func){
    var f = function(){
      func.apply(this,arguments);
    };
    //f.name = func.name;
    f.displayName = func.displayName;
    for(var i in func){
      f[i] = func[i];
    }
    inherit(f,func);
    f.prototype.__destroyCopy = function () {
      func = null;
    };
    return f;
  };
  return {
    functionCopy: functionCopy,
    dummyFunc: dummyFunc
  };
}

module.exports = createFunctionManipulation;