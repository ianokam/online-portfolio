/*---------------------------------------------------------------------*/
/* ---------- [[[    MENU TOGGLE ON/OFF    ]]] ------------------------*/

$( "button" ).click(function() {
    var win = $(this); //this = window
    var size=$( "body" ).height();
    $("#menuBarBlack").css("height", size + "px");


    $( "#menuBarBlack" ).fadeToggle( "slow", "linear" );
    $( ".pos-f-t" ).fadeToggle( "slow", "linear" );
  });
/*------------------------------------------------------*/
  $( ".fadeToggle" ).click(function() {
    var win = $(this); //this = window
    var size=$( "body" ).height();
    $("#menuBarBlack").css("height", size + "px");


    $( "#menuBarBlack" ).fadeToggle( "slow", "linear" );
    $( ".pos-f-t" ).fadeToggle( "slow", "linear" );
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
