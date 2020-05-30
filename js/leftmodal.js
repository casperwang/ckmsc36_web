function updateBackground() {
	$(".first_section").css("background-image", firstBgs[curGo]);
	$(".third_section").css("background-image", thirdBgs[curGo]);
	$(".fifth_section").css("background-image", fifthBgs[curGo]);
	console.log("initBg")
}

function updateTitle() {
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
	$(".second_photo").css("background-image", teacher_photos[curGo]);
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
	updateBackground();
	updateTitle();
	console.log("Finish update modal");
}