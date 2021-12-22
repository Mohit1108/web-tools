$.get("/assets/navbar.html",
    function (data) {
        $("#tools-Navbar").replaceWith(data);
    });
