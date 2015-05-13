/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ЗапишиПредмет.beforeApplyChanges = function (screen) {
    brKrediti += screen.Izbrani_predmeti.Predmet.br_krediti;

    if (brKrediti > 36) {
        msls.showMessageBox("Избраните предмети ја надминуваат вкупната граница од 36 кредити");
        return false;
    } else if ($.inArray(screen.Izbrani_predmeti.Predmet.ID_predmet, listaNaIzbraniPredmeti) != -1) {
        msls.showMessageBox("Предметот веќе е избран");
        return false;
    }
};
myapp.ЗапишиПредмет.created = function (screen) {
    // Write code here.
    msls.application.activeDataWorkspace.On_line_rasporedData.Students_SingleOrDefault(myapp.CurrentUser.UserName).execute().then(function (data) {
        screen.Izbrani_predmeti.Student = data.results[0];
    });

    msls.application.activeDataWorkspace.On_line_rasporedData.IzbranikPredmetiPoStudent(myapp.CurrentUser.UserName).expand('Predmet').execute().then(function (data) {
        brKrediti = 0;
        listaNaIzbraniPredmeti = new Array();
        var listaPredmeti = data.results;
        if (listaPredmeti) {
            if (listaPredmeti.length > 0) {
                for (var i = 0, count = listaPredmeti.length; i < count; i++) {
                    brKrediti += listaPredmeti[i].Predmet.br_krediti;
                    listaNaIzbraniPredmeti.push(listaPredmeti[i].Predmet.ID_predmet);
                }
            }
        }
    });
};