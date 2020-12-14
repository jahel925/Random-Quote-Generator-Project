
let quotes = ["The secret to getting ahead is getting started.",
              
  "All our dreams can come true, if we have the courage to pursue them.",
              
    "Your passion is waiting for your courage to catch up.", 
              
       "Work like there is someone working twenty four hours a day to take 				it away from you.",
              
	 "We are what we repeatedly do. Excellence, then, is not an act, but a 			habit.",            
              
      "Great things are done by a series of small things brought together.",
              
        "You can waste your lives drawing lines. Or you can live your life 					crossing them.", ];

$('button').click(function(){
    var random = Math.floor (Math.random() * quotes.length);
	$('.show').text(quotes[random] );
});