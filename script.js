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
  dataEntered.value = toDo;

  console.log(dataEntered)
  
  saveBtn.addEventListener("click", function() {
      let activity = dataEntered.value
      console.log(dataEntered)
      localStorage.setItem(id, activity);
      console.log(activity)
    


});
}
 //classList.add("name of class")
 //look up class list






var currentTime = moment().format("HH");
console.log(currentTime);



// var checkTime = function() {
//   var now = moment().get("hour");
//   var time = _9am;
//   console.log(time);
// }

//console.log(checkTime())


