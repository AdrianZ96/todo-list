const newTask = document.querySelector(".input_text");
const addButton = document.querySelector(".add_button");
addButton.addEventListener("click", (event) => {
  const taskText = newTask.value;
  if (taskText.trim()) {
    addTask(taskText);
    newTask.value = "";
  }
});
const addTask = (text) => {
  const newListElem = document.createElement("li");
  newListElem.textContent = text;

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteButton.classList.add("delete_btn");

  deleteButton.addEventListener("click", () => {
    newListElem.remove();
  });
  newListElem.appendChild(deleteButton);

  document.querySelector(".todo_list").appendChild(newListElem);
};

document.querySelector(".todo_list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
const alarmSound = document.querySelector("#alarm_sound");
const minutesInput = document.querySelector("#minutes");
console.log(minutesInput);
const secondsInput = document.querySelector("#seconds");
console.log(secondsInput);
const startTimerBtn = document.querySelector(".count_btn");
console.log(startTimerBtn);
const countdownDisplay = document.querySelector("#countdown_display");
console.log(countdownDisplay);

startTimerBtn.addEventListener("click", () => {
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);
  const totalSeconds = minutes * 60 + seconds;

  startCountdown(totalSeconds);
});

const startCountdown = (totalSeconds) => {
  let remainingSeconds = totalSeconds;

  const countdownInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      countdownInterval.textContent = "Time is Up!";
    } else {
      if (remainingSeconds === 47) {
        alarmSound.play();
      }
      remainingSeconds--;

      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;

      countdownDisplay.textContent = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }
  }, 1000);
};
