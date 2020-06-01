function updateContent() {
	var obj = data[curTeam.sub][curTeam.id]
	$('#project_title').html(obj.title)
	$('#project_author').html(obj.author)
	console.log(obj)
}

$(document).ready(function(){ //TODO - load the text with animations
	updateContent();
});


