jQuery(function () {
  console.log(getParam("id"));
  openProgressRing();
  jQuery
    .ajax({
      url: "/api/load",
      type: "post",
      data: { id: getParam("id") },
    })
    .done((body, textStatus, jqXHR) => {
      let memoListJson = body["body"];
      JSON.parse(memoListJson).forEach((object) => {
        createNewMemoItem(object.title, object.context);
      });
      selectMemoItem();
      closeProgressRing();
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      closeProgressRing();
      showAjaxErrorHamburgerMenu();
      if (jqXHR.status == 404) {
        confirm("そのURLは、すでに保存期間が過ぎているか、無効です。");
      }
      createNewMemoItem();
      selectMemoItem();
    });
});

function getParam(name) {
  let url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
