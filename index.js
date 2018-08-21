$(document).ready(function() {
	function addQuote(){
	    $.ajax( {
	      
	     type: "GET",
	     dataType: "jsonp",
	     
	     url:  "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
	     


	      success:function(json){
	      	document.getElementById("text").innerHTML = json.quoteText;
	      	document.getElementById("author").innerHTML = json.quoteAuthor;
	      },
	      error:function()
	      {
	      	alert("Ajax call failed");
	     
	      }    
	    })
	}
	addQuote();
	$('#new-quote').click(function(e) {
	    e.preventDefault();
	    addQuote();
	  })


});