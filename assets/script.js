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
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockTime === timeNow) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // Gets items from local storage

$("#hour8").children(".description").val(localStorage.getItem("hour8"));
$("#hour9").children(".description").val(localStorage.getItem("hour9"));
$("#hour10").children(".description").val(localStorage.getItem("hour10"));
$("#hour11").children(".description").val(localStorage.getItem("hour11"));
$("#hour12").children(".description").val(localStorage.getItem("hour12"));
$("#hour13").children(".description").val(localStorage.getItem("hour13"));
$("#hour14").children(".description").val(localStorage.getItem("hour14"));
$("#hour15").children(".description").val(localStorage.getItem("hour15"));
$("#hour16").children(".description").val(localStorage.getItem("hour16"));
$("#hour17").children(".description").val(localStorage.getItem("hour17"));

    timeTracker();
})