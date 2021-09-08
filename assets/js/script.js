var hoursArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentDayEl = $("#currentDay");
var timeBlockEl;
var timeColEl;

var getCurrentDate = function() {
    var today = moment().format("dddd MMM Do");
    currentDayEl.val = today;
    currentDayEl.append(today);            
};

var createTable = function() {
    for (i = 0; i < hoursArr.length; i++) {
        var containerEl = document.createElement("div");
        var rowEl = document.createElement("div");
        var labelEl = document.createElement("div");
        var pEl = document.createElement("p");
        var colEl = document.createElement("div");
        var buttonEl = document.createElement("button");
        rowEl.setAttribute("id", "rowHeading");
        rowEl.setAttribute("class", "row");
        labelEl.setAttribute("id", "labelTitle");
        labelEl.setAttribute("class", "col-sm-2 hour");
        labelEl.setAttribute("p", hoursArr[i]);
        colEl.setAttribute("id", "colTitle");

        // apply new class if task is past present or future
        if (moment().hour() > hoursArr[i]) {
            colEl.setAttribute("class", "col-sm-8 past");
        } else if (moment().hour() === hoursArr[i]) {
            colEl.setAttribute("class", "col-sm-8 present");
        } else {
            colEl.setAttribute("class", "col-sm-8 future");
        }
        if (hoursArr[i] < 12) {
            labelEl.textContent = moment().hour(hoursArr[i]).format("h") + ":00 AM";
        } else {
            labelEl.textContent = moment().hour(hoursArr[i]).format("h") + ":00 PM";
        }               
        buttonEl.setAttribute("id", "saveButton");
        buttonEl.setAttribute("class", "btn col-sm-2");
        // buttonEl.setAttribute();
        rowEl.appendChild(labelEl);
        rowEl.appendChild(colEl);
        rowEl.appendChild(buttonEl);
        containerEl.appendChild(rowEl);
        $("#hours-container").append(containerEl);        
    }
};

var auditTime = function() {       
    for (i = 0; i < hoursArr; i++) {
        // remove any old classes from element
        $(containerEl.colTitle).removeClass("past present future");
      
        // apply new class if time is past, present, or future
        if (moment().hour() > hoursArr[i]) {
            $("#hours-container").colTitle.addClass("past");
        } else if (moment().hour() === hoursArr[i]) {
            $("#hours-container").colTitle.addClass("present");
        } else {
            $("#hours-container").colTitle.addClass("future");
        }
    }        
};

// user clicks on time columns
$("#hours-container").on("click", "p", function() {
    var pEl = "";

    // get current text of p element
    var text = "";
   
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("textarea").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });

getCurrentDate();
createTable();

// audit time table every hour
setInterval(function() {
    $("#hours-container").each(function() {
        auditTime();
    });
}, 3600000);

// var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

// var createTask = function(taskText, taskDate, taskList) {
//     // create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);
  
//     // append span and p element to parent li
//     taskLi.append(taskSpan, taskP);
  
//     // check due date
//     auditTask(taskLi);
  
//     // append to ul list on the page
//     $("#list-" + taskList).append(taskLi);
//   };
  
//   var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         toDo: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
  
//     // loop over object properties
//     $.each(tasks, function(list, arr) {
//       // then loop over sub-array
//       arr.forEach(function(task) {
//         createTask(task.text, task.date, list);
//       });
//     });
//   };
  
//   var saveTasks = function() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

// // convert to moment object at 5:00pm
// var time = moment(date, "L").set("hour", 17);