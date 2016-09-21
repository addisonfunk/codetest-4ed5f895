var formDataService = new function () {
    var base = '/Form/'

    function getTenFriendly(input, callback) {
        $.ajax({
            async: true,
            dataType: 'json',
            url: base + 'GetTenFriendly',
            data: { input: input },
            success: function (data) { callback(data) }
        });
    };

    return {
        getTenFriendly: getTenFriendly
    };

}();