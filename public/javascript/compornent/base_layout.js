function openHumburgerMenu(contentId, contentOuterId) {
  let isHamburgerMenuShowed = $("#is_hamburger_menu_showed");
  if (
    isHamburgerMenuShowed.val() == 0 &&
    $("#is_progress_ring_showed").val() == 0
  ) {
    $("#" + contentId).prependTo("#hamburger_menu_container");
    $("#hamburger_menu_close_button").click(function () {
      closeHumburgerMenu(contentId, contentOuterId);
    });
    $("#hamburger_menu").css("display", "flex");
    isHamburgerMenuShowed.val(1);
  }
}

function closeHumburgerMenu(contentId = null, contentOuterId = null) {
  let hamburgerMenuCloseButton = $("#hamburger_menu_close_button");
  if (contentId !== null && contentOuterId !== null) {
    $("#hamburger_menu").css("display", "");
    $("#" + contentId).prependTo("#" + contentOuterId);
    $("#hamburger_menu_close_button").off("click");
    $("#is_hamburger_menu_showed").val(0);
  } else {
    hamburgerMenuCloseButton.click();
  }
}

function openProgressRing() {
  $("#is_progress_ring_showed").val(1);
  $("#progress_ring_container").css("display", "flex");
}

function closeProgressRing() {
  $("#is_progress_ring_showed").val(0);
  $("#progress_ring_container").css("display", "");
}

function showAjaxErrorHamburgerMenu() {
  closeProgressRing();
  closeHumburgerMenu();
  openHumburgerMenu(
    "ajax_error_hambueger_menu",
    "ajax_error_hambueger_menu_outer"
  );
}
