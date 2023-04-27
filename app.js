// virtual-keyboard

// Create title

let textTitle = document.createElement("p");
textTitle.className = "title";
textTitle.innerHTML = "VIRTUAL KEYBOARD";
document.body.prepend(textTitle);

// Create textarea

let textArea = document.createElement("textarea");
textArea.className = "textarea";
textArea.setAttribute("rows", 10);
textArea.setAttribute("cols", 50);
document.body.append(textArea);

// Create keyboard

let keyboardWrapper = document.createElement("div");
keyboardWrapper.className = "keyboard_wrapper";
document.body.append(keyboardWrapper)

/*const keyTopRows = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8];
const keyFirstRows = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];
const keySecondRows = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222, 13];
const keyThirdRows = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16];
const keyBottomRows = [17, 18, 32, 18, 17];*/
const keyRows = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 173, 61, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 18, 32, 18, 17];

let initKeyboard = () => {
  let keys = "";
  for (let i = 0; i < keyRows.length; i++) {
    if (keyRows[i] === 8) {
      keys += "<div class='key key_backspace' >" + String.fromCharCode(keyRows[i])+"</div>";
    } else {
      keys += "<div class=key >" + String.fromCharCode(keyRows[i])+"</div>";
    }
  }
  document.querySelector(".keyboard_wrapper").innerHTML = keys;
}

initKeyboard();