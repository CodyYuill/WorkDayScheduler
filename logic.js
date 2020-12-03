var DateTime = luxon.DateTime;
var Today = DateTime.local().toFormat('MMMM d, yyyy');
var businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

$("#todayDate").text(`${Today}`)

// 9 10 11 12 1 2 3 4 5
// var newTimeBlock = $('<div class="input-group"></div>');
// newTimeBlock.append(`<div class="input-group-prepend"><span class="input-group-text">TIMEGOHERE</span></div>`);
// newTimeBlock.append('<textarea class="form-control" aria-label="With textarea"></textarea>')
// newTimeBlock.append('<button class="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>')
// $(".container").append(newTimeBlock);

businessHours.forEach(function(value, i){
    var newTimeBlock = $('<div class="input-group"></div>');
    newTimeBlock.append(`<div class="input-group-prepend"><span class="input-group-text">${value}</span></div>`);
    newTimeBlock.append('<textarea class="form-control"></textarea>')
    newTimeBlock.append('<button class="btn btn-outline-secondary fa fa-save" type="button" id="button-addon2"></button>')
    $(".container").append(newTimeBlock);
});