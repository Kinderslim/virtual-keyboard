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

/*const keyTopRows = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8];
const keyFirstRows = [9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
const keySecondRows = [0, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 999];
const keyThirdRows = [15, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 15];
const keyBottomRows = [917, 918, 32, 918, 917];*/
const keyRows = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 0, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 999, 15, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 15, 917, 918, 32, 918, 917];

let initKeyboard = () => {
  let keys = "";
  for (let i = 0; i < keyRows.length; i++) {
    if (keyRows[i] === 8) {
      keys += "<div class='key key_backspace' >" + "backspace" + "</div>";
    } else {
      if (keyRows[i] === 96) {
        keys += "<div class='key key_one-quot key_simple' >" + String.fromCharCode(keyRows[i]) + "</div>";
      } else {
        if (keyRows[i] === 9) {
          keys += "<div class='key key_tab' >" + "tab" + "</div>";
        } else {
          if (keyRows[i] === 0) {
            keys += "<div class='key key_caps-lock' >" + "caps lock" + "</div>";
          } else {
            if (keyRows[i] === 999) {
              keys += "<div class='key key_enter' >" + "enter" + "</div>";
            } else {
              if (keyRows[i] === 15) {
                keys += "<div class='key key_shift' >" + "shift" + "</div>";
              } else {
                if (keyRows[i] === 917) {
                  keys += "<div class='key key_ctrl' >" + "ctrl" + "</div>";
                } else {
                  if (keyRows[i] === 918) {
                    keys += "<div class='key key_alt' >" + "alt" + "</div>";
                  } else {
                    if (keyRows[i] === 32) {
                      keys += "<div class='key key_space key_simple' >" + "space" + "</div>";
                    } else {
                      keys += "<div class='key key_simple' data='" + keyRows[i] + "'>" + String.fromCharCode(keyRows[i])+"</div>";
                    }
                  }
                }

              }

            }

          }

        }

      }

    }
  }
  document.querySelector(".keyboard_wrapper").innerHTML = keys;
}

initKeyboard();

// Activation mouse keys

let caps_lock = 'off';
document.querySelectorAll(".key").forEach(function (click) {
  click.onclick = function() {
    document.querySelectorAll(".key").forEach(function (click) {
      click.classList.remove('active_key');
    });
    click.classList.add('active_key');
    let text = click.textContent;
    if (text === 'space') {
      text = ' ';
      textArea.append(text);
    } else if (text === 'backspace') {
      let sliceText = textArea.textContent;
      let sliceText2 = sliceText.substring(0, sliceText.length - 1);
      let delSliceText = document.querySelector('.textarea');
      while (delSliceText.firstChild) {
        delSliceText.removeChild(delSliceText.firstChild);
      }
      textArea.append(sliceText2);
    } else if (text === 'tab') {
      text = '\t';
      textArea.append(text);
    } else if (text === 'enter') {
      text = '\n';
      textArea.append(text);
    } else if (text === 'caps lock') {
      if (caps_lock === 'off') {
        caps_lock = 'on';
        click.classList.remove('caps-lock_off')
        click.classList.add('caps-lock_on');
      } else {
        caps_lock = 'off';
        click.classList.remove('caps-lock_on')
        click.classList.add('caps-lock_off');
      }
    } else if (text === 'shift' || text === 'ctrl' || text === 'alt') {

    }
    else {
      if (caps_lock === 'on') {
        textArea.append(text.toUpperCase());
      } else {
        textArea.append(text);
      }
    }
  }
});

// Activation keys

document.addEventListener('keydown', function(elem) {
  for(i = 0; i<keyRows.length; i++) {
    console.log(keyRows[i]);
    if (elem.key === keys[i].getAttribute('data')) {
      this.classList.add('active_key');
    }
  }
});