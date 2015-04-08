/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Професор.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Професор.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Професор.Group3_postRender = function (element, contentItem) {
    alert("Се покажа список");

};