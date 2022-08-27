// Use Moment.js to show current date and function to display in header
let today = moment().format('dddd, MMM Do');
$("#currentDay").text(today);

//Color time blocks and start interval to re-color every minute
colorTimeBlocks();
//setInterval(colorTimeBlocks, 1000);

function colorTimeBlocks() {
    // For the time-block string, parse each into objects using JSON and moment.js
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
        var currentHour = parseInt(moment().format("H"));
    // Remove any previously added classes
    $(this).removeClass("past present future");
    // Color the time-blocks based on past, present, future class
    if (blockHour < currentHour) {
        $(this).addClass("past");
        } else if (blockHour > currentHour) {
        $(this).addClass("future");
        } else {
        $(this).addClass("present");
        }
    });
}



