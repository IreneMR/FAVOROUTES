$(document).ready(function(){
	$(".btn-send").on("click",function(){

		var newPost = {
			comment: $(this).siblings(".comment-field").val(),
			user:  $(this).siblings(".user-field").val(), 
			city:   $(this).siblings(".city-field").val()
		}
		currentChainID = $(this).attr("name")
		//currentChain = $("#chain"+currentChainID);
		//currentChain.after("<div>"+newPost.user+" "+newPost.comment +" "+newPost.city+"</div>" );

		$.ajax({
			type: "POST",
			url: "http://localhost:3000/chains/"+currentChainID+"/userposts",
			data: newPost,
			success: function(response){location.reload()},
	        error: function(response){console.log("error: " + response)},
	        dataType: "json"
		})
	});
})






