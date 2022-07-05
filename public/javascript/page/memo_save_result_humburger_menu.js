jQuery(function () {
  $("#memo_save_result_humburger_menu_yes_button").click(function () {
    closeHumburgerMenu();
  });

  $(window).resize(function () {
    $("#memo_save_result_hamburger_menu_show_url").addClass("none");
    const timerId = setInterval(function () {
      let width = $("#memo_save_result_hamburger_menu").innerWidth();
      $("#memo_save_result_hamburger_menu_show_url")
        .outerWidth($("#memo_save_result_hamburger_menu").innerWidth())
        .removeClass("none");

      console.log(width !== undefined);
      if (width !== undefined) {
        console.log("stop");
        clearInterval(timerId);
      }
      console.log("redo");
    }, 100);
  });
});
