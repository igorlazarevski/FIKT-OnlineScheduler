/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAktivnost(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAktivnost screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Aktivnost" type="msls.application.Aktivnost">
        /// Gets or sets the aktivnost for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAktivnost.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAktivnost", parameters);
    }

    function Welcome(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Welcome screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Profesor" type="msls.application.Profesor">
        /// Gets or sets the profesor for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Welcome.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Welcome", parameters);
    }

    function Administrator(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Administrator screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Predmets" type="msls.VisualCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this screen.
        /// </field>
        /// <field name="Students" type="msls.VisualCollection" elementType="msls.application.Student">
        /// Gets the students for this screen.
        /// </field>
        /// <field name="Profesors" type="msls.VisualCollection" elementType="msls.application.Profesor">
        /// Gets the profesors for this screen.
        /// </field>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Administrator.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Administrator", parameters);
    }

    function AddActivity(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddActivity screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Aktivnost" type="msls.application.Aktivnost">
        /// Gets or sets the aktivnost for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddActivity.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddActivity", parameters);
    }

    function AddSubject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddSubject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Predmet" type="msls.application.Predmet">
        /// Gets or sets the predmet for this screen.
        /// </field>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddSubject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddSubject", parameters);
    }

    function AddProfesor(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddProfesor screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Profesor" type="msls.application.Profesor">
        /// Gets or sets the profesor for this screen.
        /// </field>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="Predmets" type="msls.VisualCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddProfesor.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddProfesor", parameters);
    }

    function AddStudent(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddStudent screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Student" type="msls.application.Student">
        /// Gets or sets the student for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddStudent.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddStudent", parameters);
    }

    function EnlistSubject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EnlistSubject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Izbrani_predmeti" type="msls.application.Izbrani_predmeti">
        /// Gets or sets the izbrani_predmeti for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EnlistSubject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EnlistSubject", parameters);
    }

    function ModifyActivity(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ModifyActivity screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Aktivnost" type="msls.application.Aktivnost">
        /// Gets or sets the aktivnost for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ModifyActivity.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ModifyActivity", parameters);
    }

    function ModifySubject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ModifySubject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Predmet" type="msls.application.Predmet">
        /// Gets or sets the predmet for this screen.
        /// </field>
        /// <field name="Profesors" type="msls.VisualCollection" elementType="msls.application.Profesor">
        /// Gets the profesors for this screen.
        /// </field>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ModifySubject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ModifySubject", parameters);
    }

    function ModifyProfesor(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ModifyProfesor screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Profesor" type="msls.application.Profesor">
        /// Gets or sets the profesor for this screen.
        /// </field>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="Predmets" type="msls.VisualCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ModifyProfesor.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ModifyProfesor", parameters);
    }

    function ModifyStudent(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ModifyStudent screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Student" type="msls.application.Student">
        /// Gets or sets the student for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ModifyStudent.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ModifyStudent", parameters);
    }

    function Profesors(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Profesors screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Predmets" type="msls.VisualCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this screen.
        /// </field>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="SpisokPolaganjes" type="msls.VisualCollection" elementType="msls.application.SpisokPolaganje">
        /// Gets the spisokPolaganjes for this screen.
        /// </field>
        /// <field name="ID_predmet" type="String">
        /// Gets or sets the iD_predmet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Profesors.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Profesors", parameters);
    }

    function Schedule(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Schedule screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="vw_Aktivnostis" type="msls.VisualCollection" elementType="msls.application.vw_Aktivnosti">
        /// Gets the vw_Aktivnostis for this screen.
        /// </field>
        /// <field name="BR_Semestar" type="Number">
        /// Gets or sets the bR_Semestar for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Schedule.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Schedule", parameters);
    }

    function Students(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Students screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Students" type="msls.VisualCollection" elementType="msls.application.Student">
        /// Gets the students for this screen.
        /// </field>
        /// <field name="Predmets" type="msls.VisualCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this screen.
        /// </field>
        /// <field name="Izbrani_predmetis" type="msls.VisualCollection" elementType="msls.application.Izbrani_predmeti">
        /// Gets the izbrani_predmetis for this screen.
        /// </field>
        /// <field name="vw_Aktivnostis" type="msls.VisualCollection" elementType="msls.application.vw_Aktivnosti">
        /// Gets the vw_Aktivnostis for this screen.
        /// </field>
        /// <field name="BR_Semestar" type="Number">
        /// Gets or sets the bR_Semestar for this screen.
        /// </field>
        /// <field name="Br_indeks" type="String">
        /// Gets or sets the br_indeks for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Students.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Students", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAktivnost: $defineScreen(AddEditAktivnost, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        Welcome: $defineScreen(Welcome, [
            { name: "Profesor", kind: "local", type: lightSwitchApplication.Profesor }
        ], [
        ]),

        Administrator: $defineScreen(Administrator, [
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Predmets.orderBy("Semestar/ID_semestar").expand("Profesor").expand("Semestar");
                }
            },
            {
                name: "Students", kind: "collection", elementType: lightSwitchApplication.Student,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Students.orderBy("Ime").expand("Semestar");
                }
            },
            {
                name: "Profesors", kind: "collection", elementType: lightSwitchApplication.Profesor,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Profesors.orderBy("Ime");
                }
            },
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Aktivnosts.orderBy("Den/ID_Den").expand("Den").expand("Predmet").expand("Profesor").expand("TipNaAktivnost").expand("Prostorija");
                }
            }
        ], [
        ]),

        AddActivity: $defineScreen(AddActivity, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        AddSubject: $defineScreen(AddSubject, [
            { name: "Predmet", kind: "local", type: lightSwitchApplication.Predmet },
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                getNavigationProperty: function () {
                    if (this.owner.Predmet) {
                        return this.owner.Predmet.details.properties.Aktivnosts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddProfesor: $defineScreen(AddProfesor, [
            { name: "Profesor", kind: "local", type: lightSwitchApplication.Profesor },
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                getNavigationProperty: function () {
                    if (this.owner.Profesor) {
                        return this.owner.Profesor.details.properties.Aktivnosts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                getNavigationProperty: function () {
                    if (this.owner.Profesor) {
                        return this.owner.Profesor.details.properties.Predmets;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddStudent: $defineScreen(AddStudent, [
            { name: "Student", kind: "local", type: lightSwitchApplication.Student }
        ], [
        ]),

        EnlistSubject: $defineScreen(EnlistSubject, [
            { name: "Izbrani_predmeti", kind: "local", type: lightSwitchApplication.Izbrani_predmeti }
        ], [
        ]),

        ModifyActivity: $defineScreen(ModifyActivity, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        ModifySubject: $defineScreen(ModifySubject, [
            { name: "Predmet", kind: "local", type: lightSwitchApplication.Predmet },
            {
                name: "Profesors", kind: "collection", elementType: lightSwitchApplication.Profesor,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Profesors;
                }
            },
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                getNavigationProperty: function () {
                    if (this.owner.Profesors.selectedItem) {
                        return this.owner.Profesors.selectedItem.details.properties.Aktivnosts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        ModifyProfesor: $defineScreen(ModifyProfesor, [
            { name: "Profesor", kind: "local", type: lightSwitchApplication.Profesor },
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                getNavigationProperty: function () {
                    if (this.owner.Profesor) {
                        return this.owner.Profesor.details.properties.Aktivnosts;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("TipNaAktivnost");
                }
            },
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                getNavigationProperty: function () {
                    if (this.owner.Profesor) {
                        return this.owner.Profesor.details.properties.Predmets;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        ModifyStudent: $defineScreen(ModifyStudent, [
            { name: "Student", kind: "local", type: lightSwitchApplication.Student }
        ], [
        ]),

        Profesors: $defineScreen(Profesors, [
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Predmets.filter("(ActivePredmet ne null) and (ActivePredmet eq true)").expand("Semestar").expand("StatusPredmet");
                }
            },
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Aktivnosts.orderBy("Den/ID_Den").expand("Den").expand("Predmet").expand("Prostorija").expand("TipNaAktivnost");
                }
            },
            {
                name: "SpisokPolaganjes", kind: "collection", elementType: lightSwitchApplication.SpisokPolaganje,
                createQuery: function (ID_predmet) {
                    return this.dataWorkspace.On_line_rasporedData.SpisokPolaganjes.filter("" + ((ID_predmet === undefined || ID_predmet === null) ? "false" : "(Predmet/ID_predmet eq " + $toODataString(ID_predmet, "String?") + ")") + "").expand("Predmet").expand("Student").expand("Student.Nasoka1");
                }
            },
            { name: "ID_predmet", kind: "local", type: String }
        ], [
            { name: "Predmets_ItemTap" },
            { name: "Predmets_ItemTap1" },
            { name: "Predmets_ItemTap2" },
            { name: "ShowAtendees" },
            { name: "ShowAtendees_Tap" },
            { name: "CancelActivity" },
            { name: "CancelActivity_Tap" },
            { name: "Aktivnosts_ItemTap" }
        ]),

        Schedule: $defineScreen(Schedule, [
            {
                name: "vw_Aktivnostis", kind: "collection", elementType: lightSwitchApplication.vw_Aktivnosti,
                createQuery: function (BR_Semestar) {
                    return this.dataWorkspace.On_line_rasporedData.vw_Aktivnostis.filter("" + ((BR_Semestar === undefined || BR_Semestar === null) ? "false" : "((BR_Semestar ne null) and (BR_Semestar eq " + $toODataString(BR_Semestar, "Int32?") + "))") + "").orderBy("ID_Den");
                }
            },
            { name: "BR_Semestar", kind: "local", type: Number }
        ], [
            { name: "ShowAddEditActivity_Tap" },
            { name: "ScheduleExam" },
            { name: "ScheduleExam_Tap" },
            { name: "vw_AktivnostiList_Tap" }
        ]),

        Students: $defineScreen(Students, [
            {
                name: "Students", kind: "collection", elementType: lightSwitchApplication.Student,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Students;
                }
            },
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Predmets;
                }
            },
            {
                name: "Izbrani_predmetis", kind: "collection", elementType: lightSwitchApplication.Izbrani_predmeti,
                createQuery: function (Br_indeks) {
                    return this.dataWorkspace.On_line_rasporedData.Izbrani_predmetis.filter("" + ((Br_indeks === undefined || Br_indeks === null) ? "false" : "(Student/Br_indeks eq " + $toODataString(Br_indeks, "String?") + ")") + "").expand("Student").expand("Student.Semestar").expand("Predmet").expand("Predmet.Profesor").expand("Predmet.Semestar").expand("Predmet.StatusPredmet").expand("Predmet.Nasoka1");
                }
            },
            {
                name: "vw_Aktivnostis", kind: "collection", elementType: lightSwitchApplication.vw_Aktivnosti,
                createQuery: function (BR_Semestar) {
                    return this.dataWorkspace.On_line_rasporedData.vw_Aktivnostis.filter("" + ((BR_Semestar === undefined || BR_Semestar === null) ? "false" : "((BR_Semestar ne null) and (BR_Semestar eq " + $toODataString(BR_Semestar, "Int32?") + "))") + "").orderBy("ID_Den").thenBy("Vreme_pocetok");
                }
            },
            { name: "BR_Semestar", kind: "local", type: Number },
            { name: "Br_indeks", kind: "local", type: String }
        ], [
            { name: "ScheduleExam" },
            { name: "vw_Aktivnostis_ItemTap" }
        ]),

        showAddEditAktivnost: $defineShowScreen(function showAddEditAktivnost(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAktivnost screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAktivnost", parameters, options);
        }),

        showWelcome: $defineShowScreen(function showWelcome(Profesor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the Welcome screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("Welcome", parameters, options);
        }),

        showAdministrator: $defineShowScreen(function showAdministrator(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Administrator screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Administrator", parameters, options);
        }),

        showAddActivity: $defineShowScreen(function showAddActivity(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddActivity screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddActivity", parameters, options);
        }),

        showAddSubject: $defineShowScreen(function showAddSubject(Predmet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddSubject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddSubject", parameters, options);
        }),

        showAddProfesor: $defineShowScreen(function showAddProfesor(Profesor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddProfesor screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddProfesor", parameters, options);
        }),

        showAddStudent: $defineShowScreen(function showAddStudent(Student, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddStudent screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddStudent", parameters, options);
        }),

        showEnlistSubject: $defineShowScreen(function showEnlistSubject(Izbrani_predmeti, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EnlistSubject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EnlistSubject", parameters, options);
        }),

        showModifyActivity: $defineShowScreen(function showModifyActivity(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ModifyActivity screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ModifyActivity", parameters, options);
        }),

        showModifySubject: $defineShowScreen(function showModifySubject(Predmet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ModifySubject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ModifySubject", parameters, options);
        }),

        showModifyProfesor: $defineShowScreen(function showModifyProfesor(Profesor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ModifyProfesor screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ModifyProfesor", parameters, options);
        }),

        showModifyStudent: $defineShowScreen(function showModifyStudent(Student, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ModifyStudent screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ModifyStudent", parameters, options);
        }),

        showProfesors: $defineShowScreen(function showProfesors(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Profesors screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Profesors", parameters, options);
        }),

        showSchedule: $defineShowScreen(function showSchedule(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Schedule screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Schedule", parameters, options);
        }),

        showStudents: $defineShowScreen(function showStudents(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Students screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Students", parameters, options);
        })

    });

}(msls.application));
