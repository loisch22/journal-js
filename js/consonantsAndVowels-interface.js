var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
$('#vowelsAndConsonants').click(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var body = $('#body').val();
  var newEntry = new Entry(title,body);
  var output = newEntry.getNumberOfVowelsConsonants(title,body);
  $('#numberOfVowelsAndConsonants').append(output);
});
});
