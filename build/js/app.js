(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title,body)
{
  this.title = title;
  this.body = body;
}
Entry.prototype.getNumberOfWords = function(title,body)
{
  var titleArray = title.split(" ");
  var bodyArray = body.split(" ");
  var count = titleArray.length + bodyArray.length;
  return count;
};
Entry.prototype.getNumberOfVowelsConsonants = function(title,body)
{
  var countVowels = 0;
  var countConsonants = 0;
  for(var k = 0; k< title.length; k++)
  {
    if(title[k] == 'a' || title[k] == 'e' || title[k] == 'i' ||title[k] == 'o' ||title[k] == 'u')
    {
      countVowels += 1;
    }
  else
    {
      countConsonants += 1;
    }
  }
  for(var j = 0; j< body.length; j++)
  {
    if(body[j] == 'a' || body[j] == 'e' || body[j] == 'i' ||body[j] == 'o' ||body[j] == 'u')
    {
      countVowels += 1;
    }
    else
    {
      countConsonants += 1;
    }
  }
  return ("vowels count is " + countVowels +  "<br>" +  "consonants count is " + countConsonants);
};
Entry.prototype.getTeaser = function(body)
{
  var bodyArray = body.split(" ",8);
  return bodyArray.join(" ");
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
