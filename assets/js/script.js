var currentDayEl = $("#currentDay");
var timeBlockEl;
var timeColEl;

var getCurrentDate = function() {
    var today = moment().format("dddd MMM Do");
    currentDayEl.val = today;
    currentDayEl.append(today);
            
};

var auditTime = function() {
    // converts the hour blocks to military time
    timeBlockEl = $("#labelEightAm");
    timeColEl = $("#colEightAm");
    timeBlockEl.p = "8";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelNineAm");
    timeColEl = $("#colNineAm");
    timeBlockEl.p = "9";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelTenAm");
    timeColEl = $("#colTenAm");
    timeBlockEl.p = "10";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelElevenAm");
    timeColEl = $("#colElevenAm");
    timeBlockEl.p = "11";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelTwelvePm");
    timeColEl = $("#colTwelvePm");
    timeBlockEl.p = "12";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelOnePm");
    timeColEl = $("#colOnePm");
    timeBlockEl.p = "13";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelTwoPm");
    timeColEl = $("#colTwoPm");
    timeBlockEl.p = "14";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }// converts the hour blocks to military time
    timeBlockEl = $("#labelThreePm");
    timeColEl = $("#colThreePm");
    timeBlockEl.p = "15";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelFourPm");
    timeColEl = $("#colFourPm");
    timeBlockEl.p = "16";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
    // converts the hour blocks to military time
    timeBlockEl = $("#labelFivePm");
    timeColEl = $("#colFivePm");
    timeBlockEl.p = "17";
    var time = parseInt(timeBlockEl.p);
    console.log(time);
    console.log(moment().hour());
    
    // apply new class if task is past present or future
    if (moment().hour() > time) {
        $(timeColEl).addClass("future");
    } else if (moment().hour() === time) {
        $(timeColEl).addClass("present");
    } else {
        $(timeColEl).addClass("past");
    }
};

getCurrentDate();
auditTime();

// // task text was clicked
// $(".list-group").on("click", "p", function() {
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("<textarea>").addClass("form-control").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     textInput.trigger("focus");
//   });


      
//     
  
//     // remove any old classes from element
//     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  


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