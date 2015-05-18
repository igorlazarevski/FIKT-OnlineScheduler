/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddActivity.created = function (screen) {
    msls.application.activeDataWorkspace.On_line_rasporedData.GetProfesorByUsername(myapp.CurrentUser.UserName).execute().then(function (data) {
        screen.Aktivnost.Profesor = data.results[0];
    });
};