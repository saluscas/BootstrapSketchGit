
$(document).ready(function() {
    $("#selector").change(function() {
        $("body > div").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        
        $("footer").toggleClass("navbar-dark text-light bg-dark");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");

        $("#sidebarCollapse").toggleClass("navbar-dark bg-dark");
        $("#barCollapse").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseTwo").toggleClass("navbar-dark bg-dark");
        $("#barCollapseTwo").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseThree").toggleClass("navbar-dark bg-dark");
        $("#barCollapseThree").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseFour").toggleClass("navbar-dark bg-dark");
        $("#barCollapseFour").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseFive").toggleClass("navbar-dark bg-dark");
        $("#barCollapseFive").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseSix").toggleClass("navbar-dark bg-dark");
        $("#barCollapseSix").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseSeven").toggleClass("navbar-dark bg-dark");
        $("#barCollapseSeven").toggleClass("navbar-dark bg-dark");
        $("#sidebarCollapseEight").toggleClass("navbar-dark bg-dark");
        $("#barCollapseEight").toggleClass("navbar-dark bg-dark");

        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        
        
        $("#content > hr").toggleClass("text-secondary");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");
       


        
        
        $("ul").toggleClass("navbar-dark bg-dark");

    });
});