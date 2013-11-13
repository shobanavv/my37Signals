$(document).ready(function() { 
    // Happy Day message
    $("#happy").val('Happy Sunday');

    $(".navi li a").hover(function(){
        $(this).css('color','#18afe0');
    },function(){
        $(this).css('color','#369');

    });
    $(".navi button").hover(function(){
        $(this).css('color','#369');
    },function(){
        $(this).css('color','#18afe0');

    });
    
    
    $("#bc_hover").hide();
    $("#hr_hover").hide();
    $("#cf_hover").hide();
    $('#bc_arrow').hide();
    $('#hr_arrow').hide();
    $('#cf_arrow').hide();
 
 $("#bc").hover(function(){
    $('#bc_arrow').toggle();
    $("#default").toggle();
    $("#bc_hover").toggle();
    });

 $("#hr").hover(function(){
    $('#hr_arrow').toggle();
    $("#default").toggle();
    $("#hr_hover").toggle();
    });

 $("#cf").hover(function(){
    $('#cf_arrow').toggle();
    $("#default").toggle();
    $("#cf_hover").toggle();
    });
    
});