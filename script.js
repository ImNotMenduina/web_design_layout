$(".hamburguer").click(function(){
    $(".sidebar").toggleClass("open_close_sidebar");
    $(this).toggleClass("open_close_hamburguer");
    $("#line1").toggleClass("X_Hamburguer");
    $("#line2").toggleClass("X_Hamburguer");
    $("#line3").toggleClass("X_Hamburguer");

})