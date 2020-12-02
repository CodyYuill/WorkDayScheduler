var DateTime = luxon.DateTime;

var test = $(`<p></p>`);
test.text(`${DateTime.local()}`);
$(".container").append(test);

