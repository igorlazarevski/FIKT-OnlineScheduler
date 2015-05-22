/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddActivity.created = function (screen) {

    selectedPredmet = null;

    msls.application.activeDataWorkspace.On_line_rasporedData.GetProfesorByUsername(myapp.CurrentUser.UserName).execute().then(function (data) {
        screen.Aktivnost.Profesor = data.results[0];
    });
};
var selectedPredmet;
myapp.AddActivity.Predmet_render = function (element, contentItem) {
    GetCurrentUser();
    element.id = "selectPredmet";
    myapp.activeDataWorkspace.On_line_rasporedData.GetPredmetsByProfesor(myapp.CurrentUser.UserName).execute().then(function (result) {
        var dd = '<div class="msls-column msls-presenter msls-ctl-details-modal-picker msls-vauto msls-hstretch msls-leaf"><div class="msls-label msls-label-align-top msls-clear msls-vauto"><label for="ec1c3b655-departmentIsActive" class="ui-select">Предмет</label></div>';
        dd += '<div class="msls-clear msls-presenter-content msls-font-style-normal msls-vauto"><div class="ui-select">';
        dd += '<div class="ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-icon-right ui-btn-up-a" style="min-height:30px">';
        dd += '<span class="ui-btn-inner">';
        dd += '<span class="ui-btn-text">';
        dd += '<span class="id-element" id="DropDownText"></span></span><span class="ui-icon ui-icon-arrow-d ui-icon-shadow">&nbsp;</span></span>';
        dd += '<select id="cboxPredmet" onchange="setDDValue(this,\'Predmet\',\'DropDownText\');" class="id-element">';
        dd += '<option selected value="" tag=""></option>';

        for (var i = 0, coun = result.results.length; i < coun; i++) {
            dd += '<option value="' + result.results[i].ID_predmet + '" tag="' + result.results[i].Ime + '">' + result.results[i].Ime + '</option>';
        }
        dd += '</select></div></div></div></div>';

        $('#selectPredmet').append(dd);
    });
};

function setDDValue(obj, selector, textObj) {/*Set value in the drop down*/
    if (selector == "Predmet") {
        if (obj[obj.selectedIndex].value != '') {
            myapp.activeDataWorkspace.On_line_rasporedData.GetPredmetByID(obj[obj.selectedIndex].value).execute()
                .then(function (result) {
                    if (result.results && result.results.length > 0) {
                        selectedPredmet = result.results[0];
                        document.getElementById(textObj).innerHTML = selectedPredmet.Ime;
                    }
                })
        }
        else
            document.getElementById(textObj).innerHTML = '';
    }
}

myapp.AddActivity.beforeApplyChanges = function (screen) {
    if (selectedPredmet != null)
        screen.Aktivnost.Predmet = selectedPredmet;
};