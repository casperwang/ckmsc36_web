




//Background grid
var grid = [Math.ceil(wid / 100), Math.ceil(len / 100)];
var nelements = grid[0] * grid[1];
/*

數學 #C0D72F
資訊 #EAEAEA
化學 #F9A51B
地科 #D64141
物理 #478BAA
生物 #FDEC10
*/

function initDoc(){
	for(var i = 0; i < numballs; i++){
		$("#ballcontainer").append("<div class = 'ball' id = 'ball_" + i + "'><div class = 'hoverbox' id = 'hoverbox_" + i + "'></div>" + "</div>"); 
	}
	$("#ballcontainer").css("width", wid);
	$("#ballcontainer").css("height", len);
	//$("#ballcontainer").css("right", -len / 2);


	$("#ballbg").css("width", wid);
	$("#ballbg").css("height", len);
	//$("#ballbg").css("right", 0);
	$("#ballbg").css("backgroundColor", "#000000");

	$("#backbg").css("width", wid);
	$("#backbg").css("height", len);
	$("#backbg").css("right", 0);

	$(".ball").css("width", dia);
	$(".ball").css("height", dia);

	$("#logoImg").css("height", $("#logoImg").css("width"));
}

function bgripple(){
	var tl = anime.timeline({
		easing: "easeInQuad"
	});
	var idx = grid[0] / 2 * grid[1] + grid[1] / 2;
	tl.add({
		targets: "#ballbg",
		backgroundColor: colours[curGo % 6],
		duration: 0
	});
	tl.add({
		targets: "#ballbg .bgbox",
		scale: [
			{value: 0, easing: 'easeOutQuad', duration: 300},
			{value: 1, easing: 'easeInQuad', duration: 300}
		],
		backgroundColor: colours[curGo % 6],
		delay: anime.stagger(90, {grid: grid, from: idx})
	});
	
}

function initBg(){
	for(var i = 0; i < nelements; i++){
		$("#ballbg").append("<div class = 'bgbox' id = 'bgbox_" + i + "'></div>");
	}
	anime({
		targets: "#ballbg .bgbox",
		translateX: anime.stagger('100px', {grid: grid, from: 0, axis: "x"}),
		translateY: anime.stagger('100px', {grid: grid, from: 0, axis: "y"}),
		duration: 50,
		complete: function(anim){
			bgripple();
		}
	});
}




function initBalls(){
	var tl = anime.timeline();
	tl.add({ //Disperse the balls to correct position
		targets: "#ballcontainer .ball",
		translateY: function(el, i, l){
			console.log("l = " + l + ", i = " + i);
			return (i + 1) * window.innerHeight / (l + 1);	
		},
		easing: "easeInQuad"
	}).add({ //Updates first focus ball
		targets: "#ballcontainer .ball",
		scale: function(el, i, l){
			if(i == 0){
				return bigScale;
			} else {
				return 1;
			}
		},
		backgroundColor: function(el, i, l){
			return colours[i % 6];
		}
	});
}

function updateLineArt(){
	for(var i = 0; i < numballs; i++){
		if(i == curGo){
			$("#ball_" + i).html(
				"<div class = 'hoverbox' id = 'hoverbox_" + i + "'></div>" + paths[i]
			);
			anime({
	          targets: '.lineDrawing .lines path',
	          strokeDashoffset: [anime.setDashoffset, 0],
	          easing: 'easeInOutSine',
	          duration: 1000,
	          delay: function(el, i) { return i * 500 },
		    });
		} else {
			$("#ball_" + i).html("<div class = 'hoverbox' id = 'hoverbox_" + i + "'></div>");
		}
	}
}

function ballUpdate(){
	var tl = anime.timeline();
	tl.add({ //Updates current focus ball
		targets: "#ballcontainer .ball",
		scale: function(el, i, l){
			var sc = 1;
			if(i == curSel) sc *= selectScale;
			if(i == curGo) sc = bigScale;
			return sc;
		},
		backgroundColor: function(el, i, l){
			return colours[i % 6];
		},
		duration: 50,
		easing: "easeInQuad"
	});
	bgripple();
	updateLineArt();
}

function updSel(){
	anime({
		targets: ".ball",
		scale: function(el, i, l){
			var sc = 1;
			if(i == curSel) sc *= selectScale;
			if(i == curGo) sc = bigScale;
			return sc;
		},
		easing: "easeInOutSine",
		duration: 50
	});
	console.log("Cursel = " + curSel);
	$(".hoverbox").html("");
	if(curSel != -1){
		$("#hoverbox_" + curSel).html(titles[curSel]);
	}
}

function logoUpdate(){
	anime({
      targets: '#lineEureka .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInSine',
      duration: 1500,
      delay: function(el, i) { return i * 50 },
      //direction: "alternate",
      //loop: true
    });
}

function checkHover(){
	$("#ballcontainer").on({
	    mouseenter: function() {
	    	curSel = parseInt(this.id.split("_")[1]);
	        updSel();
	    },
	    mouseleave: function() {
	    	console.log("Exit!");
	    	curSel = -1;
	    	updSel();
	    },
	    click: function(){
	    	var ID = this.id;
	    	curGo = parseInt(ID.split("_")[1]);
	    	ballUpdate();
	    	updSel();
	    	logoUpdate();
	    	modalUpdate();
	    }
	}, ".ball");
	$("#lineEureka").on({
		mouseenter: function() {
	    	logoUpdate();
	    }
	});
}

