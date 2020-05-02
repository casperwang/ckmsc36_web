function readyAnimation(){
	anime.timeline()
	.add({
		targets: '#toptitle .line',
	    opacity: [0.5,1],
	    scaleX: [0, 1],
	    easing: "easeInOutExpo",
	    duration: 700
	})
	.add({
		targets: '#toptitle .line',
		duration: 600,
	    easing: "easeOutExpo",
	    translateY: (el, i) => (-1 + 2*i) + "em"
	})
	.add({
		targets: '#toptitle .mid',
	    opacity: [0,1],
	    scaleY: [0.5, 1],
	    easing: "easeOutExpo",
	    duration: 600,
	    offset: '-=600'
	})
	.add({
	    targets: '#toptitle .lft',
	    opacity: [0 , 1],
	    translateX: ["0.5em", 0],
	    easing: "easeOutExpo",
	    duration: 600,
	    offset: '-=300'
  	}).add({
	    targets: '#toptitle .rgt',
	    opacity: [0,1],
	    translateX: ["-0.5em", 0],
	    easing: "easeOutExpo",
	    duration: 600,
	    offset: '-=600'
  	}).add({
  		targets: '.inText',
  		opacity: [0, 1],
  		easing: "easeInOutExpo",
  		duration: 600,
  		delay: (el, i) => i * 800
  	});
}

$(document).ready(function(){
	readyAnimation()
});