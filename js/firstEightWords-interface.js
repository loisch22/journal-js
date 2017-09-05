var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
    alert("eight words");
  $('#eightWords').click(function(event) {
    event.preventDefault();
    var body = $('#body').val();
    var title = $('#title').val();
    var newEntry = new Entry(title,body);
    var output = newEntry.getTeaser(body);
    $('#firstEightWords').append("<li>" + "The first eight words of your sentence: " + output + "</li>");
  });
});
