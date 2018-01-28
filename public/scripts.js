$(document).ready(() => {
  $("h2").hide();
});

$(".hide-button").click(() => {
  $("h1").hide()
  $("h2").show()
});

$(".show-button").click(() => {
  $("h1").show();
  $("h2").hide();
});
