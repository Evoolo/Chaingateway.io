// HAMBURGER TOGGLER
$(".hamburger-menu").on("click", function () {
    $(".hamburger-menu").toggleClass("animate");
    $("#overlay").toggleClass("overlay-active");
    $(".main-top-section").toggleClass("mobile-view");
    $("html").toggleClass("fix-screen-mobile");
    $(".hero-background").toggleClass("overflow-initial");
});
$(document).ready(function () {
    const Section1 = document.querySelector("#mint");
    const Section2 = document.querySelector("#about");
    const Section3 = document.querySelector("#showcase");
    const Section4 = document.querySelector("#mission");
    const Section5 = document.querySelector("#roadmap");
    const Section6 = document.querySelector("#Team");
    // const mainMenu = document.querySelector(" #main-menu ");

    //  SECTION-1 SCROLL
    $(".about-link").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("html").removeClass("fix-screen-mobile");
    });

    // SECTION-2 SCROLL
    $(".section-2").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("html").removeClass("fix-screen-mobile");
        // Section2.scrollIntoView();
    });

    // SECTION-3 SCROLL
    $(".section-3").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("html").removeClass("fix-screen-mobile");
        // Section3.scrollIntoView();
    });

    // SECTION-4 SCROLL
    $(".section-4").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("html").removeClass("fix-screen-mobile");
        // Section4.scrollIntoView();
    });

    // SECTION-5 SCROLL
    $(".section-5").click(function () {
        // mainMenu.click();
        $(".hamburger-menu").removeClass("animate");
        $("#overlay").removeClass("overlay-active");
        $(".main-top-section").removeClass("mobile-view");
        $("html").removeClass("fix-screen-mobile");
        // Section5.scrollIntoView();
    });

});
// DEFINE-SCRIPT-YEAR
const d = new Date();
document.getElementById("year-change").innerHTML = d.getFullYear();