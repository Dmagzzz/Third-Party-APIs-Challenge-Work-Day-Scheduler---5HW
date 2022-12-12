// Shows day and date
const dateToday = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(dateToday);

$(document).ready(function () {
    // saveBtn  for click  
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        const time = $(this).parent().attr("id");
        const text = $(this).siblings(".description").val();

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //gives current number of hours
        const timeNow = moment().hour();

        // loops over time blocks.
        $(".time-block").each(function () {
            const blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //checks the time and adds the classes for the background indicators
            if (blockTime < timeNow) {
                document.getElementById(this).addClass("past");
                document.getElementById(this).removeClass("future");
                document.getElementById(this).removeClass("present");
            }
            else if (blockTime === timeNow) {
                document.getElementById(this).addClass("present");
                document.getElementById(this).removeClass("past");
                document.getElementById(this).removeClass("future");
            }
            else {
                document.getElementById(this).removeClass("present");
                document.getElementById(this).removeClass("past");
                document.getElementById(this).addClass("future");

            }
        })
    }

    // Gets items from local storage
    document.getElementById("#hour8 .description").val(localStorage.getItem("hour8"));
    document.getElementById("#hour9 .description").val(localStorage.getItem("hour9"));
    document.getElementById("#hour10 .description").val(localStorage.getItem("hour10"));
    document.getElementById("#hour11 .description").val(localStorage.getItem("hour11"));
    document.getElementById("#hour12 .description").val(localStorage.getItem("hour12"));
    document.getElementById("#hour13 .description").val(localStorage.getItem("hour13"));
    document.getElementById("#hour14 .description").val(localStorage.getItem("hour14"));
    document.getElementById("#hour15 .description").val(localStorage.getItem("hour15"));
    document.getElementById("#hour16 .description").val(localStorage.getItem("hour16"));
    document.getElementById("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})