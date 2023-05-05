$(document).ready(function () {
    $("#selector").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");

        $("#content > section > div > div > div.col-lg-4").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-8 > div.card.mb-4").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-8 > div.card.mb-4 > div").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(1)").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(2)").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(3)").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(4)").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(5)").toggleClass("border-light bg-dark");
        $("#content > section > div > div > div.col-lg-8 > div.row > div:nth-child(1) > div > div").toggleClass("text-light bg-dark");
        $("#content > section > div > div > div.col-lg-8 > div.row > div:nth-child(2) > div > div").toggleClass("text-light bg-dark");

        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");


    });
});

$(document).ready(function () {
    $("#selectorTwo").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");
    });
});

$(document).ready(function () {
    $("#selectorThree").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");
    });
});

$(document).ready(function () {
    $("#selectorFour").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");
    });
});

$(document).ready(function () {
    $("#selectorFive").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");
    });
});

$(document).ready(function () {
    $("#selectorSix").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");
    });
});

$(document).ready(function () {
    $("#selectorSeven").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");

    });
});

$(document).ready(function () {
    $("#selectorEight").change(function () {
        $("#selector").toggleClass("navbar-dark bg-dark");
        $("#selectorTwo").toggleClass("navbar-dark bg-dark");
        $("#selectorThree").toggleClass("navbar-dark bg-dark");
        $("#selectorFour").toggleClass("navbar-dark bg-dark");
        $("#selectorFive").toggleClass("navbar-dark bg-dark");
        $("#selectorSix").toggleClass("navbar-dark bg-dark");
        $("#selectorSeven").toggleClass("navbar-dark bg-dark");
        $("#selectorEight").toggleClass("navbar-dark bg-dark");

        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));

        $("body > div").toggleClass("navbar-dark bg-dark");
        $("a").toggleClass("navbar-dark bg-dark");
        $("ul").toggleClass("navbar-dark bg-dark");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
        $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
        $("#content").toggleClass("navbar-dark bg-dark");
        $("#content > hr").toggleClass("text-secondary");
        $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("navbar-dark bg-dark");
        $("footer").toggleClass("navbar-dark text-light bg-dark");

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

        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(1)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(2)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(3)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(4)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(5)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(6)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(7)").toggleClass("bg-white");
        $("#carouselExampleCaptions > div.carousel-indicators > button:nth-child(8)").toggleClass("bg-white");

        $("#accordion").toggleClass("nav-bar bg-dark");
        $("#accordion > div.card").toggleClass("border-secondary");
        $("#headingOne").toggleClass("nav-bar bg-dark");
        $("#collapseOne > div").toggleClass("nav-bar bg-dark");
        $("#headingTwo").toggleClass("nav-bar bg-dark");
        $("#collapseTwo > div").toggleClass("nav-bar bg-dark");
        $("#headingThree").toggleClass("nav-bar bg-dark");
        $("#collapseThree > div").toggleClass("nav-bar bg-dark");






    });
});