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
	$(".seventh_section").css("background-image", fourthBgs[curGo]);

	//Title
	var textWrapper = $("#titleText");
	var txt = titles[curGo].replace(/\S/g, "<span class = 'letter'>$&</span>");
	textWrapper.html(txt);
	//Description (subtitle underneath)
	var textWrapper = $("#titleDesc");
	var txt = descs[curGo].replace(/\S/g, "<span class = 'descLetter'>$&</span>");
	textWrapper.html(txt);

	//Second section
	var textWrapper = $("#secondSection");
	var txt = secondSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);
	$(".second_photo").css("background-image", teacher_photos[curGo]);
	$("#secondInner").html(secondSection[curGo]["innerText"]);

	//Fourth Section
	var textWrapper = $("#fourthSection");
	var txt = fourthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);
	$("#fourthInner").html(fourthSection[curGo]["innerText"]);

	//Sixth Section
	var textWrapper = $("#sixthSection");
	var txt = sixthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);
	$("#sixthInner").html(sixthSection[curGo]["innerText"]);

	$("#fourthphoto_top").css("background-image", teacher_photos[curGo]);
	$("#fourthphoto_bot").css("background-image", teacher_photos[curGo]);

	//Bottom profiles
	/*
	<div class="portfolio-item third-item">
        <div class="image">
          <a href="img/03-big-item.jpg" data-lightbox="image-1"><img src="img/third-item.jpg"></a>
        </div>
        <div class="text">
          <span>Focus</span>
          <h4>Clean Design</h4>
        </div>
    </div>
	*/
	var len = groups[curGo]["len"];
	$(".sixth_section").html(`<div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id = "sixthSection" class = "sectionTitle"></h3>
                            <div id = "sixthInner" class = "sectionText"></div>
                        </div>
                    </div>
                    <div class = "row">`);
	for(var i = 0; i < 1; i++){
		$(".sixth_section").append(
			`
			<div class="col-md-3 col-sm-6">
				<div class="portfolio-item">
			        <div class="image">
			          <a href="${groups[curGo]["images"][i]}" data-lightbox="image-1"><img src="${groups[curGo]["images"][i]}"></a>
			        </div>
			        <div class="text">
			          <span>Focus</span>
			          <h4>Clean Design</h4>
			        </div>
			    </div>
			
			`
		);
	}
	$(".sixth_section").append('</div></div>');
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

	 anime({
	 	targets: '.sectionTitle, .sectionText',
	 	opacity: [0, 1],
	 	easing: "easeInSine",
	 	duration: 300
	 });
}

function modalUpdate(){
	console.log("Updating modal");
	$("#logoPut").attr("src", "./image/logos/ericxiao.jpg");

	$("#par_bg3").css("background-image", 'url("../image/marble.jpg")');
	
	updateTitle();
	logoUpdate();
}