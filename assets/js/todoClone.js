//
/*$("li").on("click",function(){
	$(this).toggleClass("completed");
});*/

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Event Bubbling ====================================
/*$("li").click(function(event){
	console.log("clicked li!");
	event.stopPropagation();
});

$("li").click(function(){
	console.log("clicked li!");
});

$("ul").click(function(){
	console.log("clicked ul!");
});

$("#container").click(function(){
	console.log("clicked container!");
});

$("body").click(function(){
	console.log("clicked body!");
});*/
// =========================================

$("ul").on("click","li span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").on("keypress",function(e){
	if (e.which === 13){
		//Récupère le nouveau todo depuis l'élément textinput
		var todoEntry = $(this).val();
		//Créer un nouveau li et l'attache à l'ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoEntry +"</li>");
	}
});

$(".fa-plus-circle").on("click",function(){
	$("input[type='text']").slideToggle();
});