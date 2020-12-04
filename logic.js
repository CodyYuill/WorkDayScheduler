var DateTime = luxon.DateTime;
var Today = DateTime.local().toFormat('MMMM d, yyyy');
var businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hours24 = 9; //starting hour is the 9th hour
$("#currentDay").text(`${Today}`)


// 9 10 11 12 1 2 3 4 5
//create each timeblock
businessHours.forEach(function(value, i){
    //create the new div
    var newTimeBlock = $('<div class="input-group row"></div>');
    //create the input area
    var hourBlock = $(`<div class="input-group-prepend hour"><span class="input-group-text time-block">${value}</span></div>`);
    newTimeBlock.append(hourBlock);
    //give a data-hour value to compare to current hour for coloring block
    var inputArea = $('<textarea class="form-control"></textarea>')
    inputArea.data("hour", `${hours24}`);
    //increment the data-hour value
    hours24++;
    if(inputArea.data("hour") > DateTime.local().hour)
    {
        //hour is in future
        inputArea.addClass("future");
    }
    else if(inputArea.data("hour") == DateTime.local().hour)
    {
        //hour is current
        inputArea.addClass("present");
    }
    else
    {
        //hour is in past
        inputArea.addClass("past");
    }
    //create the textblock at beggining with associated hour
    inputArea.attr("id", `${value}`);
    if(window.localStorage.getItem(`#${inputArea.attr("id")}`) !== null)
    {
        inputArea.val(window.localStorage.getItem(`#${inputArea.attr("id")}`))
    }
    newTimeBlock.append(inputArea);
    //create the save button on the end
    var saveBtn = $('<button class="btn btn-outline-secondary fa fa-save saveBtn" type="button" id="button-addon2"></button>');
    saveBtn.data("value", `${value}`);
    saveBtn.click(saveString);
    newTimeBlock.append(saveBtn);
    //add the thimeblock to the container
    $(".container").append(newTimeBlock);
});

function saveString()
{
    //get the buttons data-value
    var indexToFind = `#${$(this).data("value")}`;
    //get the string from the text area with the id the same value
    // as the buttons data-value 
    var stringToSave = $(`${indexToFind}`).val();
    //store it localstorage
    window.localStorage.setItem(`${indexToFind}`, stringToSave);
}
