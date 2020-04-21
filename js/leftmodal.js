console.log("Hiiiii");

function logoUpdate(){
	anime.timeline()
	.add({
      targets: '#lineEureka .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInSine',
      duration: 1500,
      delay: function(el, i, l) { return i * 50 },
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

	$(".first_section").css("background-image", firstBgs[curGo]);
	$(".third_section").css("background-image", secBgs[curGo]);
	$(".fifth_section").css("background-image", thirdBgs[curGo]);

	var textWrapper = $("#titleText");
	var txt = titles[curGo].replace(/\S/g, "<span class = 'letter'>$&</span>");
	textWrapper.html(txt);

	var textWrapper = $("#titleDesc");
	var txt = descs[curGo].replace(/\S/g, "<span class = 'descLetter'>$&</span>");
	textWrapper.html(txt);

	var textWrapper = $("#firstSection");
	var txt = firstSection[curGo].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);

	var textWrapper = $("#secondSection");
	var txt = secondSection[curGo].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);

	anime.timeline()
	  .add({
	    targets: '#titleText .letter',
	    opacity: [0,1],
	    translateZ: 0,
	    easing: "easeOutExpo",
	    duration: 400,
	    delay: (el, i, l) => 70 * (l - i + 1)
	  }).add({
	    targets: '.titleLine',
	    scaleX: [0,1],
	    opacity: [0.5,1],
	    easing: "easeOutExpo",
	    duration: 300,
	    offset: '-=575',
	    delay: (el, i, l) => 80 * (l - i) - 30
	  }).add({
	    targets: '#titleDesc .descLetter',
	    opacity: [0,1],
	    translateZ: 0,
	    easing: "easeOutExpo",
	    duration: 200,
	    delay: (el, i, l) => 20 * (l - i + 1)
	  });

	 anime.timeline()
	   .add({
	   	targets: "#firstSection .h3title",
	   	opacity: [0,1],
	    translateZ: 0,
	    easing: "easeOutExpo",
	    duration: 400,
	    delay: (el, i, l) => 30 * (i + 1)
	   }).add({
	   	targets: "#secondSection .h3title",
	   	opacity: [0,1],
	    translateZ: 0,
	    easing: "easeOutExpo",
	    duration: 400,
	    delay: (el, i, l) => 30 * (i + 1)
	   });
}

function modalUpdate(){
	console.log("Updating modal");
	$("#logoPut").attr("src", "./image/logos/ericxiao.jpg");

	$("#par_bg3").css("background-image", 'url("../image/ericxiao.jpg")');
	
	updateTitle();
	logoUpdate();
}