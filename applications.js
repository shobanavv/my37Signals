
$(document).ready(function() {  

    //Default h1 text
    var defaultHeader = "Making collaboration productive and enjoyable for people every day.";
    var defaultdescription="Frustration-free web-based apps for collaboration, sharing information, and making decisions."
    //var bc=$('#bc').attr("href","http://basecamp.com/?source=37signals+home");

    //Change h1 to Basecampp header
    $('#bc').mouseenter(function(){
        $('h1').html("<span text-decoration:underline; color:#336699;>BaseCamp</span>is the project mangement tool you wish  your last project");
        $('#main_descrip').html("Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
        $('#bc_arrow').show();
    });

    //Change h1 to Highrise header
    $('#hr').mouseenter(function(){
        $('h1').html("Highrise remembers the important thing about people normally forget.");
        $('#main_descrip').html("Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.");
        $('#hr_arrow').show();
    });

    //Change h2 to campfire text
    $('#cf').mouseenter(function(){
        $('h1').html("From near or far, campfire teams work together in real-time.");
        $('#main_descrip').html("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire.");
        $('#cf_arrow').show();
    });

    //Change h1 back to default header
    $('.logo_img').mouseleave(function(){ 
        $('h1').html(defaultHeader);
        $('#main_descrip').html(defaultdescription);
        $('.arrow').hide();
    });

});
