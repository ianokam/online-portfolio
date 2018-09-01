/*---------------------------------------------------------------------*/
/* ---------- [[[    MENU TOGGLE ON/OFF    ]]] ------------------------*/
var toggleValue=0;

        // un-lock scroll position
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');

        // // lock scroll position, but retain settings for later
        // var 
        // var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that




$( "button" ).click(function() {
    var win = $(this); //this = window
    var size=$( "body" ).height()+30;
    
    toggleValue += 1;
    if(toggleValue>=2){
        toggleValue=0;
    }

    $("#menuBarBlack").css("height", size + "px");

    $( "#menuBarBlack" ).fadeToggle( "slow", "linear" );
/*-------------------------------------------------*/    
    // var i = $( ".p-4" ).css( "top" ); /*Comes out as a string. A number + "px".  (i.e. 70px) */
    // var numberCache = parseInt( i.substr(0, i.length-2) ); /*Holds just the number. BUT IT IS A STRING - be mindful!!! */
    // $(".unactiveTab").append(numberCache);

    $( ".p-4" ).slideToggle( "fast" );

/*-------------------------------------------------*/
    var color = $( "button" ).css( "background-color" ); /*color returnd in RGB*/

    if(color=="rgb(134, 134, 134)"){ /*turn off*/
        $(".button").css('background-color', "rgb(56, 56, 56)")

        // un-lock scroll position
        scrollPosition = html.data('scroll-position');


        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    }
    else if(color== "rgb(56, 56, 56)"){ /*turn on*/
        $(".button").css('background-color', "rgb(134, 134, 134)")

        // lock scroll position, but retain settings for later
        scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];


        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }    
  });
/*------------------------------------------------------*/
  $( ".fadeToggle" ).click(function() {
    var win = $(this); //this = window
    var size=$( "body" ).height()+30;
    $("#menuBarBlack").css("height", size + "px");

    $( "#menuBarBlack" ).fadeToggle( "slow", "linear" );

    /*-------------------------------------------------*/
    $( ".p-4" ).slideToggle( "fast" );

    /*-------------------------------------------------*/
    var color = $( "button" ).css( "background-color" ); /*color returnd in RGB*/

    if(color=="rgb(134, 134, 134)"){ /*turn off*/
        $(".button").css('background-color', "rgb(56, 56, 56)")

        // un-lock scroll position
        scrollPosition = html.data('scroll-position');

        
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    }
    else if(color== "rgb(56, 56, 56)"){ /*turn on*/
        $(".button").css('background-color', "rgb(134, 134, 134)")

        // lock scroll position, but retain settings for later
        scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];


        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }  
    
  });
  

  ///////////////////////////////////////////////////
  // LOCK/UNLOCK SCREEN WHILE RESIZING WINDOW : 
  ///////////////////////////////////////////////////

    $(window).on('resize', function(){

        var color2 = $( "button" ).css( "background-color" );

        if( ($( window ).width() <= 862 ) && color2=="rgb(134, 134, 134)"  ){
            $("#menuBarBlack").css("display","initial");
        
        // // lock scroll position, but retain settings for later
        //(NO NEED TO REPEAT THE WHOLE CODE LIKE ABOVE)          //
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
        }


        if(  (   $( window ).width() > 862 )   ){
            $("#menuBarBlack").css("display","none");
            $(".p-4").css("display","none");
        
            // un-lock scroll position
        scrollPosition = html.data('scroll-position');

        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
        }

    });


/*-------------------------------------------------------*/  
/* ---------- [[[    TABS    ]]] ------------------------*/
function openHome() {
    /* --------------CHANGE CSS STYLE----------------- */
    /*TURN ON/OFF HOME TAB CONTENT/OTHER TAB CONTENT*/
    $("#tabContent").css("display", "none");
    $("#tabHome").css("display", "initial");

    /*--------------------------------------*/
    /*TURN ON/OFF TAB CONTENT*/
    $("#coding").css("display", "none");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "none");

    /* --------------CHANGE HTML ATTR----------------- */
    /*CHANGE TAB ACTIVE/NONACTIVE LOOK*/
    $("#homeTab").attr("class", "nav-item nav-link  active");
    $("#codeTab").attr("class", "nav-item nav-link  unactive");
    $("#photoTab").attr("class", "nav-item nav-link  unactive");
    $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
    $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");
    
    $("#homeTab2").attr("class", "activeTab");
    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");

}

function openCode() {
    /* --------------CHANGE CSS STYLE----------------- */
    $("#tabContent").css("display", "initial");
    $("#tabHome").css("display", "none");

    /*--------------------------------------*/
    $("#coding").css("display", "initial");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "none");
    /* --------------CHANGE HTML ATTR----------------- */
    $("#homeTab").attr("class", "nav-item nav-link  unactive");
    $("#codeTab").attr("class", "nav-item nav-link  active");
    $("#photoTab").attr("class", "nav-item nav-link  unactive");
    $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
    $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");
    
    $("#homeTab2").attr("class", "unactiveTab");
    $("#codeTab2").attr("class", "activeTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");

}

function openPhoto() {
    $("#tabContent").css("display", "initial");
    $("#tabHome").css("display", "none");

    /*--------------------------------------*/
    $("#coding").css("display", "none");
    $("#photo").css("display", "initial");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "none");
    /* ------------------------------------- */
    $("#homeTab").attr("class", "nav-item nav-link  unactive");
    $("#codeTab").attr("class", "nav-item nav-link  unactive");
    $("#photoTab").attr("class", "nav-item nav-link  active");
    $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
    $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");

    $("#homeTab2").attr("class", "unactiveTab");
    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "activeTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");

}

function openIllustration() {
    $("#tabContent").css("display", "initial");
    $("#tabHome").css("display", "none");

    /*--------------------------------------*/
    $("#coding").css("display", "none");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "initial");
    $("#math-website").css("display", "none");
    /* ------------------------------------- */
    $("#homeTab").attr("class", "nav-item nav-link  unactive");
    $("#codeTab").attr("class", "nav-item nav-link  unactive");
    $("#photoTab").attr("class", "nav-item nav-link  unactive");
    $("#illustrationTab").attr("class", "nav-item nav-link  active");
    $("#mathWebsiteTab").attr("class", "nav-item nav-link  unactive");

    $("#homeTab2").attr("class", "unactiveTab");
    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "activeTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");

}

function openMathWebsite() {
    $("#tabContent").css("display", "initial");
    $("#tabHome").css("display", "none");

    /*--------------------------------------*/
    $("#coding").css("display", "none");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "initial");
    /* ------------------------------------- */
    $("#homeTab").attr("class", "nav-item nav-link  unactive");
    $("#codeTab").attr("class", "nav-item nav-link  unactive");
    $("#photoTab").attr("class", "nav-item nav-link  unactive");
    $("#illustrationTab").attr("class", "nav-item nav-link  unactive");
    $("#mathWebsiteTab").attr("class", "nav-item nav-link  active");

    $("#homeTab2").attr("class", "unactiveTab");
    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "activeTab");


}
