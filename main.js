$(document).ready(function () {


  // FadeIn Function

  $(".fadeInbtn").click(function () {
    $(".fadIn-1").fadeIn();
    $(".fadIn-2").fadeIn("slow");
    $(".fadIn-3").fadeIn(3000);
  });
  // FadeOut Function

  $(".fadeOutbtn").click(function () {
    $(".fadOut-1").fadeOut();
    $(".fadOut-2").fadeOut("slow");
    $(".fadOut-3").fadeOut(3000);
  });
  // FADE TOGGLE FUNCTION
  $(".fadeTogglebtn").click(function () {
    $(".fadToggle-1").fadeToggle();
    $(".fadToggle-2").fadeToggle("slow");
    $(".fadToggle-3").fadeToggle(3000);
  });
  // FADE TO FUNCTION
  $(".fadeTobtn").click(function () {
    $(".fadTo-1").fadeTo("slow", 0.15);
    $(".fadTo-2").fadeTo("slow", 0.5);
    $(".fadTo-3").fadeTo("slow", 0.8);
  });
  // SLIDE DOWN FUNCTION
  $("#sDown").click(function () {
    $("#sDpanel").slideDown("slow");
  });
  // SLIDE UP FUNCTION
  $("#sUp").click(function () {
    $("#sUpanel").slideUp("slow");
  });
  // SLIDE TOGGLE FUCNTION
  $("#sToggle").click(function () {
    $("#sTpanel").slideToggle("slow");
  });
});