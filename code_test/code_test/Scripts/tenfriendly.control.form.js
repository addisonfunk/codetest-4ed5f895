console.log("testing 1"); 
$(document).ready(function () {
    console.log("testing 2");
    $("#friendly-test-btn").on("click", function () {
        alert('test');
    });

    formDataService.getTenFriendly(input, getTenFriendlyCallback);

    function getTenFriendlyCallback(input) {
        console.log(input);
    }; 

}); 