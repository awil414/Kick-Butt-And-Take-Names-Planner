// Use Moment.js to show current date and function to display in header
let today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

//Color time blocks and start setInterval to update every five seconds
colorTimeBlocks();
setInterval(colorTimeBlocks, 5000);

function colorTimeBlocks() {
    // For the time-block string, parse, and use moment.js
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").replace("hour-", " "));
        var currentHour = parseInt(moment().format("H"));
    // Remove any previously added classes
    $(this).removeClass("past present future");
    // Color the time-blocks by adding classes: past, present, future class
    if (blockHour < currentHour) {
        $(this).addClass("past");
        } else if (blockHour > currentHour) {
        $(this).addClass("future");
        } else {
        $(this).addClass("present");
        }
    });
}

// Function to update time blocks with user's input/notes in local storage
$("time-block").each(function() {
    var timeBlockId = this.id;
    $("#" + timeBlockId + "textarea") + text(localStorage.getItem(moment().format("dddd, MMM Do") + timeBlockId));
});

// Function to save notes into user's local storage
$("saveBtn").on("click", handleSave);
$("saveBtn").click(function() {
    alert("Note saved!");
    var SaveBtnValue = $(this).value();
    localStorage.setItem(SaveBtnValue, "description");

});

function handleSave(event) {
    // get the id of our parent
    var hourId = this.parent.id;
    // save the text area notes in local storage
    localStorage.setItem(moment().format("dddd, MMM Do") + hourId, $("#" +hourId +"textarea").val());
}

/*
var userNote = $("description").val();
localStorage.setItem("description", userNote.val());

var storedNotes = localStorage.getItem("userNote");

/*
$('#Id').val() instead of document.getElementById('Id').value
var description = $(".description").val();
    if (window.localStorage["DescriptionData"]) {
            description.value = window.localStorage["DescriptionData"];
    }    
    saveBtn.addEventListener("click", function() {
    window.localStorage["DescriptionData"] = description.value;
    });
*/
    //Function to get stored notes and and load them 
function getStoredData() {

}

// Function to clear user's data/note history and restore to default
function clearDataHistory () {

}