console.log("Hiiiii");

function updateTitle(){
	var textWrapper = $("#titleText");
	var txt = titles[curGo].replace(/\S/g, "<span class = 'letter'>$&</span>");
	textWrapper.html(txt);

	anime.timeline()
	  .add({
	    targets: '.title .letter',
	    scale: [0.3,1],
	    opacity: [0,1],
	    translateZ: 0,
	    easing: "easeOutExpo",
	    duration: 400,
	    delay: (el, i) => 70 * (i+1)
	  }).add({
	    targets: '.title .line',
	    scaleX: [0,1],
	    opacity: [0.5,1],
	    easing: "easeOutExpo",
	    duration: 500,
	    offset: '-=875',
	    delay: (el, i, l) => 80 * (l - i) - 30
	  }).add({ 
  		targets: '#logoImg',
  		opacity: [0, 1],
  		easing: "easeOutExpo",
  		duration: 500
  	  }).add({ 
  		targets: '#groupImg, #mainText',
  		opacity: [0, 1],
  		scale: [0, 1],
  		easing: "easeOutExpo",
  		duration: 200,
  	  });
	  
}

function modalUpdate(){
	console.log("Updating modal");
	$("#leftBg").css("background-color", colours[curGo]);
	$("#logoPut").attr("src", "./image/logos/ericxiao.jpg");
	$("#groupPut").attr("src", "./image/groupimgs/groupimg.jpg");
	updateTitle();
}