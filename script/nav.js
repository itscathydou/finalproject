$(document).ready(function(){
    $("#drone_menu").click(function() {
        $("#dronedrop").fadeToggle();
        $("#dslrdrop").css("display","none");
        $("#actiondrop").css("display","none");
    });
    $('#dslr_menu').click(function() {
        $("#dslrdrop").fadeToggle();
        $("#dronedrop").css("display","none");
        $("#actiondrop").css("display","none");
    });
    $('#action_menu').click(function() {
        $("#actiondrop").fadeToggle();
        $("#dslrdrop").css("display","none");
        $("#dronedrop").css("display","none");
    });
    $('#downarrow').click(function(){
        $('body').animate({scrollTop:'+=800px'},800);
    });
    $('#submit').click(function(){
        alert("Your email has been sent.");
    });
});
