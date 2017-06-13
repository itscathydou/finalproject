$(document).ready(function(){
    $('#c1').hover(function(){
		$(this).css("background-color", "#D8D8D8");
		$(this).css("border", "1px solid #E5E5E5");
    	}, function(){
    	$(this).css("background-color", "#F2F2F2");
		$(this).css("border", "none");
	});
    $('#c2').hover(function(){
		$(this).css("background-color", "#D8D8D8");
		$(this).css("border", "1px solid #E5E5E5");
    	}, function(){
    	$(this).css("background-color", "#F2F2F2");
		$(this).css("border", "none");
	});
    $('#n1').hover(function(){
		$(this).css("background-color", "#D8D8D8");
		$(this).css("border", "1px solid #E5E5E5");
    	}, function(){
    	$(this).css("background-color", "#F2F2F2");
		$(this).css("border", "none");
	});
    $('#n2').hover(function(){
		$(this).css("background-color", "#D8D8D8");
		$(this).css("border", "1px solid #E5E5E5");
    	}, function(){
    	$(this).css("background-color", "#F2F2F2");
		$(this).css("border", "none");
	});
    /* WORK */
    $(".tip").hover(function(){
        $(this).removeClass("w3-grayscale");
        $(this).removeClass("w3-opacity");

        $(this).css("border", "none");
        },function(){
        $(this).addClass("w3-opacity");
        $(this).addClass("w3-grayscale");
        $(this).css("border", "3px solid #E5E5E5");

    })

});
