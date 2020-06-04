function updateContent() {
	var obj = data[curTeam.sub][curTeam.id];
	console.log(obj.author[0].name);
	$('#project_title').html(obj.title);
	$('#project_author').html(obj.author.length);
	$('#author_1').html(obj.author[0].name);
	$('#author_1_content').html(obj.author[0].desciption);
	$('#author_2').html(obj.author[1].name);
}

$(document).ready(function(){ //TODO - load the text with animations
	updateContent();
});


