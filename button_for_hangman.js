var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

for (var i = 0; i < letters.length; i++);
var letterButton = $("<button>");
letterButton.addClass("letter-button letter letter-button-color");
letterButton.attr("data-letter", letters[i]);
letterButton.text(letters[i]);
$("#buttons").append(letterButton);

$(".letter-button").on("click", function() {
    var selectedLetter = $("<div>");
    selectedLetter.addClass("letter color");
    selectedLetter.text($(this).attr("data-letter"));
    $("#showLetter").append(selectedLetter);
});

