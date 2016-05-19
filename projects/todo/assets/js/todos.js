enterKey = 13;

//check off todo by click
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().slideUp(function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function (e) {
  if (e.which === enterKey && $(this).val() !== "") {
    var newToDo = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newToDo + "</li>")
    $(this).val("");
  }
});

// togggle input
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle(600);
});
