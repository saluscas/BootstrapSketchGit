$(document).ready(function () {
    // verifica se o darkmode está ativado no localStorage
    if (localStorage.getItem('darkmode') === 'true') {
        // se o darkmode estiver ativado, aplica as classes de estilo escuro
        toggleDarkmode();
        // define o estado do seletor como ativado
        $('#selector').prop('checked', true);
        $('#selectorTwo').prop('checked', true);
        $('#selectorThree').prop('checked', true);
        $('#selectorFour').prop('checked', true);
        $('#selectorFive').prop('checked', true);
        $('#selectorSix').prop('checked', true);
        $('#selectorSeven').prop('checked', true);
        $('#selectorEight').prop('checked', true);
    }

    // adiciona um listener para o evento 'change' no seletor
    $('#selector').change(function () {
        // ativa ou desativa o darkmode, dependendo do estado do seletor
        toggleDarkmode();
        // Dá checked nos outros checkbox toggles.
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        // salva o estado do darkmode no localStorage
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });

    $('#selectorTwo').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
    $('#selectorThree').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
    $('#selectorFour').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
    $('#selectorFive').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
    $('#selectorSix').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
    $('#selectorSeven').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorEight").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
    $('#selectorEight').change(function () {
        toggleDarkmode();
        $("#selector").prop("checked", $(this).prop("checked"));
        $("#selectorTwo").prop("checked", $(this).prop("checked"));
        $("#selectorThree").prop("checked", $(this).prop("checked"));
        $("#selectorFour").prop("checked", $(this).prop("checked"));
        $("#selectorFive").prop("checked", $(this).prop("checked"));
        $("#selectorSix").prop("checked", $(this).prop("checked"));
        $("#selectorSeven").prop("checked", $(this).prop("checked"));
        localStorage.setItem('darkmode', $(this).prop('checked'));
    });
});

// função para ativar ou desativar o darkmode
function toggleDarkmode() {
    $("#selector").toggleClass("navbar-dark bg-dark");
    $("#selectorTwo").toggleClass("navbar-dark bg-dark");
    $("#selectorThree").toggleClass("navbar-dark bg-dark");
    $("#selectorFour").toggleClass("navbar-dark bg-dark");
    $("#selectorFive").toggleClass("navbar-dark bg-dark");
    $("#selectorSix").toggleClass("navbar-dark bg-dark");
    $("#selectorSeven").toggleClass("navbar-dark bg-dark");
    $("#selectorEight").toggleClass("navbar-dark bg-dark");

    $("body > div").toggleClass("navbar-dark bg-dark");
    $("a").toggleClass("navbar-dark bg-dark");
    $("ul").toggleClass("navbar-dark bg-dark");
    $("nav").toggleClass("navbar-dark bg-dark");
    $(".navbar-nav .show > .nav-link, .navbar-nav .nav-link.active").toggleClass("text-active");
    $("#sidebar > ul").toggleClass("navbar-secondary bg-secondary");
    $("#content").toggleClass("navbar-dark bg-dark");
    $("#content > hr").toggleClass("text-secondary");
    
    $("#content > section > div > div > div.col-lg-4 > div:nth-child(1)").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-8 > div.row > div:nth-child(1) > div").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-8 > div.row > div:nth-child(2) > div").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-8 > div.card.mb-4").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(1)").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(2)").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(3)").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(4)").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div.card.mb-4.mb-lg-0 > div > ul > li:nth-child(5)").toggleClass("border-secondary bg-dark");
   
    $("#content > section > div > div > div.col-lg-4 > div").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-8 > div.row > div:nth-child(2) > div > div").toggleClass("text-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-8 > div.row > div:nth-child(1) > div > div").toggleClass("text-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-8 > div.card.mb-4 > div").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4 > div:nth-child(1) > div").toggleClass("border-secondary bg-dark");
    $("#content > section > div > div > div.col-lg-4").toggleClass("border-secondary bg-dark");

    $("#content > div:nth-child(4) > div:nth-child(1) > div").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(4) > div:nth-child(2) > div").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(4) > div:nth-child(3) > div").toggleClass("border-secondary bg-dark");

    $("#content > div:nth-child(4) > div.card").toggleClass("border-secondary bg-dark");

    $("#content > div:nth-child(5) > div:nth-child(1) > div").toggleClass("bg-dark");
    $("#content > div:nth-child(5) > div:nth-child(2) > div").toggleClass("bg-dark");
    $("#content > div:nth-child(5) > div:nth-child(3) > div").toggleClass("bg-dark");

    $("#content > div:nth-child(5) > div:nth-child(1)").toggleClass("border-secondary");
    $("#content > div:nth-child(5) > div:nth-child(2)").toggleClass("border-secondary");
    $("#content > div:nth-child(5) > div:nth-child(3)").toggleClass("border-secondary");

    $("#content > div:nth-child(4) > div:nth-child(1) > div > a").toggleClass("bg-secondary-color");


    
    



   
    
    


    


    

    $("footer").toggleClass("navbar-dark text-light bg-dark");
    $("#content > div:nth-child(1) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(2) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(3) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(4) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(5) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(6) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(7) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(8) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(9) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(10) > footer").toggleClass("border-secondary bg-dark");
    $("#content > div:nth-child(11) > footer").toggleClass("border-secondary bg-dark");



    

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

    // $(document).ready(function () {
    //     $("#selector").change(function () {
    //         $("#selectorTwo").prop("checked", $(this).prop("checked"));
    //         $("#selectorThree").prop("checked", $(this).prop("checked"));
    //         $("#selectorFour").prop("checked", $(this).prop("checked"));
    //         $("#selectorFive").prop("checked", $(this).prop("checked"));
    //         $("#selectorSix").prop("checked", $(this).prop("checked"));
    //         $("#selectorSeven").prop("checked", $(this).prop("checked"));
    //         $("#selectorEight").prop("checked", $(this).prop("checked"));
    //     })
    // })
}
