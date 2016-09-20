function myButton_Click() {
    alert("Clicked!");
}

$(function() {
    // Wire up the click event handlers.
    $("#myButton").on("click", myButton_Click);

    // When a list item containing "mad" is clicked,
    // hide it.
    $("li:contains('mad')").on("click", function(){
        $(this).hide();
    });
});