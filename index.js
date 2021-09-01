
/* 
!!  VARIABLES from HTML:

?? 'button'
    type = Button
    value = "Yo Varni my bro"
*/


button = document.getElementById("variable")

function print(p) {
    console.log(p);
}

function sayYo() {
    alert('Yo!');
}


function splitter(string) {
    let arrString = [];
    let marker = 0;
    for (index=0; index<string.length; index++) {
        if (string[index] == "[") {
            arrString.push(string.slice(marker, index - 1))
        } else if (string[index] == "]") {
            marker = index + 1
        }  else {}
    }
    return arrString
}

sentence = "I am just getting started with it right now,[1] but hopefully once I learn more,[2] I can start to properly develop the front end.[3]"


let clickNumber = 0;

function read_message_in_parts(message) {;
    let x = clickNumber%3;
    alert(splitter(message)[x]);
    clickNumber++;
}

function read_message_in_full(message) {
    message = splitter(message);
    let full_message = ""
    for (x=0; x<message.length; x++)
        full_message += message[x]
    alert(full_message)
}

secret_message = () => alert("You found the secret message!");

log_mouse_right_click = () => print("Right mouse button pressed")

log_mouse_hover = () => print("Mouse hovering over button");

log_mouse_left_click = () => print("Left mouse button pressed");

// Left click
button.addEventListener('click', log_mouse_left_click)
button.addEventListener('click', () => read_message_in_parts(sentence));

// Right click
button.addEventListener('contextmenu', log_mouse_right_click)
button.addEventListener('contextmenu', secret_message)

// Mouse hover
button.addEventListener('mouseover', log_mouse_hover)
 
