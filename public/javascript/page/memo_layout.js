jQuery(function () {
  //add memoItem
  $("#memo_item_add_button, #humburger_menu_memo_item_add_button").click(
    function () {
      selectMemoItem(createNewMemoItem());
    }
  );

  //save button
  $(
    "#memo_save_comannd_button, #hamburger_menu_memo_save_comannd_button"
  ).click(function () {
    closeHumburgerMenu();
    showMemoSaveHamburgerMenu();
  });

  //reset button
  $(
    "#memo_reset_comannd_button, #hamburger_menumemo_reset_comannd_button"
  ).click(function () {
    resetMemoItemList();
  });
});
