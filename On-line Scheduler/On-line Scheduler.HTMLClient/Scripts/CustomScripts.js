function GetCurrentUser() {
    if (myapp.CurrentUser != null)
        return;

    var obj = {}
    $.ajax({
        type: 'get',
        async: false,
        url: '../Web/GetUser.ashx',
        success: function AjaxSuccess(data) {
            try {
                obj = eval("(function(){return " + data + ";})()");;
                myapp.CurrentUser = obj;
            }
            catch (e)
            { alert(e)}
        },
        error: function Error(e) {
            obj = null;
            alert(e);
        }
    });
    return obj;
}

function ApplyPermissionsToMenu(obj) {
    setTimeout(function () { ApplyPermissionsToMenuOnThread(obj); }, 50);
}

function ApplyPermissionsToMenuOnThread(obj) {
    $(obj).hide();
    if (!myapp.CurrentUser)
        myapp.CurrentUser = GetCurrentUser();/*The user can be put in local storage*/

    if (myapp.CurrentUser && myapp.CurrentUser.Role) {
        var list = $(obj).find('li');
        for (var i = 0, len = list.length; i < len; i++) {
            if (list[i].innerText == 'Студент') {
                if (myapp.CurrentUser.Role != "Student")
                    $(list[i]).hide();
            }
            else if (list[i].innerText == 'Распоред') {
                if (myapp.CurrentUser.Role != "Student")
                    $(list[i]).hide();
            }
            else if (list[i].innerText == 'Професор') {
                if (myapp.CurrentUser.Role != "Profesor")
                    $(list[i]).hide();
            }
            else if (list[i].innerText == 'Администратор') {
                if (myapp.CurrentUser.Role != "Administrator")
                    $(list[i]).hide();
            }
        }
    }

    $(obj).show(200);/*this is an overhead but workarround for now*/
}

function ShowDefaultScreen(a,b) {
    setTimeout(function () { 
        GetCurrentUser();
        if (myapp.CurrentUser) {
            if (myapp.CurrentUser.Role == "Student")
                myapp.showStudents();
            else if (myapp.CurrentUser.Role == "Profesor")
                myapp.showProfesors();
            else if (myapp.CurrentUser.Role == "Administrator")
                myapp.showAdministrator();
        }
    }, 500);
}


function GetDateForTheSubject(den)
{
    var monday = getMonday(new Date());
    var newDate = new Date(monday);
    newDate.setDate(monday.getDate() + den);
    return newDate;
}

function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}