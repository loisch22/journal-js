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
