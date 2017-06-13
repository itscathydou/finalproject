$(document).ready(function(){
    $("#drone_menu").click(function() {
    $("#dronedrop").fadeToggle();
    });
    $('#dslr_menu').click(function() {
        $("#dslrdrop").fadeToggle();
    });
    $('#action_menu').click(function() {
        $("#actiondrop").fadeToggle();
    });
    $('#downarrow').click(function(){
        $('body').animate({scrollTop:'+=800px'},800);
    });
});
