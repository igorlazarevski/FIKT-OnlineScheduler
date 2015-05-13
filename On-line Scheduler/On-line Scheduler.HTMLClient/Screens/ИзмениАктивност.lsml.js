/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ИзмениАктивност.created = function (screen) {
    // Write code here.
    msls.application.activeDataWorkspace.On_line_rasporedData.GetPredmetByID(screen.Aktivnost.Predmet.ID_predmet).execute().then(function (data) {
        screen.Aktivnost.Predmet = data.results[0];
    });

    msls.application.activeDataWorkspace.On_line_rasporedData.GetProfesorByUsername(myapp.CurrentUser.UserName).execute().then(function (data) {
        screen.Aktivnost.Profesor = data.results[0];
    });
};