// JavaScript Document
$(document).ready(function(e) {
	$("#box").children("div").each(function(index, element) {
    	$(this).click(function(){alert($(this).index())})
	});    
});

var divs = $("#box").children("div")
function autoPlay(){
		
}