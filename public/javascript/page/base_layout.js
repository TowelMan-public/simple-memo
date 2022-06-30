jQuery(function () {
  let hamburgerMenuButton = $("#hamburger_menu_button");
  if (hamburgerMenuButton.length) {
    hamburgerMenuButton.click(function () {
      openHumburgerMenu(
        "default_hamburger_menu_content",
        "default_hamburger_menu_content_outer"
      );
    });
  }
});
