$(".right").click(function(e) {
    e.preventDefault();
    // Get the width of the main container
    var width = $("#boxes-container").outerWidth();
    // Get the total width of the slider container
    var totalWidth = $(".box-wrap").outerWidth();
    // Get the slide width
    var slideWidth = $(".box-wrap .slide")
        .first()
        .outerWidth();
    // Total of slides
    var numberOfSlides = $(".box-wrap").find(".slide").length;
    // Determine the maximum margin left that we can get
    var maxLeft = slideWidth * (numberOfSlides - 1);
    // Get the current margin-left
    var currentMargin = $(".box-wrap")
        .css("margin-left")
        .replace("px", "");

    // Is the new margin smaller or the same as the maximum margin?
    if (maxLeft >= (currentMargin * 1 - slideWidth) * -1) {
        // Yes? then slide
        $(".box-wrap").animate(
            { "margin-left": currentMargin - slideWidth },
            1000
        );
    }
});

$(".left").click(function(e) {
    e.preventDefault();
    // Get the width of the main container
    var width = $("#boxes-container").outerWidth();
    // Get the total width of the slider container
    var totalWidth = $(".box-wrap").outerWidth();
    // Get the slide width
    var slideWidth = $(".box-wrap .slide")
        .first()
        .outerWidth();
    // Get the current margin-left
    var currentMargin = $(".box-wrap")
        .css("margin-left")
        .replace("px", "");

    // Is the new margin bigger than 0?
    if (0 >= (currentMargin * 1 + slideWidth)) {
        // Yes? Then slide it
        $(".box-wrap").animate(
            { "margin-left": (currentMargin * 1 + slideWidth) },
            1000
        );
    }
});
