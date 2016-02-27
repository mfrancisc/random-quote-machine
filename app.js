var backgrounds = ["red lighten-4", "red accent-2", "pink accent-1", "deep-purple lighten-4", "indigo lighten-4", "blue lighten-4", "light-blue lighten-4", "cyan lighten-4", "teal lighten-4", "green lighten-5", "lime lighten-5", "green accent-1", "amber lighten-5", "yellow lighten-5","blue-grey lighten-5"];

function randIndex(backgrounds){
var index = Math.floor(Math.random() * backgrounds.length);
return index;
}

function addQuoteText(text){
  $("#quoteText").text(text);
}

function addQuoteFooter(author){
  $("#quoteFooter").html(author);
}

function changeBackgrounds(backgrounds){

var pageBgIndex = randIndex(backgrounds);
var quoteBgIndex = randIndex(backgrounds);
var bodyCssClass = backgrounds[pageBgIndex];
var quotesCssClass = backgrounds[quoteBgIndex];
$("body").addClass(bodyCssClass);
$("#quotes").addClass(quotesCssClass);
}

function quoteFromApi(){

  return $.ajax({
    async: "false",
    dataType : "json",
    type: "GET",
    headers: {
      "X-Mashape-Key": "fYiUMnfLahmshXwHfVFBMlqU4xx0p1rdQJmjsn0pDUQJmqtAK3",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
    },
    error: function() {
    }
  });

}

var newQuote = function() {
 quoteFromApi().done(function (response) {
      addQuoteText(response.quote);
      addQuoteFooter(response.author);
      changeBackgrounds(backgrounds);
 }).fail(function(){
 
 });
}

newQuote();

$("#getQuote").on("click", function(){
  newQuote();
});

$("#tweetQuote").on("click", function(){
  var text = $("#quoteText").text();
  var textFooter = $("#quoteFooter").text();
  window.open("http://twitter.com/share?text=" + text + "    -- " + textFooter, "twitter"); 
});


