function call(callback) {
    for (var i = 0; i < 3; i++) {
        callback();
    }
};

var callback = function() {
    console.log("callbacked..");
};

call(callback);
call(function() {
    console.log("callback by function literal")
});