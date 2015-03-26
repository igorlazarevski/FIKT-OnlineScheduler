/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewAktivnost.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Aktivnost.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Aktivnost." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

