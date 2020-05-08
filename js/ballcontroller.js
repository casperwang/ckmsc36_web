




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
		$("#ballcontainer").append("<div class = 'ball' id = 'ball_" + i + "'>" + "<div class = 'hoverbg' id = 'hoverbg_" + i + "'></div><div class = 'hoverbox' id = 'hoverbox_" + i + "'></div></div>"); 
	}
	$("#ballcontainer").css("width", wid);
	$("#ballcontainer").css("height", len);
	$("#ballcontainer").css("right", -len / 2);


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
		backgroundColor: colours[curGo],
		duration: 0
	});
	tl.add({
		targets: "#ballbg .bgbox",
		scale: [
			{value: 0, easing: 'easeOutQuad', duration: 300},
			{value: 1, easing: 'easeInQuad', duration: 300}
		],
		backgroundColor: colours[curGo],
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
			return colours[i];
		}
	});
}

function updateLineArt(){
	for(var i = 0; i < numballs; i++){
		if(i == curGo){
			$("#ball_" + i).html(
				"<div class = 'hoverbg' id = 'hoverbg_" + i + "'></div><div class = 'hoverbox' id = 'hoverbox_" + i + "'></div>" + paths[i]
			);
			anime({
	          targets: '.lineDrawing .lines path',
	          strokeDashoffset: [anime.setDashoffset, 0],
	          easing: 'easeInOutSine',
	          duration: 1000,
	          delay: function(el, i) { return i * 500 },
		    });
		} else {
			$("#ball_" + i).html("<div class = 'hoverbg' id = 'hoverbg_" + i + "'></div><div class = 'hoverbox' id = 'hoverbox_" + i + "'></div>");
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
			return colours[i];
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
			if(i == curGo) sc *= bigScale;
			return sc;
		},
		easing: "easeInOutSine",
		duration: 50
	});
	for(var i = 0; i < numballs; i++){
		if(i != curSel){
			$("#hoverbg_" + i).css("width", "0px");
		}
	}
	//console.log("Cursel = " + curSel);
	$(".hoverbox").html("");
	if(curSel != -1){
		var txt = titles[curSel].replace(/\S/g, "<span class = 'selLetter' visible = 'false'>$&</span>");
		$("#hoverbox_" + curSel).css("padding", "10px 10px 10px 10px");
		$("#hoverbox_" + curSel).css("right", (dia * 1.5) + "px");
		$("#hoverbox_" + curSel).css("width", "10vw");
		$("#hoverbox_" + curSel).html(txt);

		$("#hoverbg_" + curSel).css("width", $("#hoverbox_" + curSel).css("width"));
		$("#hoverbg_" + curSel).css("height", "3em");
		$("#hoverbg_" + curSel).css("right", (dia * 1.5) + "px");
		$("#hoverbg_" + curSel).css("top", "10px");
		$("#hoverbg_" + curSel).css("backgroundColor", coloursLight[curSel]);

		$(".selLetter").css("font-size", (dia / 2) + "px");
	} 
}



function checkHover(){
	$("#ballcontainer").on({
	    mouseenter: function() {
	    	curSel = parseInt(this.id.split("_")[1]);
	    	anime.timeline()
			.add({
				targets: "#hoverbg_" + curSel,
				width: [0, 200],
				duration: 50,
				easing: "easeInQuad"
			}).add({
				targets: ".selLetter",
				opacity: [0, 1],
				delay: function(el, i, l){
					return (l - i) * 20;
				},
				duration: 50,
				easing: "easeInQuad"
			});
	        updSel();
	    },
	    mouseleave: function() {
	    	anime.timeline()
	    	.add({
				targets: ".selLetter",
				opacity: [1, 0],
				delay: function(el, i, l){
					return (i) * 20;
				},
				duration: 50,
				easing: "easeOutQuad"
			}).add({
				targets: "#hoverbg_" + curSel,
				width: [200, 0],
				duration: 50,
				easing: "easeOutQuad"
			});
	    	curSel = -1;
	    	updSel();
	    },
	    click: function(){
	    	var ID = this.id;
	    	curGo = parseInt(ID.split("_")[1]);
	    	ballUpdate();
	    	updSel();
	    	modalUpdate();
	    }
	}, ".ball");
}

