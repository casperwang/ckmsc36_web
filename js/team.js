console.log("AAAA");

function checkButton(){
	$("#backButton").on({
	    mouseenter: function() {
	    	console.log("Jizz");
	    	anime.timeline()
	    	.add({
	    		targets: "#cursor",
	    		translateX: [0, 120],
	    		duration: 150,
	    		easing: "easeInQuad"
	    	})
	    	.add({
	    		targets: "#bannerText .letter",
	    		opacity: [0, 100],
	    		delay: function(el, i, l){
	    			return i * 20;
	    		},
	    		duration: 75,
	    		offset: "-=10",
	    		easing: "easeInQuad"
	    	});
	    },
	    mouseleave: function() {
	    	anime.timeline()
	    	.add({
	    		targets: "#bannerText .letter",
	    		opacity: [100, 0],
	    		delay: function(el, i, l){
	    			return -i * 20;
	    		},
	    		duration: 75,
	    		easing: "easeOutQuad"
	    	})
	    	.add({
	    		targets: "#cursor",
	    		translateX: [120, 0],
	    		duration: 150,
	    		easing: "easeOutQuad"
	    	});
	    },
	    click: function(){
	    	window.location.href = "../../menupage.html";
	    }
	});
}


$(document).ready(function(){ //TODO - load the text with animations
	checkButton();
});


