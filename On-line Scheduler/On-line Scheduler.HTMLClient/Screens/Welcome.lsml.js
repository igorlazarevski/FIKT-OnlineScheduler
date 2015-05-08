/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Welcome.created = function (screen) {
    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};
myapp.Welcome.ScreenContent_render = function (element, contentItem) {
    // Write code here.
    element.innerHTML = "<span class=\"Welcome\">Добродојдовте во апликацуијата за <b>On-line</b> распоред</span>";
};