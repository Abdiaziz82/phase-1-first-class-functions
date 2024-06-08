
function receivesAFunction(callback) {
    callback();
  }

   
   function returnsANamedFunction() {
    function namedFunction() {
     return "Hello, world!";
    }
    return namedFunction;
  }
 
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello, world!");
    };
  }