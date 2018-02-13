'use strict';
function chatSubmit() {
	//console.log($(".chat-input").val()); 

	if ($(".chat-input").val() == '') {
		return false; 
	}
	// create new text
	var newText = document.createElement('div'); 
	newText.className = 'user-msg'; 
	newText.innerHTML = $(".chat-input").val(); // get input
	$('.chat-text').append(newText); 

	$(".chat-text").scrollTop($(".chat-text")[0].scrollHeight); // scroll down
	$(".chat-input").val(''); // clear input
    return false; 
}

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log("Javascript connected!");
})
