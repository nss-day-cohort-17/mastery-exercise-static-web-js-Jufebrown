// ## Instructions

// It is absolutely critical that you read each of these requirements because as a professional you will be expected to completely understand what you are expected to do. If you submit code that does not fulfill the requirements, you will be sent to your room with no dinner.

// ##### Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

// ```js
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
// ```
const button = document.querySelector("#button");
const heightEnter = document.querySelector("#height");
const charEnter = document.querySelector("#character");

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.
const inputCheck = () => {
  event.preventDefault();
  if (document.querySelector("#height").value === "") {
      alert("Both fields must have a value");
  } else if (document.querySelector("#character").value === "") {
      alert("Both fields must have a value");
    } else {
      // ### It accepts a single object as an argument. The object should have two key/value pairs.
      let treeObj = {
        // 1. A key that specifies the height of the pine tree.
        height:"",
        // 1. A key that specifies which character to use to build the pine tree.
        character:""
      }
      // 1. The value for the height of the tree should be from user input in a `<input type="text">` field in the DOM.
      treeObj.height = document.querySelector("#height").value;
      // treeObj.height = parseInt(treeObj.height);
      // 1. The character to use should be from user input in a `<input type="text">` field in the DOM.
      treeObj.character = document.querySelector("#character").value;

      tree(treeObj);
    }
}

// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console.
const tree = (treeObj) => {
  for (let i = 0; i < treeObj.height; i++) {
    console.log(' '.repeat((treeObj.height-1)-i) + treeObj.character.repeat(2*i + 1) + '\n');
  }
}

const enterCheck = (keyboardEvent) => {
  event.preventDefault();
  if (keyboardEvent.key === "Enter") {
    inputCheck();
  }
}

// Once the user enters in a number, and a character, the user can either then just press the enter key _(as long as the cursor is in one of the input fields)_, or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.
button.addEventListener('click', inputCheck);
heightEnter.addEventListener('keyup', enterCheck);
charEnter.addEventListener('keyup', enterCheck);
