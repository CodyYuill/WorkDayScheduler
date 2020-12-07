var DateTime = luxon.DateTime;
var Today = DateTime.local().toFormat('MMMM d, yyyy');
var businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var hours24 = 9; //starting hour is the 9th hour
$("#currentDay").text(`${Today}`)

//create each timeblock
businessHours.forEach(function(value, i){
    //create the new div
    var newTimeBlock = $('<div class="input-group row"></div>');
    //create and append text area to show hour
    var hourBlock = $(`<div class="input-group-prepend hour"><span class="input-group-text time-block">${value}</span></div>`);
    newTimeBlock.append(hourBlock);
    //create input area
    var inputArea = $('<textarea class="form-control"></textarea>')
    //give a data-hour value to compare to current hour for coloring block
    inputArea.data("hour", `${hours24}`);
    //increment the data-hour value
    hours24++;
    //associate a color with each hour based on current time
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
    //give input area an id to math with local storage for sending and receiving 
    inputArea.attr("id", `${value}`);
    //check to see if theres anything to grab for localstorage
    if(window.localStorage.getItem(`#${inputArea.attr("id")}`) !== null)
    {
        //if there is get it and add it to the input area
        inputArea.val(window.localStorage.getItem(`#${inputArea.attr("id")}`))
    }
    newTimeBlock.append(inputArea);
    //create the save button on the end
    var saveBtn = $('<button class="btn btn-outline-secondary fa fa-save saveBtn" type="button" id="button-addon2"></button>');
    //give save buttons unique identifiers
    saveBtn.data("value", `${value}`);
    //create on click event for each button
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
