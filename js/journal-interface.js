var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#allWords').click(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title,body);
    var output = newEntry.getNumberOfWords(title,body);
    $('#numberOfWords').append("<li>" + "Number of words in the entry are :" + output + "</li>");
  });
});
