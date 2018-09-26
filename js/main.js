function setBackToTopButtonRight()
{
    containerRight = ($(window).width() - $(".container").outerWidth()) / 2;
    $("#back-to-top-button").css("right", containerRight - 120);
}

function animateNavbar(threshold)
{
    if ($(window).scrollTop() > threshold)
    {
        $("#nav").addClass("animated");
    }
    else
    {
        $("#nav").removeClass("animated");
    }
}

function showBackToTopButton()
{
    if ($(window).scrollTop() > 20)
    {
        $("#back-to-top-button").fadeIn(800);
    }
    else
    {
        $("#back-to-top-button").fadeOut(800);
    }
}

function scrollWindow(target)
{
    if (target != "#")
    {
        if ($(target).offset().top - 56 > 0)
        {
            $("html, body").animate({scrollTop: $(target).offset().top - 56}, 2000, "easeInOutExpo");
        }
        else
        {
            $("html, body").animate({scrollTop: 0}, 2000, "easeInOutExpo");
        }
    }
}

function convertDate(date)
{
    var sections = date.split("/");
    return sections[0] + " / " + sections[1] + " / " + sections[2];
}

function convertCategory(category)
{
    return category.replace(" ", "-").toLowerCase();
}