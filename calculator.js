

var btn = document.getElementsByClassName('table-data');
var screen = document.getElementById('display'); //screen here is of type object 

var outputOnScreen = "";

for (let i = 0; i < btn.length; i++){
// why are we using let here instead of var for variable declaration??

// we will use let here to create the variable i because wewant to use i only within this for loop and not outside
  // it and let will give us this flexiblity as let has block scope or lexical scope and it will be available only
  // inside this for loop if we try to use it outside the for loop then we will get a reference error.

//  Are variables declared also hoisted and if they are hoisted then why cant we use them before initilazation??
  
  //  let and const are also hoisted in javascript but there hoisting works differently we cannot use them unless
  //we reach the line on which it is declared or after the line in which it is declared.
  //let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
  
  btn[i].addEventListener('click', operations);

  function operations() {

    var btnText = btn[i].innerText;

    if (btnText == '+') {
//   Question-->   When to use "innerText" over "value" of an element preferrably, and vice versa in JS ???
      //
 //answer -->  You only use value on form controls (input, button, select, and textarea). 
//             For any other element, if you want its text, use textContent or innerText
//            (or, depending on your use case, innerHTML).
//           The only tricky one there is button, which is the only form control 
//            that has both a value and text.The value of a button is the value that will be submitted
//            if that button submits the form it's in. The text is what the user sees as the button caption. 

      // why are we not getting the desired result when we use value instead of innerText here ????


      outputOnScreen += btnText;
      screen.innerText = outputOnScreen; //The innerText property sets or returns the text content of an element.

    }
    
    else if (btnText == '-') {

      outputOnScreen += btnText;
      screen.innerText = outputOnScreen;

    }
      
    else if (btnText == '*') {

      outputOnScreen += btnText;
      screen.innerText = outputOnScreen;

    }

    else if (btnText == '/') {

      outputOnScreen += btnText;
      screen.innerText = outputOnScreen;

    }
      
    else if (btnText == '='){

      // The eval() method evaluates or executes an argument.
      // If the argument is an expression, eval() evaluates the expression. 
      // If the argument is one or more JavaScript statements, eval() executes the statements.

        screen.innerText = eval(outputOnScreen);

    }
      
    else if (btnText == 'AC') {

       outputOnScreen = "";
      screen.innerText = outputOnScreen;

    }
      
    else if (btnText == '+/-') {

      outputOnScreen = '-'+ outputOnScreen;
      screen.innerText = outputOnScreen;

    }
    
    else if (btnText == '.') {

      outputOnScreen =  outputOnScreen+'.';
      screen.innerText = outputOnScreen;

    }
      
    else {
      //code will reach this block only for creating the operands by concatanating the present text on the screen 
      // the text on the button pressed.
      outputOnScreen += btnText;  //we are creating a number here by appending the digit that was pressed on
      // our calculator. outputOnScreen variable will have the number that is displayed on our screen we just 
      // need to append the number on the button that was pressed on the calculator just now
      //to outputOnScreen which will give us the required number.
      
      // now for the changes that we made in the outputOnScreen or the number to be displayed on the calculator screen 
      // to make those changes visible on screen we will have to update screen.value.
      
      // value attribute of dom
      // The value property sets or returns the value of the value attribute of a text field.
      // The value property contains the default value OR the value a user types in (or a value set by a script).
      console.log(outputOnScreen);
      screen.innerText = outputOnScreen;

    }

  }
}





