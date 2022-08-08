// Adds today's date to the header
var today = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(today);

var dataEnteredList = document.querySelectorAll(".text-area");
var saveBtnList = document.querySelectorAll(".saveBtn");



for (i=0; i < dataEnteredList.length; i++) {
  let saveBtn = saveBtnList[i]
  let dataEntered = dataEnteredList[i]
  let id = dataEntered.getAttribute("id")
  let toDo = localStorage.getItem(id);
  dataEntered.value = toDo

  console.log(dataEntered)
  console.log(id)

  let currentTime = moment().format("HH")

  if (id === currentTime) {
    console.log("true")
    dataEntered.classList.add("present")
  } else if (id < currentTime) {
    dataEntered.classList.add("past")
  } else if(id > currentTime) {
    dataEntered.classList.add("future")
  }


  saveBtn.addEventListener("click", function() {
      let activity = dataEntered.value
      console.log(dataEntered)
      localStorage.setItem(id, activity);
      console.log(activity)

  });
}

