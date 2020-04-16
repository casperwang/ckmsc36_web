console.log("Hiiiii");

function logoUpdate(){
	anime.timeline()
	.add({
      targets: '#lineEureka .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInSine',
      duration: 1500,
      delay: function(el, i) { return i * 50 },
    }).add({
      targets: '#lineEureka .lines path',
      opacity: [1, 0],
      duration: 1500,
      delay: function(el, i) { return i * 50 },
    });
}

function logoHover(){
	$("#lineEureka").on({
		mouseenter: function() {
	    	logoUpdate();
	    }
	});
}

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
  		duration: 300
  	  }).add({
		targets: ".mainContent",
		opacity: [0, 1],
		easing: "easeInExpo",
		duration: 500
	});
	  
}

function modalUpdate(){
	console.log("Updating modal");
	$("#logoPut").attr("src", "./image/logos/ericxiao.jpg");

	$("#par_bg1").css("background-image", 'url("../image/ericxiao.jpg")');
	$("#introText").html("蕭梓宏好帥蕭梓宏好可愛蕭梓宏好天真蕭梓宏好無邪蕭梓宏好純真蕭梓宏好可愛");

	$("#par_bg2").css("background-image", 'url("../image/einstein.jpeg")');
	$("#quoteText").html("蕭梓宏好帥蕭梓宏好可愛蕭梓宏好天真蕭梓宏好無邪蕭梓宏好純真蕭梓宏好可愛");

	$("#par_bg3").css("background-image", 'url("../image/ericxiao.jpg")');
	
	updateTitle();
	logoUpdate();
}