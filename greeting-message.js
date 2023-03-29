// get the user's name from a prompt
var userName = prompt("What is your name?");

// get the current time
var now = new Date();

// get the hours from the current time
var hours = now.getHours();

// set the greeting message according to the time of day
var greeting;
if (hours < 12) {
  greeting = "Good morning";
} else if(hours == 12){
  greeting = "Good noon";
}else if (hours < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// display the greeting message with the user's name
var greetingMessage = document.createElement("p");
greetingMessage.textContent = greeting + ", " + userName + "!";
document.body.appendChild(greetingMessage);

// add a click event listener to the greeting message to hide it
greetingMessage.addEventListener("click", function() {
  greetingMessage.style.display = "none";
});
