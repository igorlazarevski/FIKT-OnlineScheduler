/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Administrator.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Administrator.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Administrator.created = function (screen) {
};
myapp.Administrator.created = function (screen) {
    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
    // Write code here.

};