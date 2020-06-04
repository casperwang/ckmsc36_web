function updateContent() {
	var obj = data[curTeam.sub][curTeam.id];
	console.log(obj.author[0].name);
	$('.project_title').html(obj.title);
	var authors = "";
	for (var i = 0; i < obj.author.length; i++) {
		if (i > 0) authors += " & "
		authors += obj.author[i].name;
	}
	$('#project_author').html(authors);

	$('#author_1 h2').html(obj.author[0].name);
	$('#author_1 p').html(obj.author[0].desciption);
	$('#author_1 .photo').attr("style", "background-image: url('./data/photo/" + obj.author[0].photo + "');");

	$('#author_2 h2').html(obj.author[1].name);
	$('#author_2 p').html(obj.author[1].desciption);
	$('#author_2 .photo').attr("style", "background-image: url('./data/photo/" + obj.author[0].photo + "');");

	$('#project_description').html(obj.summary);
	$('#project_pdf').attr("src", "data/pdf/" + obj.pdf + ".pdf");
}

$(document).ready(function(){ //TODO - load the text with animations
	updateContent();
});


