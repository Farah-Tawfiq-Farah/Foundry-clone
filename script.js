// home page
var texts = [
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",

    "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",

    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",

    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
];

var buttons = document.querySelectorAll(".whole-icon");
var paragraphToChange = document.getElementById("sixth-sec-final-paragraph");

buttons.forEach(function(button, i) {
	button.addEventListener("click", function() {
  	// remove green-icon class from all buttons when click on any button
		buttons.forEach(function(button, i) {
			button.classList.remove('green-icon');
		})
		
    // add green-icon class on clicked button
		button.classList.add('green-icon');
    
    // add text
		paragraphToChange.innerHTML = texts[i];
	})
});

// FAQ page
var questions = document.querySelectorAll(".whole-question");
var answers = document.querySelectorAll(".answer");
var minus = document.querySelectorAll(".fa-minus");
var plus = document.querySelectorAll(".fa-plus");

questions.forEach(function(question, i){
	question.addEventListener("click",function(){
		minus[i].classList.toggle('hide');
		answers[i].classList.toggle('hide');
		answers[i].classList.toggle('fade');
		plus[i].classList.toggle('hide');
	})
});