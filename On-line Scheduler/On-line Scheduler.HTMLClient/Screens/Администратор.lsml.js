﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Администратор.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Администратор.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Администратор.created = function (screen) {
    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};