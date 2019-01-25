const myQuestions = [
  {
    question: "1: When did Arizona become a state?",
    answers: ["1889", "1912", "1902"],
    correctAnswer: "1912"
  },
  {
    question: "2: What is the most used social media app?",
    answers: ["Instagram", "Facebook", "Snapchat"],
    correctAnswer: "Instagram"
  },
  {
    question: "3: What 2 colors make pink?",
    answers: [
      "white and Orange",
      "Red and White",
      "White and Orange",
      "Theres no such thing as pink"
    ],
    correctAnswer: "Red and White"
  },
  {
    question: "4: What came first the egg or the chicken?",
    answers: ["Egg", "Chicken", "Both"],
    correctAnswer: "Chicken"
  },
  {
    question: "5: What is the meaning of life?",
    answers: ["To live", "To die", "Theres no meaning"],
    correctAnswer: "Theres no meaning"
  },
  {
    question: "6: Why am i studying?",
    answers: ["To be educated", "To get a degree", "To get money money"],
    correctAnswer: "To get money money"
  },
  {
    question:
      "7: What can travel around the world and stay in the same corner?",
    answers: ["The airplane seat in the corner", "A stamp", "A bug"],
    correctAnswer: "A stamp"
  },
  {
    question: "8: What is the most popular sport in the world?",
    answers: ["Footbal", "Soccer", "Baseball"],
    correctAnswer: "Soccer"
  }
];
var correctScore = 0;
var number = 60;
var intervalId;

for (var i = 0; i < myQuestions.length; i++) {
  var $formGroup = $("<div class='form-group'>")
    .append($("<label>" + myQuestions[i].question + "</label>"))
    .append($("<br>"));

  for (var j = 0; j < myQuestions[i].answers.length; j++) {
    var $label = $("<label class='form-check-label'>").text(
      myQuestions[i].answers[j]
    );
    var $input = $("<input type='radio' class='form-check-input'>")
      .attr("name", "q" + i)
      .attr("value", myQuestions[i].answers[j]);

    var $formCheck = $("<div class='form-check form-check-inline'>")
      .append($input)
      .append($label);
    $formGroup.append($formCheck);
  }

  $("form").append($formGroup);
}

// $("#time-left").html(
//   "<h4> Time left" + " " + number + " " + "seconds" + "</h4>"
// );

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  $("#time-left").html(
    "<h4> Time left" + " " + number + " " + "seconds" + "</h4>"
  );
  if (number === 0) {
    stop();
  }
}

function stop() {
  clearInterval(intervalId);
  calculateScore();
}

run();
$("#all-done").on("click", function(){
    stop();
});

function calculateScore() {
  $(".form-group input:checked").each(function(i) {
    console.log(this.value);
    if (myQuestions[i].correctAnswer === this.value) {
      correctScore++;
    }
  });

  $("form").empty();
  $("#time-left").html(
    "<h3>" +
      "You got " +
      correctScore +
      " out of " +
      myQuestions.length +
      " correct!" +
      "</h3>"
  );

  console.log(
    "You got " + correctScore + " out of " + myQuestions.length + " correct!"
  );
}

// if this.value === to correct answer then ++ to correctScore
//else ++ to incorrectScore
//how do i use my forEach function to be able to compare all my answers to my input checked

// +
// event.preventDefault();



