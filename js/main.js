$(document).ready(function(){
    console.log("ready")

//    var mainbottom = $('header').offset().top + $('header').height();
    
    var vh = $(window).height();
//    $('#home').addClass('active');
    // on scroll, 
    $(window).on('scroll',function(){
//        console.log(mainbottom);
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        console.log("stop"+stop)
            
        if (stop >= 0 && stop < vh) {
            document.title = "Intro";
            console.log("first");
//            $('#title').css('background-color','red');  
            $('#intro:after').addClass('active');
            $('#works:after').removeClass('active');
            $('#contact:after').removeClass('active');
        } else if (stop > vh && stop < vh*2) {
            document.title = "Works";
            console.log("sec")
//            $('#title').css('background-color','green');  
            $('#intro:after').removeClass('active');
            $('#works:after').addClass('active');
            $('#contact:after').removeClass('active');
        } else if (stop > 850) {
            document.title = "Contact";
            console.log("third")
//            $('#title').css('background-color','blue');  
            $('#home:after').removeClass('active');
            $('#works:after').removeClass('active');
            $('#contact:after').addClass('active');
        }

    });
    
    
//    SMOOTH SCROLLING START //
    
    $('#intro').on('click', function(evt){
        evt.preventDefault();
//        console.log('button id'+evt.currentTarget.id)
        $("html body").animate({
            scrollTop:  ($('#first-div-bg').offset().top)
        }, 1500)
        
    })
    
    $('#works').on('click', function(evt){
        evt.preventDefault();
//        console.log('button id'+evt.currentTarget.id)
        $("html body").animate({
            scrollTop:  ($('#second-div-bg').offset().top)
        }, 1500)
        
    })
    
    $('#down').on('click', function(evt){
        evt.preventDefault();
//        console.log('button id'+evt.currentTarget.id)
        $("html body").animate({
            scrollTop:  ($('#second-div-bg').offset().top)
        }, 1500)
        
    })
    
    $('#contact').on('click', function(evt){
        evt.preventDefault();
//        console.log('button id'+evt.currentTarget.id)
        $("html body").animate({
            scrollTop:  ($('#third-div-bg').offset().top)
        }, 1500)
        
    })
    
    
//     SMOOTH SCROLLING END //

    
    });