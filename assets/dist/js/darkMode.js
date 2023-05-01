
$(document).ready(function() {
    $("#selector").change(function() {
        $("body > div").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        
        $("footer").toggleClass("navbar-dark text-light bg-dark");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapse").toggleClass("navbar-dark bg-dark");
        $("#barCollapse").toggleClass("navbar-dark bg-dark");
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        
        
        $("#content > hr").toggleClass("text-secondary");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        
       
        
        
        
        $("ul").toggleClass("navbar-dark bg-dark");

    });
});