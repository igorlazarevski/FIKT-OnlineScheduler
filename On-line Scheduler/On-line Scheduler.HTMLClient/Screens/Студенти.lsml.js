/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Студенти.created = function (screen) {
    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};