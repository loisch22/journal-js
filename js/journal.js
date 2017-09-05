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
