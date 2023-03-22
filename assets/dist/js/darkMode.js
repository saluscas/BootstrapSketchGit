$(document).ready(function() {
    $("#selector").change(function() {
        $("body").toggleClass("bg-secondary");
        $("nav").toggleClass("navbar-dark bg-dark");
        
        $("footer").toggleClass("bg-dark");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapse").toggleClass("navbar-dark bg-dark");
        $("#barCollapse").toggleClass("navbar-dark bg-dark");
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");



        
        $("ul").toggleClass("navbar-dark bg-dark");

        $("h1").toggleClass("text-white");
        $("h2").toggleClass("text-white");
    });
});