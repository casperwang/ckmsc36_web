console.log("AAAA");

function checkButton(){
	$(".backBtn").on({
	    mouseenter: function() {
	    	console.log("Enter");
	    	$("#bannerText").html("Back".replace(/\S/g, "<span class = 'letter'>$&</span>"));
	    	anime.timeline()
	    	.add({
	    		targets: ".backBtn",
	    		scale: [1, 1.2],
	    		duration: 100,
	    		easing: "easeInExpo"
	    	}).add({
	    		targets: "#bannerText .letter",
	    		opacity: [0, 1],
	    		duration: 30,
	    		delay: function(el, i, l){
	    			console.log("i = " + i + ", l = " + l);
	    			return i * 15;
	    		},
	    		easing: "easeInExpo"
	    	});
	    },
	    mouseleave: function() {
	    	anime({
	    		targets: ".backBtn",
	    		scale: [1.2, 1],
	    		duration: 100,
	    		easing: "easeOutExpo"
	    	});
	    	anime({
	    		targets: "#bannerText .letter",
	    		opacity: [1, 0],
	    		duration: 30,
	    		delay: function(el, i, l){
	    			return (l - i) * 15;
	    		},
	    		easing: "easeOutExpo"
	    	});
	    },
	    click: function(){
	    	window.location.href = "../../index.html";
	    }
	});
}


$(document).ready(function(){ //TODO - load the text with animations
	console.log("JJJJ");
	checkButton();
});


