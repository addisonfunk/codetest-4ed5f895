
$(document).ready(function () {

    $("#friendly-go-btn").on("click", function () {
        console.log($("#friendly-input").val());
        var input = $("#friendly-input").val();
        formDataService.getTenFriendly(input, getTenFriendlyCallback);
    });

    function getTenFriendlyCallback(input) {
        console.log(input);
    }; 

}); 