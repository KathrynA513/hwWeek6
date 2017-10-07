//Initial Topics:
var topics = ["cats",
        "seagulls",
        "rain",
        "snow"
      ]

//Creating var to call Giphy API
 var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  topics + "&api_key=dc6zaTOxFJmzC&limit=10";


//Function to Generate Initial buttons based on topics[]
      
      function buttonTime (){
        $("#buttons").empty();
        for (var i = 0; i < topics.length; i++) {
           var buttonAp = $('<button>');
           buttonAp.attr("dataName", topics[i]);
           buttonAp.text(topics[i]);
           $("#buttons").prepend(buttonAp);
          }
        }

 $("#addTopic").on("click", function callGifs(){
      
    preventDefault();
     var newTopic = TopicInput.val();
     topics.push(newTopic);
    })

// calling functions when page loads
$(document).ready(function(){
  buttonTime();

 $.ajax({
    url: queryURL,
    method: "GET"
   }).done(function(response) {
    // this is supposed to prepend the stilled gifs but it keeps saying it is undefined
    $("#gifs").prepend('<img src="' + response.data.images.fixed_height_still.url +  '">')  
    })  

});



//  Instructions: app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array. DONE!
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// Under every gif, display its rating (PG, G, so on).
// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
// Deploy your assignment to Github Pages.
// _s makes gifs still 
// use "this" for animating