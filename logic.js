var DateTime = luxon.DateTime;

var test = $(`<h1></h1>`).text(`${DateTime.local().toLocaleString()}`);
test.attr("class", "jumbotron bg-warning");


$(".container").append(test);

