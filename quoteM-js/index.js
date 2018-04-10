$(document).ready(function(){
  var randomQuote;
function findQuote(){
    
    var quotes = ["自業自得", "十人十色", "起死回生", "我田引水", "悪因悪果", "見ぬが花","弱肉強食","猿も木から落ちる","七転び八起き","花より団子"];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    
    randomQuote = quotes[randomNum];
    
    $(".quote").text(randomQuote);
  }
  $("#tweet").on("click", function(){
window.open("http://twitter.com/intent/tweet?text="+randomQuote);
    
    });
    
  $("#ThrowQuote").on("click", function(){
    findQuote();


               });

  });