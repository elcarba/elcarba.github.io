$(document).ready(function(){
    var currentSection = "";
    var goToSection = "";
    var sectionUrl = window.location.hash.substr(1);
    var menu = ['home', 'resume', 'skills', 'portfolio', 'contact', 'extra'];
    
    $(".link-section").on("click", function(e){
//        e.preventDefault();        
        
        currentSection = $(".menu-active").attr("href");
        goToSection = $(this).attr('href');
        if(goToSection === '#home'){
            hideSection(currentSection);   
        }else{
            showSection(goToSection);
        }
        
        setOnMenu(this);
        
    })
    
    if(sectionUrl !== "home" && goToSection === ""){
        //Check just values in the menu
        if(menu.includes(sectionUrl)){
        showSection("#"+sectionUrl);

        var el = $("a[href='#"+sectionUrl+"']");
        setOnMenu(el);            
        }
    }
    
});

function setOnMenu(element){
    $(".menu-active").removeClass("menu-active");
    $(element).addClass("menu-active");
}

function showSection(goToSection){
    $('#home').addClass('section-side');
    $(".mark-book").addClass('show-mark');
    $(goToSection).removeClass("section");
    $(".section-active").removeClass("section-active");
    $(goToSection).addClass("section-active");
    $(goToSection).addClass("section-right-side");
}

function hideSection(currentSection){
    $(".mark-book").removeClass('show-mark');
    $('#home').removeClass('section-side');
    $(".section-active").removeClass("section-active");
    $(".section-right-side").removeClass("section-right-side");
    
    //Cleaning
    $("#skills").addClass("section");
    $("#resume").addClass("section");
    $("#portfolio").addClass("section");
    $("#contact").addClass("section");
    $("#extra").addClass("section");
}