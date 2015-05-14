/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Студенти.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Студенти.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Студенти.ScheduleExam_execute = function (screen) {
    var schedule = new myapp.SpisokPolaganje;
    msls.application.activeDataWorkspace.On_line_rasporedData.Predmets_SingleOrDefault(screen.ActivitiesByStudent.selectedItem.Id_Predmet)
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
    //Take all choosen subjects in order to filter teh schedule only for selected/choosen subjects
    msls.application.activeDataWorkspace.On_line_rasporedData.IzbranikPredmetiPoStudent(myapp.CurrentUser.UserName).expand('Predmet').execute().then(function (data) {
        subjects = '';
        data.results.forEach(function (item) {
            debugger;
            subjects += item.Predmet.ID_predmet + ',';
        })
        screen.Subjects = subjects;
    });

    GetCurrentUser();
    //If Current user exists, filter data by Semestar
    if (myapp.CurrentUser && myapp.CurrentUser.Semestar) {
        screen.BR_Semestar1 = parseInt(myapp.CurrentUser.Semestar);
    }
    else
        screen.BR_Semestar1 = 0;

    if (myapp.CurrentUser && myapp.CurrentUser.UserName)
        screen.Br_indeks = myapp.CurrentUser.UserName;

    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};

myapp.Студенти.ActivitiesByStudent_postRender = function (element, contentItem) {
   

};
myapp.Студенти.ActivitiesByStudent_ItemTap_execute = function (screen) {
    if (screen.ActivitiesByStudent.selectedItem && !screen.ActivitiesByStudent.selectedItem.Povtoruvacki) {
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
myapp.Студенти.ActivitiesByStudentTemplate_postRender = function (element, contentItem) {
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