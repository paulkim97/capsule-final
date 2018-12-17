$(document).ready(function () {
    $('.t-btn').mouseover(function(){
        $('.tabs').css({"display": "block"});
    });
    $('.btn').mouseover(function(){
        $(".btn").toggleClass("spin1");
        $(".graytop").toggleClass("m-over1");
        $(".graybottom").toggleClass("m-over2");

    });
    $('.btn').mouseout(function(){
        $('.btn').toggleClass("spin2");
        $(".graytop").toggleClass("m-out1");
        $(".graybottom").toggleClass("m-out2");
    });
    $('.btn').click(function(){
        $('.btn').toggleClass("spin3", true);
        $(".graytop").toggleClass("c1", true);
        $(".graybottom").toggleClass("c2", true);
        $(".click1").toggleClass("c3", true);
        $(".click2").toggleClass("c4", true);
        $('.click1').html('<a href="templates/about.html">About</a><br><a href="templates/contactus.html">Contact Us</a><br><a href="templates/privacy.html">Privacy Policy</a><br><a href="templates/terms.html">Terms of Service</a>');
        $('.click2').html("<p>Capsule.li</p>");
        $("p").css({"position": "absolute", "top": "45%", "right": "5%", "font-size": "2vw"});
    });
    

});
        