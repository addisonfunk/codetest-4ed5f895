$(document).ready(function () {

    $("#friendly-go-btn").on("click", function () {
        var input = $("#friendly-input").val();
        if (input.indexOf(" ") != -1) {
            var rules = $("#ten-friendly-list-rules").css("color", "red");
            if (rules.is(":visible")) { return; }
            rules.show();
            setTimeout(function () {
                rules.hide();
            }, 5000);
            return false; 
        } else {
            formDataService.getTenFriendly(input, getTenFriendlyCallback);
        }
    });

    function getTenFriendlyCallback(input) {
        var sum = 0;
        for (i = 0; i < input.length; i++) {
            sum += Number(input[i]);
        };

        if (sum == 10) {
            var friendly = $("#ten-friendly-list-true").css("color", "green"); 
            if (friendly.is(":visible")) { return; }
            friendly.show();
            setTimeout(function () {
                friendly.hide();
            }, 5000); 
        } else {
            var notFriendly = $("#ten-friendly-list-false");
            if (notFriendly.is(":visible")) { return; }
            notFriendly.show();
            setTimeout(function () {
                notFriendly.hide();
            }, 5000);
        }
    }; 

}); 