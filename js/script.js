// Protection Starts

$(document).bind("contextmenu", function (e) {
    return false;
});

$(document).keydown(function (event) {
    // Prevent F12 -
    if (event.keyCode == 123) {
        return false;
    }
    // Prevent Ctrl+a = disable select all
    // Prevent Ctrl+u = disable view page source
    // Prevent Ctrl+s = disable save
    if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode === 65)) {
        return false;
    }
    // Prevent Ctrl+Shift+I = disabled debugger console using keys open
    else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        return false;
    }
});

// Protection Ends



