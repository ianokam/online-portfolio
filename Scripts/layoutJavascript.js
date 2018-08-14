//When document is READY resize GREEN BACKGROUND w/ #body Correctly + change Mathwebsite text orientation
$(document).ready(function() {
    var win = $(this); //this = window
    var size=$( "#body" ).height()+20;
    $("#background").css("height", size + "px");

    if($( window ).width() <= 860){
        $("#mathExtLink").replaceWith( '<p class="paragraphGreen" id="mathExtLink">MATH WEBSITE<br > (EXTERNAL LINK)</p>' );
    }
    else if($( window ).width() > 860){
        $("#mathExtLink").replaceWith( '<p class="paragraphGreen" id="mathExtLink">MATH WEBSITE (EXTERNAL LINK)</p>' );
    }
});
// RESIZE GREEN BACKGROUND w/ #body Correctly  +  change Mathwebsite text orientation  
$(window).on('resize', function(){
    var win = $(this); //this = window
    var size=$( "#body" ).height()+20;
    $("#background").css("height", size + "px");

    if($( window ).width() <= 865){
        $("#mathExtLink").replaceWith( '<p class="paragraphGreen" id="mathExtLink">MATH WEBSITE<br > (EXTERNAL LINK)</p>' );
    }
    else if($( window ).width() > 865){
        $("#mathExtLink").replaceWith( '<p class="paragraphGreen" id="mathExtLink">MATH WEBSITE (EXTERNAL LINK)</p>' );
    }
});

/* ---------- [[[    TABS    ]]] ------------------------*/
function openCode() {
    /* --------------CHANGE CSS STYLE----------------- */
    $("#coding").css("display", "initial");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "none");
    /* --------------CHANGE HTML ATTR----------------- */
    $("#codeTab").attr("class", "activeTab");
    $("#photoTab").attr("class", "unactiveTab");
    $("#illustrationTab").attr("class", "unactiveTab");
    $("#mathWebsiteTab").attr("class", "unactiveTab");
    
    $("#codeTab2").attr("class", "activeTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");
    /* ---------------------------------------------- */
    $("#dropDownTabName").replaceWith( '<li id="dropDownTabName">CODING</li>' );
}

function openPhoto() {
    $("#coding").css("display", "none");
    $("#photo").css("display", "initial");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "none");
    /* ------------------------------------- */
    $("#codeTab").attr("class", "unactiveTab");
    $("#photoTab").attr("class", "activeTab");
    $("#illustrationTab").attr("class", "unactiveTab");
    $("#mathWebsiteTab").attr("class", "unactiveTab");

    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "activeTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");
    /* ------------------------------------- */
    $("#dropDownTabName").replaceWith( '<li id="dropDownTabName">PHOTOGRAPHY</li>' );
}

function openIllustration() {
    $("#coding").css("display", "none");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "initial");
    $("#math-website").css("display", "none");
    /* ------------------------------------- */
    $("#codeTab").attr("class", "unactiveTab");
    $("#photoTab").attr("class", "unactiveTab");
    $("#illustrationTab").attr("class", "activeTab");
    $("#mathWebsiteTab").attr("class", "unactiveTab");

    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "activeTab");
    $("#mathWebsiteTab2").attr("class", "unactiveTab");
    /* ------------------------------------- */
    $("#dropDownTabName").replaceWith( '<li id="dropDownTabName">ILLUSTRATIONS</li>' );
}

function openMathWebsite() {
    $("#coding").css("display", "none");
    $("#photo").css("display", "none");
    $("#illustration").css("display", "none");
    $("#math-website").css("display", "initial");
    /* ------------------------------------- */
    $("#codeTab").attr("class", "unactiveTab");
    $("#photoTab").attr("class", "unactiveTab");
    $("#illustrationTab").attr("class", "unactiveTab");
    $("#mathWebsiteTab").attr("class", "activeTab");

    $("#codeTab2").attr("class", "unactiveTab");
    $("#photoTab2").attr("class", "unactiveTab");
    $("#illustrationTab2").attr("class", "unactiveTab");
    $("#mathWebsiteTab2").attr("class", "activeTab");
    /* ------------------------------------- */
    $("#dropDownTabName").replaceWith( '<li id="dropDownTabName">MATH WEBSITE</li>' );
}

