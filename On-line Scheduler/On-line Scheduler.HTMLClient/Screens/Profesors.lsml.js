/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Profesors.Vreme_pocetok_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Profesors.Vreme_kraj_postRender = function (element, contentItem) {
    element.innerHTML = contentItem.value.format("HH:mm");

};
myapp.Profesors.Список_postRender = function (element, contentItem) {
};
myapp.Profesors.Predmets_ItemTap_execute = function (screen) {
    screen.findContentItem('ShowAtendees').isVisible = true;
    screen.ID_predmet = screen.Predmets.selectedItem.ID_predmet;
    
    //screen.showTab('Список');
    //screen.showPopup('PopUpSpisok');
};
myapp.Profesors.ShowAtendees_Tap_execute = function (screen) {
    screen.showPopup('PopUpSpisok');
};
myapp.Profesors.CancelActivity_Tap_execute = function (screen) {
    //Ovde kod za otkazuvawe na prisustvo
    var selected = screen.Aktivnosts.selectedItem;
    myapp.showAddEditAktivnost(null, {
        afterClosed: function (AddEditAktivnost, navigationAction) {
            if (navigationAction == msls.NavigateBackAction.commit) {
                return myapp.applyChanges().then(
                   function success() {
                       //Poraka za uspesno snimanje i ako treba refresh na stranata
                       alert('Активноста е успешно откажана');
                   },
                   function fail(e) {
                       msls.showMessageBox(e.message, { title: e.title }).then(function () {
                           // Discard Changes
                           screen.details.dataWorkspace.PETData
                               .details.discardChanges();
                       });
                   });
            }
        },
        beforeShown: function (AddEditAktivnostScreen) {
            var newActivity = new myapp.Aktivnost();
            var pocetok = selected.Vreme_pocetok;
            var currentDate = GetDateForTheSubject(selected.Den.ID_Den - 1);
            pocetok.setMonth(currentDate.getMonth());
            pocetok.setDate(currentDate.getDay());
            pocetok.setYear(currentDate.getFullYear());
            pocetok.setTime(selected.Vreme_pocetok.getTime());
            newActivity.setVreme_pocetok(pocetok);

            var kraj = selected.Vreme_kraj;
            kraj.setMonth(currentDate.getMonth());
            kraj.setDate(currentDate.getDay());
            kraj.setYear(currentDate.getFullYear());
            kraj.setTime(selected.Vreme_kraj.getTime());
            newActivity.setVreme_kraj(kraj);

            newActivity.setOtkazan(true);
            newActivity.setDen(selected.Den);
            newActivity.setPredmet(selected.Predmet);
            newActivity.setProfesor(selected.Profesor);
            newActivity.setProstorija(selected.Prostorija);
            newActivity.setTipNaAktivnost(selected.TipNaAktivnost);
            //napolni ja novata aktivnost so parametri potrebni
            // Za vreme pocetok i kraj dadi go vremeto od aktivnosta za predmetot i dadi mu na korisnikot da moze da ja smeni samo datata a ne i vremeto,
            //dokolku e ne povtoruvacki, nema da moze ni datumot da go smeni tuku samo da go otkaze
            AddEditAktivnostScreen.Aktivnost = newActivity;
        }
    }
    )
};
myapp.Profesors.Aktivnosts_ItemTap_execute = function (screen) {
    screen.findContentItem('CancelActivity').isVisible = true;
};
myapp.Profesors.created = function (screen) {
    GetCurrentUser();
    if (myapp.CurrentUser && myapp.CurrentUser.UserName) {
        screen.Korisnicko_ime1 = myapp.CurrentUser.UserName;
        screen.Korisnicko_ime = myapp.CurrentUser.UserName;
    }

    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id == 'msls-navmenu') {
            ApplyPermissionsToMenu(e.target);
        }
    }, false);
};
myapp.Profesors.Aktivnosts_ItemTap1_execute = function (screen) {
    screen.findContentItem('CancelActivity').isVisible = true;
};
myapp.Profesors.Otkazan_render = function (element, contentItem) {
    if (contentItem.value) {
        element.innerHTML = '<span class="otkazan">ОТКАЖАН</span>';
    }
};