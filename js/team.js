function updateContent() {
	//update curTeam based on URL argument 
	const matcher = /(inform|math|bio|phys|chem|earths)_\d+/g;
	var id = window.location.href.match(matcher)[0].split("_");
	curTeam["sub"] = id[0];
	curTeam["id"] = id[1];

	var obj = data[curTeam.sub][curTeam.id];
	console.log(obj.author[0].name);
	$('.project_title').html(obj.title);
	$('title').html(obj.title);
	var authors = "";
	for (var i = 0; i < obj.author.length; i++) {
		if (i > 0) authors += " & ";
		authors += obj.author[i].class + "" + obj.author[i].number + " "
		authors += obj.author[i].name;
	}
	$('#project_author').html(authors);

	$('#author_1 h2').html(obj.author[0].name);
	$('#author_1 p').html("&emsp;&emsp;" + obj.author[0].desciption);
	$('#author_1 .photo').attr("style", "background-image: url('./data/photo/" + obj.author[0].photo + "');");
	
	if (obj.author.length >= 2) {
		$('#author_2').attr("style", "visibility: visible; height: auto; padding: 15px 5% 15px 5%; text-align: right");
		$('#author_2 h2').html(obj.author[1].name);
		$('#author_2 p').html("&emsp;&emsp;" + obj.author[1].desciption);
		$('#author_2 .photo').attr("style", "background-image: url('./data/photo/" + obj.author[1].photo + "');");
	} else {
		$('#author_2').attr("style", "visibility: hidden; height: 0px; padding: 0px");
	}
	
	$('#project_description').html("&emsp;&emsp;" + obj.summary);
	$('#project_pdf').attr("src", "data/pdf/" + obj.pdf + ".pdf");
	$('#project_video').attr("src", "https://www.youtube.com/embed/" + obj.video);
	$('#project_video').attr("style", "width: 125vh; height: 75vh; margin: 10px");
	$('#project_ppt').attr("src", "data/ppt/" + obj.pdf + ".pdf");
	$('#project_ppt').attr("style", "width: 125vh; height: 75vh; margin: 10px");
}

$(document).ready(function(){ //TODO - load the text with animations
	updateContent();
});


