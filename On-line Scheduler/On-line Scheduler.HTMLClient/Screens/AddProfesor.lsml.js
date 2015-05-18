/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddProfesor.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.AddProfesor.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.AddProfesor.created = function (screen) {
    // Write code here.

};