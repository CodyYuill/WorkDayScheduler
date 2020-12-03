var DateTime = luxon.DateTime;
var Today = DateTime.local().toFormat('MMMM d, yyyy');
var businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

$("#todayDate").text(`${Today}`)

// 9 10 11 12 1 2 3 4 5
//create each timeblock
businessHours.forEach(function(value, i){
    //create the new div
    var newTimeBlock = $('<div class="input-group"></div>');
    //create the input area
    newTimeBlock.append(`<div class="input-group-prepend"><span class="input-group-text">${value}</span></div>`);
    //create the textblock at beggining with associated hour
    var textArea = $('<textarea class="form-control"></textarea>')
    textArea.attr("id", `${value}`);
    if(window.localStorage.getItem(`#${textArea.attr("id")}`) !== null)
    {
        textArea.val(window.localStorage.getItem(`#${textArea.attr("id")}`))
    }
    newTimeBlock.append(textArea);
    //create the save button on the end
    var saveBtn = $('<button class="btn btn-outline-secondary fa fa-save" type="button" id="button-addon2"></button>');
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