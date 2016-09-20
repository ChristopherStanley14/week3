$(document).ready(function() {
    $("#paragraph").hover(function() {
        $("#paragraph").fadeOut("slow", "linear");
    });
});


$(function() {
    $("h3").hover(function() {
         $("h3").fadeOut("slow", "linear");
});
});


$("li:contains('1')").onClick(function(){
        $(this).hide();
    });
