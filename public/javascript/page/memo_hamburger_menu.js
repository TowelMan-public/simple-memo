const humburgerMenuBody = "memo_hamburger_menu_body";
const humburgerMemoItemListOuterId = "humburger_menu_memo_item_list_outer";
const memoItemListOuterId = "memo_item_list_outer";

jQuery(function () {
  $("#hamburger_menu_button").click(function () {
    $("#" + memoItemListId).appendTo("#" + humburgerMemoItemListOuterId);
    if (resizeHumburgerMemoBody() == -1) {
      let count = 1;
      const timerId = setInterval(function () {
        if (resizeHumburgerMemoBody() != -1 || ++count >= 6) {
          clearInterval(timerId);
        }
      }, 100);
    }
    $("#hamburger_menu_close_button").click(function () {
      $("#" + memoItemListId).appendTo("#" + memoItemListOuterId);
    });
  });

  $(window).resize(function () {
    resizeHumburgerMemoBody();
  });
});

function resizeHumburgerMemoBody() {
  console.log("memo humb");
  $("#" + humburgerMenuBody).outerHeight(700000);
  console.log($("#" + humburgerMenuBody).outerHeight());
  console.log($("#default_hamburger_menu_content").innerHeight());
  if ($("#default_hamburger_menu_content").innerHeight() == 0) {
    return -1;
  } else {
    $("#" + humburgerMenuBody).outerHeight(
      $("#default_hamburger_menu_content").innerHeight()
    );
    console.log(
      $("#" + humburgerMenuBody).innerHeight() -
        $("#memo_hamburger_menu_comannd_bar").outerHeight()
    );
    $("#" + humburgerMemoItemListOuterId).outerHeight(
      $("#" + humburgerMenuBody).innerHeight() -
        $("#memo_hamburger_menu_comannd_bar").outerHeight()
    );
    return 0;
  }
}
