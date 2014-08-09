
var commentList = [
	{
		id : 1,
		comment : "Hello World"
	},

	{
		id : 2,
		comment: "Second comment"
	},

	{
		id: 3,
		comment: "Third!"
	}
];


$(document).ready(function() {

	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		$(".commentsRendered").prepend(commentList);
	});
});