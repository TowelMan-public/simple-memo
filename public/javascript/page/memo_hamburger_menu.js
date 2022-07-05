const humburgerMenuBody = "memo_hamburger_menu_body";
const humburgerMemoItemListOuterId = "humburger_menu_memo_item_list_outer";
const memoItemListOuterId = "memo_item_list_outer";

jQuery(function () {
  $("#hamburger_menu_button").click(function () {
    $("#" + memoItemListId).appendTo("#" + humburgerMemoItemListOuterId);
    resizeHumburgerMemoBody();
    $("#hamburger_menu_close_button").click(function () {
      $("#" + memoItemListId).appendTo("#" + memoItemListOuterId);
    });
  });

  $(window).resize(function () {
    resizeHumburgerMemoBody();
  });
});

function resizeHumburgerMemoBody() {
  $("#" + humburgerMenuBody).outerHeight(700000);
  $("#" + humburgerMenuBody).outerHeight(
    $("#default_hamburger_menu_content").innerHeight()
  );
  $("#" + humburgerMemoItemListOuterId).outerHeight(
    $("#" + humburgerMenuBody).innerHeight() -
      $("#memo_hamburger_menu_comannd_bar").outerHeight()
  );
}
