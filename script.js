function addItemToList() {
     var item = $(".item").val();
     $(".list").append("<li>" + item + "</li>");
}

function clearInput() {
    $(".item").val(""); 
}

$(".add").click(function() {
    
  addItemToList();
  clearInput();
});