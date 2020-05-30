function updateBackground() {
	$(".first_section").css("background-image", Bgs[curGo]);
	$(".third_section").css("background-image", Bgs[curGo]);
	$(".fifth_section").css("background-image", Bgs[curGo]);
	$(".seventh_section").css("background-image", Bgs[curGo]);
	console.log("initBg")
}

function updateTitle() {
	//Make sure there are enough sections
	$(".sixth_section").remove();
	$(".seventh_section").remove();
	if(curGo <= 1){ //Eureka
		$(".fifth_section").html(`
			<div class="content container">
                <div class="row">
                    <div class="col-md-5">
                        <h3 id="fifthSection" class="sectionTitle"></h3>
                        <div id="fifthInner" class="sectionText"></div>
                    </div>
                </div>
                <div id="teams">
                </div>
            </div>
		`);
		$(".rightSide").before(`
			<div class = "col-md-12 sixth_section">
                <div class="content container">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="sixthSection" class="sectionTitle"></h3>
                            <div id="sixthInner" class="sectionText"></div>
                        </div>
                    </div>
                    <div id="teams">
                    </div>
                </div>
            </div>
		`);
		$(".rightSide").before(`
			<div class = "col-md-12 bg_section seventh_section">
                <div class="content container">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="seventhSection" class="sectionTitle"></h3>
                            <div id="seventhInner" class="sectionText"></div>
                        </div>
                    </div>
                    <div id="teams">
                    </div>
                </div>
            </div>
		`);
		$(".fifth_section").css("-webkit-clip-path", `
			polygon(
				  0vw  0vh,
				100vw  10vh,
			    100vw 90vh,
			      0vw 100vh
			)
		`);
		$(".fifth_section").css("min-height", `
			120vh
		`);

		$(".sixth_section").css("min-height", `
			70vh
		`);

		$(".seventh_section").css("-webkit-clip-path", `
			polygon(
				  0vw  15vh,
				100vw  20vh,
			    100vw 100vh,
			      0vw 100vh
			)
		`);
		$(".seventh_section").css("min-height", `
			40vh
		`);


		var textWrapper = $("#fifthSection");
		var txt = fifthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
		textWrapper.html(txt);
		$("#fifthInner").html(fifthSection[curGo]["innerText"]);


		var textWrapper = $("#sixthSection");
		var txt = sixthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
		textWrapper.html(txt);
		$("#sixthInner").html(sixthSection[curGo]["innerText"]);
	} else { //else 
		$(".fifth_section").html("");
		$(".fifth_section").css("-webkit-clip-path", `
			polygon(
				  0vw  60vh,
				100vw  40vh,
			    100vw 100vh,
			      0vw 100vh
			);
		`);
		$(".fifth_section").css("min-height", `
			70vh
		`);
	}
	//Title
	var textWrapper = $("#titleText");
	var txt = titles[curGo].replace(/\S/g, "<span class = 'letter'>$&</span>");
	console.log(txt)
	textWrapper.html(txt);
	//Description (subtitle underneath)
	var textWrapper = $("#titleDesc");
	var txt = descs[curGo].replace(/\S/g, "<span class = 'descLetter'>$&</span>");
	textWrapper.html(txt);

	//Second section
	
	var textWrapper = $("#secondSection");
	var txt = secondSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);
	$("#secondInner").html(secondSection[curGo]["innerText"]);
	
	//Third Section
	var textWrapper = $("#thirdSection");
	var txt = thirdSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt)
	$("#thirdInner").html(thirdSection[curGo]["innerText"]);

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
	var obj = '<div class="row">';
	for (var i = 0; i < len; i++) {
		obj += 
			`<div class="col-md-4 col-sm-4">
				<div class="portfolio-item">
			        <div class="image">
			          <a href="${groups[curGo]["images"][i]}" data-lightbox="image-1"><img src="${groups[curGo]["images"][i]}"></a>
			        </div>
			        <div class="text">
			          <span>${groups[curGo]["names"][i]}</span>
			          <h4>${groups[curGo]["titles"][i]}</h4>
					</div>
					<br>
			    </div>
			</div>`
			;
		if (i % 3 == 2 && i != len-1) {
			obj += '</div><div class="row">';
		}
	}
	obj += '</div>';
	$("#teams").html(obj);
	//Sixth Section
	var textWrapper = $("#fourthSection");
	var txt = fourthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);
	$("#fourthInner").html(fourthSection[curGo]["innerText"]);

	$("#thirdphoto_top").css("background-image", teacher_photos[curGo]);
	$("#thirdphoto_bot").css("background-image", teacher_photos[curGo]);

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
	updateTitle();
	updateBackground();
	console.log("Finish update modal");
}