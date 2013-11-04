$(document).ready(function() {  

$('#bc').mouseenter(function(){
    $('h1').html("Base Camp is the project mangement tool you wish  your last project");
$('.arrow').show();});

$('#bc').mouseleave(function(){ $('h1').html("Making collaboration productive and enjoyable for people every day.");$('.arrow').hide();});

$('#hr').mouseenter(function(){
    $('h1').html("Highrise remembers the important thing about people normally forget.");
$('.arrow').show();});

$('#hr').mouseleave(function(){ $('h1').html("Making collaboration productive and enjoyable for people every day.");
$('.arrow').hide();});

$('#cf').mouseenter(function(){
    $('h1').html("From near or far, campfire teams work together in real-time.");$('.arrow').show();});

$('#cf').mouseleave(function(){ $('h1').html("Making collaboration productive and enjoyable for people every day.");$('.arrow').hide();});




var key=$('#id').mouseenter();

switch(key){
    case 'bc':
    
        $('h1').html("Base Camp is the project mangement tool you wish you had on your last project");
    
    break;
    case 'hr':

        $('h1').html("Highrise remembers the important thing about people you'd  normally forget.");
    break;
    case 'cf':
    $('h1').html("From near or far, campfire teams work together in real-time.");
    default:
    
        $('h1').html("Making collaboration productive and enjoyable for people every day.");
    }
    });