  ////////////PROBLEM 1////////////
  
  /*
    Write a function called myFunc. 
    Inside the function, we'll create a variable and another function. 
    Call the variable myStr and set it to the string 'super secret string'. 
    Call the function getSecretString and have it return the myStr variable. 
    myFunc should return getSecretString
  */
  
  //CODE HERE
 function myFunc(){
   let myStr = 'super secret string';
   function getSecretString(){
     return myStr
   }
   return getSecretString
 }


  
  //Now create a variable called secretString. Its value should be the invocation of myFunc.

  //CODE HERE
  const secretString = myFunc()
  
  ////////////PROBLEM 2////////////

  /*
    Write a function called lightSwitch. It will return an inner function.
    Create a variable inside lightSwitch called isTheLightOn and set its initial value to the boolean false. 
    Write a function called flipTheSwitch inside lightSwitch. 
    The function should invert the value of isTheLightOn and return a string. 
    If the light is on (true), the string should be 'The light is on'
    And if the light is off (false), the string should be 'The light is off'. 
    The lightSwitch function should return flipTheSwitch.
  */
  
  //CODE HERE
function lightSwitch(){
  let isTheLightOn = false;
  function flipTheSwitch(){
    if(isTheLightOn === false){
      return isTheLightOn = true
    }else if (isTheLightOn === true){
      return isTheLightOn = false
    }
  }
  return flipTheSwitch
}
  
  //Create a variable called kitchenSwitch whose value is the invocation of lightSwitch.
  
  //CODE HERE
const kitchenSwitch = lightSwitch();
  
  //Invoke kitchenSwitch.

  //CODE HERE
  kitchenSwitch();
  
  //Create a variable called bathroomSwitch whose value is the invocation of lightSwitch. 

  //CODE HERE
  const bathroomSwitch = lightSwitch();
  
  //Invoke bathroomSwitch twice.
  
  //CODE HERE
  bathroomSwitch();
  bathroomSwitch();
  
  
  ////////////PROBLEM 3////////////

  /*
    Use the module pattern to create a plant height tracker, name your function 'plantTracker'
    Set up two variables inside plantTracker, 'plant' which should be set to 'fern' and 'height' which should be set to 12
    Return 3 functions using the module pattern
      - 'readInfo' should return a string of 'This is a PLANT plant that is HEIGHT inches tall.',
       where PLANT is the value of the plant variable and HEIGHT is the value of the height variable.
      - 'waterPlant' should add 1 to the height and return the new height
      - 'prunePlant' should subtract 1 from the height and return the new height
  */

  //CODE HERE
  function plantTracker() {
    // variables and functions here are private and are only accessed through the public functions in the returned object
    let plant = 'fern';
    let height = 12;
    
  
    return {
      // everything returned is public
      readInfo: function() {
        return 'This is a ' + plant + ' plant that is ' + height + ' inches tall.'
      },
      waterPlant: function() {
        return height += 1
      },
      prunePlant: function() {
        return height -= 1
      },
    }
  }
  
  // module1 is now a public object with public methods that access and change private variables.
  // Notice how we can not call module1.privateFunction
  // We can only call that function within the code of the function.
  var module1 = modulePattern()



  ////////////PROBLEM 4////////////

  /*
    Use the module pattern to create an inventory, name the function 'inventory'
    Set up a variable inside inventory called 'products' initialized as an empty array.  
    Return 3 functions using the module pattern
      - 'readProducts' should return the products array
      - 'addToProducts' should receive one argument, a string, and add it into the products array
      - 'deleteFromProducts' should receive one argument, a string, and delete it from the products array
        - hint: try to find the index of the string first
  */

  //CODE HERE
  function inventory() {
    // variables and functions here are private and are only accessed through the public functions in the returned object
    let products = [];
    
  
    return {
      // everything returned is public
      readProducts: function() {
        return products
      },
      addToProducts: function(item) {
        products.push(item)
      },
      deleteFromProducts: function(item) {
        products.splice(products.indexOf(item), 1)
      },
    }
  }

  /*
    Create a variable called 'shoes' whose value is the invocation of inventory.
  */

  //CODE HERE
let shoes = inventory()

  /*
    Add an item to your shoes array using the addToProducts function
  */

  //CODE HERE
shoes.addToProducts('boots')
