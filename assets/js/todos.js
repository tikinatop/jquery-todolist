$("ul").on("click","li",function(){
    $(this).toggleClass("completee");
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
        var todoEntree = $(this).val();
        //Créer un nouveau li et l'attache à l'ul
        $("ul").append("<li class='nonselect'><span><i class='fa fa-trash'></i></span> "+ todoEntree +"</li>");
        $(this).val("");
    }
});

$(".fa-plus-circle").on("click",function(){
    $("input[type='text']").slideToggle();
});
