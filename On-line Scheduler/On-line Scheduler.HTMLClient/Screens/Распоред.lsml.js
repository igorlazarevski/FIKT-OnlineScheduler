/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.Распоред.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Распоред.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};

myapp.Распоред.ScheduleExam_Tap_execute = function (screen) {
    var schedule = new myapp.SpisokPolaganje;
    msls.application.activeDataWorkspace.On_line_rasporedData.Predmets_SingleOrDefault(screen.vw_Aktivnostis.selectedItem.Id_Predmet)
    .execute().then(function(odgovor){    
        schedule.Predmet = odgovor.results[0];
        msls.application.activeDataWorkspace.On_line_rasporedData.Students_SingleOrDefault('1').execute().then(function (rez) {
            schedule.Student = rez.results[0];

            myapp.activeDataWorkspace.On_line_rasporedData.saveChanges().then(function () {
                alert('Регистрацијата е успешна!');
            }, function (e) {
                alert('Регистрацијата не е успешна! Проблем:'+e.message);
            });
        });
    });
};

myapp.Распоред.vw_AktivnostiList_Tap_execute = function (screen) {
    if(screen.vw_Aktivnostis.selectedItem && !screen.vw_Aktivnostis.selectedItem.Povtoruvacki)
    {
        //najdi go elementot
        var elem = screen.findContentItem("ScheduleExam");
        //pokazi go
        elem.isVisible = true;
    }
    else
    {
        //najdi go elementot
        var elem = screen.findContentItem("ScheduleExam");
        //skrij go
        elem.isVisible = false;
    }
};