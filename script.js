var ligar = false ; 

$(".hamburguer").click(function(){
    if(!ligar){
        $(".sidebar").css("right","0");
        $(".hamburguer").css("right", "16rem");
        $("#line2").css("opacity","0") ; 
        $("#line2").css("visibility","hidden");
        $("#line").css("transform","rotate(45deg)","translate(.3rem, .4rem)");
        $("#line3").css("transform","rotate(-45deg)","translate(.3rem, .4rem)");
        
        ligar = true; 
    }
    else{
        $(".sidebar").css("right","-20rem");
        $(".hamburguer").css("right","2rem");
        ligar = false;
    }
   
});