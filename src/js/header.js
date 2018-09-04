const header = $("header");
const btn = header.find("button");
const nav = header.find("#header");

function scrollStatus (){
    return $(window).scrollTop() < 100;
}

function backgroundBehavior (bool){
    header[bool ? "removeClass" : "addClass"]("expanded");
}

btn.click(() => {
    if (scrollStatus())
        backgroundBehavior(nav.hasClass("show"));
});

btn.blur(() => {
    if (nav.hasClass("show")) 
        btn.click();
});

$(window).scroll(function(){
    if (!nav.hasClass("show"))
        backgroundBehavior(scrollStatus());
    header.find("figure")[!scrollStatus() ? "show" : "hide"]();
});

$(window).scroll();