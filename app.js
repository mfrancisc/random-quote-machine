function addQuoteText(text){
  $("#quoteText").text(text);
}

function addQuoteFooter(author){
  $("#quoteFooter").html(author);
}

function quoteFromApi(){

  $.ajax({
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
      addQuoteText(response.quote);
      addQuoteFooter(response.author);
    },
    error: function() {
      addQuoteText("Error loading quote");
      addQuoteFooter("Error loading author");
    }
  }).done(function() {
  });

}

quoteFromApi();

$("#getQuote").on("click", function(){
  quoteFromApi(); 
});

$("#tweetQuote").on("click", function(){
  var text = $("#quoteText").text();
  var textFooter = $("#quoteFooter").text();
  window.open("http://twitter.com/share?text=" + text + "    -- " + textFooter, "twitter"); 
});


