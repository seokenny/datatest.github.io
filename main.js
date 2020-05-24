window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(window).on("load",function(){
    $("body").css({
        overflow: "unset"
    });
    $(".loader").fadeOut("slow");
});

{
    var password = [
        "jUHzEQ9gASAc",
        "4cx7avXLhNXE",
        "2f8T8TRZe3aU",
        "2FqBhXk64sLt"
    ];
    var userInput = "";
    document.querySelector(".form__box").addEventListener("input", function(event){
        console.log(event.target.value);
        userInput = event.target.value;


    });
    document.addEventListener("keydown", function(event){
            
        if(event.keyCode == 13){
            for(var i = 0; i < password.length; i++){
                if(password[i] == userInput){
                    document.querySelector(".twitter__button").classList.remove("hidden");
                    document.querySelector(".form__box").classList.add("hidden");
                    document.querySelector(".form__para").innerHTML = '';
                    document.querySelector(".form__para").classList.add("correct");
                    document.querySelector(".form__box").classList.add("smoothFade");
                    break;
                }
                document.querySelector(".form__para").innerHTML = "Wrong Password";
            }   
        }
    });
    document.querySelector(".down__arrow").addEventListener("click", function(event){
        goTo = $(".features");
        var top = goTo.offset().top;
		top-=0;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
    });

    document.querySelector(".closed").addEventListener("mouseover", function(){
        document.querySelector(".comingsoon").classList.remove("hidden");
    });

    document.querySelector(".closed").addEventListener("mouseout", function(){
        document.querySelector(".comingsoon").classList.add("hidden");
    });

    document.querySelector(".burger__menu").addEventListener("click", function(){
        document.querySelector(".mobile__menu-slide").classList.toggle("slideThrough");
    });

    document.querySelector(".tos").addEventListener("click", function() {
        document.querySelector(".terms").classList.add("showTerms");
    });

    document.querySelector(".okay").addEventListener("click", function() {
        document.querySelector(".terms").classList.remove("showTerms");
    });
}

function reveal() {
    for(let i = 0; i < 4; i++){
        document.querySelector(".fq__" + i).addEventListener("click", function(event){
            // document.querySelector("#fq__" + i + "-para").classList.toggle("hidden");
            document.querySelector("#faq__" + i + "-para").classList.toggle("revealFaq");
        });
    }
}

reveal();

var navArray = ["nav__features", "nav__extras", "nav__faq", "nav__footer"];

var sectionArray = [".features", ".extras", ".faq", ".footer"];

function scrollTo() {
	var clicked;

	var goTo = "";
	clicked = event.target.classList;
	for(var i = 0; i < navArray.length; i++){
		if(clicked[0] == navArray[i]){
			goTo = $(sectionArray[i]);
			console.log(goTo);
		}
	}

	
		var top = goTo.offset().top;
		top-=0;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
}



document.querySelector("nav").addEventListener("click", function(){
	scrollTo();
});

document.querySelector(".mobile__menu").addEventListener("click", function(){
    scrollTo();
    document.querySelector(".mobile__menu-slide").classList.toggle("slideThrough");
});