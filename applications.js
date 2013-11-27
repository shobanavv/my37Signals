$(document).ready(function() { 
    // Happy Day message
  var day = new Date();
         var weekday=new Array();
         weekday[0]="Sunday";
         weekday[1]="Monday";
         weekday[2]="Tuesday";
         weekday[3]="Wednesday";
         weekday[4]="Thursday";
         weekday[5]="Friday";
         weekday[6]="Saturday";
     $("#happy").push(weekday[day.getDay()]);  

    $(".navi button").hover(function(){
        $(this).css('color','#369');
    },function(){                                               //This part changes button color on hover.
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