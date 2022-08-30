// Use Moment.js to show current date and function to display in header
let today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

//Color time blocks and start setInterval to update time blocks every minute
colorTimeBlocks();
setInterval(colorTimeBlocks, 5000);

function colorTimeBlocks() {
    // For the time block string, parse, and use moment.js
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").replace("hour-", " "));
        var currentHour = parseInt(moment().format("H"));
    // Remove any previously added classes
    $(this).removeClass("past present future");
    // Color the time blocks by adding classes: past, present, future class
    if (blockHour < currentHour) {
        $(this).addClass("past");
        } else if (blockHour > currentHour) {
        $(this).addClass("future");
        } else {
        $(this).addClass("present");
        }
        // Create vars and if statements to have app's text area value not appear if it doesn't match current date
        var textArea = $(this).find("textarea");
        if (localStorage.getItem($(this).attr("id"))) {
            // Parse back into an object for text and date and save only if equal to current date
        var savedText = JSON.parse(localStorage.getItem($(this).attr("id"))).text;
        var savedDate = JSON.parse(localStorage.getItem($(this).attr("id"))).date;
        if (savedDate == today){
            textArea.val(savedText);
        }}
    });
}

// Event handler for saving the current text area value, and setting it to local storage
$(".saveBtn").on("click", function(event) {
    var timeBlockText = (event.currentTarget.previousElementSibling.value);
    var timeBlockId = (event.currentTarget.parentElement.id);
    // Created a data bundle to add to local storage so that date is logged for if statement above (clearing any data that doesn't correspond to current date)
    var noteData = {
        text: timeBlockText, 
        date: today
    }
    // Using JSON to stringify noteData variable into local storage
    localStorage.setItem(timeBlockId, JSON.stringify(noteData));
});