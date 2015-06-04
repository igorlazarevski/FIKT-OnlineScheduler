/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Students.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Students.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Students.ScheduleExam_execute = function (screen) {
    var schedule = new myapp.SpisokPolaganje;
    msls.application.activeDataWorkspace.On_line_rasporedData.Predmets_SingleOrDefault(screen.vw_AktivnostiPerStudent.selectedItem.Id_Predmet)
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


myapp.Students.vw_AktivnostiPerStudent_execute = function (screen) {
    if (screen.vw_AktivnostiPerStudent.selectedItem && !screen.vw_AktivnostiPerStudent.selectedItem.Povtoruvacki) {
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


myapp.Students.created = function (screen) {
    GetCurrentUser();
    if (myapp.CurrentUser && myapp.CurrentUser.UserName) {
        screen.Br_indeks1 = myapp.CurrentUser.UserName;
        screen.Br_indeks = myapp.CurrentUser.UserName;
    }
    else {
        screen.Br_indeks1 = '0';
        screen.Br_indeks = '0';
    }

    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};

myapp.Students.vw_AktivnostiPerStudentTemplate_postRender = function (element, contentItem) {
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
myapp.Students.otkazan_render = function (element, contentItem) {
    // Write code here.
    if(contentItem.value)
    {
        element.innerHTML = '<span class="otkazan">ОТКАЖАН</span>';
    }
};
myapp.Students.vw_AktivnostiPerStudent_ItemTap_execute = function (screen) {
    if (screen.vw_AktivnostiPerStudent.selectedItem && !screen.vw_AktivnostiPerStudent.selectedItem.Povtoruvacki) {
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
myapp.Students.Vreme_pocetok1_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Students.Vreme_kraj1_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");
};
myapp.Students.Shedule_Tap_execute = function (screen) {
    
};