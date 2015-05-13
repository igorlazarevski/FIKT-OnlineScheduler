/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Студенти.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Студенти.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Студенти.ScheduleExam_execute = function (screen) {
    var schedule = new myapp.SpisokPolaganje;
    msls.application.activeDataWorkspace.On_line_rasporedData.Predmets_SingleOrDefault(screen.vw_Aktivnostis.selectedItem.Id_Predmet)
    .execute().then(function (odgovor) {
        schedule.Predmet = odgovor.results[0];
        msls.application.activeDataWorkspace.On_line_rasporedData.Students_SingleOrDefault(myapp.CurrentUser.UserName).execute().then(function (rez) {
            schedule.Student = rez.results[0];

            myapp.activeDataWorkspace.On_line_rasporedData.saveChanges().then(function () {
                alert('Регистрацијата е успешна!');
            }, function (e) {
                alert('Регистрацијата не е успешна! Проблем:' + e.message);
            });
        });
    });
};


myapp.Студенти.vw_Aktivnostis_ItemTap_execute = function (screen) {
    if (screen.vw_Aktivnostis.selectedItem && !screen.vw_Aktivnostis.selectedItem.Povtoruvacki) {
        //najdi go elementot
        var elem = screen.findContentItem("ScheduleExam");
        //pokazi go
        elem.isVisible = true;
    }
    else {
        //najdi go elementot
        var elem = screen.findContentItem("ScheduleExam");
        //skrij go
        elem.isVisible = false;
    }
};



myapp.Студенти.vw_AktivnostisTemplate_postRender = function (element, contentItem) {
    if (contentItem.value.Ime == 'Предавања')
        element.parentElement.id = "Predavanje";
    else
        if (contentItem.value.Ime == 'Испит')
            element.parentElement.id = "Ispit";

        else
            if (contentItem.value.Ime == 'Консултации')
                element.parentElement.id = "Konsultacii";

            else
                if (contentItem.value.Ime == 'Колоквиум')
                    element.parentElement.id = "Kolokvium";

                else
                    if (contentItem.value.Ime == 'Вежби')
                        element.parentElement.id = "Vezbi";
};


myapp.Студенти.created = function (screen) {
    GetCurrentUser();
    if (myapp.CurrentUser && myapp.CurrentUser.Semestar)
        screen.BR_Semestar = parseInt(myapp.CurrentUser.Semestar);
    else
        screen.BR_Semestar = 0;

    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};
