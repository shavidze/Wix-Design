$(document).ready(function () {
  $(".chat-header-primary").click(function () { $('.chat-header-primary').toggleClass('clicked') })

  $(".chat-close").click(function () {
    $(".live-chat-form").css("display", "none");
  });

  $(".messenger-icon").click(function () {
    $(".live-chat-form").css({ display: "block" });
  });
  $(".menu-toggle").click(function () {
    $("#main-nav").toggleClass('clicked', 2000);
  })
})


