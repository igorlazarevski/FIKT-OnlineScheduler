/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ModifyProfesor.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.ModifyProfesor.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.ModifyProfesor.created = function (screen) {
    // Write code here.

};