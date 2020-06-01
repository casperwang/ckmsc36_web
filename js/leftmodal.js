function updateBackground() {
	if(curGo <= 1){
		$(".first_section").css("background-image", specialBgs[curGo][0]);
		$(".third_section").css("background-image", specialBgs[curGo][1]);
		$(".fifth_section").css("background-image", specialBgs[curGo][2]);
		$(".seventh_section").css("background-image", specialBgs[curGo][3]);
		$(".ninth_section").css("background-image", specialBgs[curGo][4]);
		$(".eleventh_section").css("background-image", specialBgs[curGo][5]);
	} else {
		$(".first_section").css("background-image", Bgs[curGo]);
		$(".third_section").css("background-image", Bgs[curGo]);
		$(".fifth_section").css("background-image", Bgs[curGo]);
		$(".seventh_section").css("background-image", Bgs[curGo]);
		$(".ninth_section").css("background-image", Bgs[curGo]);
	}
}

function updateTitle() {
	//Make sure there are enough sections
	$(".sixth_section").remove();
	$(".seventh_section").remove();
	$(".eighth_section").remove();
	$(".ninth_section").remove();
	$(".tenth_section").remove();
	$(".eleventh_section").remove();
	if(curGo <= 1){ //Eureka
		$(".fifth_section").html(`
			<div class="content container-fluid">
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
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="sixthSection" class="sectionTitle"></h3>
                            <div id="sixthInner" class="sectionText"></div>
                        </div>
                    </div>
                </div>
            </div>
			<div class = "col-md-12 bg_section seventh_section">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="seventhSection" class="sectionTitle"></h3>
                            <div id="seventhInner" class="sectionText"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "col-md-12 eighth_section">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="eighthSection" class="sectionTitle"></h3>
                            <div id="eighthInner" class="sectionText"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "col-md-12 bg_section ninth_section">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="ninthSection" class="sectionTitle"></h3>
                            <div id="ninthInner" class="sectionText"></div>
                        </div>
                    </div>
                </div>
            </div>
		`);
		if(curGo == 1){
			$(".rightSide").before(`
				<div class = "col-md-12 tenth_section">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="tenthSection" class="sectionTitle"></h3>
                            <div id="tenthInner" class="sectionText"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "col-md-12 bg_section eleventh_section">
                <div class="content container-fluid">
                    <div class="row">
                        <div class="col-md-5">
                            <h3 id="eleventhSection" class="sectionTitle"></h3>
                            <div id="eleventhInner" class="sectionText"></div>
                        </div>
                    </div>
                </div>
            </div>
            `);
		}
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
			    100vw 90vh,
			     70vw 100vh,
			      0vw 80vh
			)
		`);
		$(".seventh_section").css("min-height", `
			100vh
		`);

		$(".eighth_section").css("min-height", `
			70vh
		`);
		if(curGo == 0){
			$(".ninth_section").css("-webkit-clip-path", `
				polygon(
					  0vw  0vh,
					100vw  20vh,
				    100vw 100vh,
				      0vw 100vh
				)
			`);
			$(".ninth_section").css("min-height", `
				40vh
			`);
		} else if(curGo == 1){
			$(".ninth_section").css("-webkit-clip-path", `
				polygon(
					  0vw  0vh,
					100vw  20vh,
				    100vw 100vh,
				      0vw 90vh
				)
			`);
			$(".ninth_section").css("min-height", `
				100vh
			`);
		}
		

		$(".tenth_section").css("min-height", `
			70vh
		`);

		$(".eleventh_section").css("-webkit-clip-path", `
			polygon(
				  0vw  0vh,
				100vw  20vh,
			    100vw 100vh,
			      0vw 90vh
			)
		`);
		$(".eleventh_section").css("min-height", `
			40vh
		`);

		//Sixth section
		var textWrapper = $("#sixthSection");
		var txt = sixthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
		textWrapper.html(txt);
		$("#sixthInner").html(sixthSection[curGo]["innerText"]);

		//Eighth section
		var textWrapper = $("#eighthSection");
		var txt = eighthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
		textWrapper.html(txt);
		$("#eighthInner").html(eighthSection[curGo]["innerText"]);

		//Tenth section
		if(curGo == 1){
			var textWrapper = $("#tenthSection");
			var txt = tenthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
			textWrapper.html(txt);
			$("#tenthInner").html(tenthSection[curGo]["innerText"]);	
		}
		

		$("#thirdInner").html("");
		$("#thirdSection").html("");

		$("#thirdphoto_top").css("background-image", "");
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
		$(".fifth_section").css("min-height", "20vh");

		//Third Section
		var textWrapper = $("#thirdSection");
		var txt = thirdSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
		textWrapper.html(txt)
		$("#thirdInner").html(thirdSection[curGo]["innerText"]);
		$("#thirdInner").prepend(`<div class = "third_photos">
                                    <div class="teacher_photo circle_base" id = "thirdphoto_top"></div>
                                </div>`);
		$("#thirdphoto_top").css("background-image", teacher_photos[curGo]);
		$("#thirdSub").html(teacherSubs[curGo - 2]);
		
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
	if(curGo <= 1){

	}
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

	//Fourth Section
	var textWrapper = $("#fourthSection");
	var txt = fourthSection[curGo]["title"].replace(/\S/g, "<span class = 'h3title'>$&</span>");
	textWrapper.html(txt);
	$("#fourthInner").html(fourthSection[curGo]["innerText"]);


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
	 	targets: '.sectionTitle, .sectionText .sectionSubTitle',
	 	opacity: [0, 1],
	 	easing: "easeInSine",
	 	duration: 200
	});
}

function modalUpdate(){
	console.log("Updating modal");
	updateTitle();
	updateBackground();
	console.log("Finish update modal");
}