$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});


$("ul").on("click","li span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// Evite le "bubbling-up" des éléments parents
	e.stopPropagation();
});

$("input[type='text']").on("keypress",function(e){
	if (e.which === 13){
		//Récupère le nouveau todo depuis l'élément textinput
		var todoEntry = $(this).val();
		//Créer un nouveau li et l'attache à l'ul
		$("ul").append("<li class='noselect'><span><i class='fa fa-trash'></i></span> "+ todoEntry +"</li>");
		$(this).val("");
	}
});

$(".fa-plus-circle").on("click",function(){
	$("input[type='text']").slideToggle();
});