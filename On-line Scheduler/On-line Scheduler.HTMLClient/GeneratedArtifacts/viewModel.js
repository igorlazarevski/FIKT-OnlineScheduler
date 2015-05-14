﻿/// <reference path="data.js" />

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

    function Администратор(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Администратор screen.
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
        /// <field name="details" type="msls.application.Администратор.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Администратор", parameters);
    }

    function ДодајАктивност(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ДодајАктивност screen.
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
        /// <field name="details" type="msls.application.ДодајАктивност.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ДодајАктивност", parameters);
    }

    function ДодајПредмет(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ДодајПредмет screen.
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
        /// <field name="details" type="msls.application.ДодајПредмет.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ДодајПредмет", parameters);
    }

    function ДодајПрофесор(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ДодајПрофесор screen.
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
        /// <field name="details" type="msls.application.ДодајПрофесор.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ДодајПрофесор", parameters);
    }

    function ДодајСтудент(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ДодајСтудент screen.
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
        /// <field name="details" type="msls.application.ДодајСтудент.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ДодајСтудент", parameters);
    }

    function ЗапишиПредмет(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ЗапишиПредмет screen.
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
        /// <field name="details" type="msls.application.ЗапишиПредмет.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ЗапишиПредмет", parameters);
    }

    function ИзмениАктивност(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ИзмениАктивност screen.
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
        /// <field name="details" type="msls.application.ИзмениАктивност.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ИзмениАктивност", parameters);
    }

    function ИзмениПредмет(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ИзмениПредмет screen.
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
        /// <field name="details" type="msls.application.ИзмениПредмет.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ИзмениПредмет", parameters);
    }

    function ИзмениПрофесор(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ИзмениПрофесор screen.
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
        /// <field name="details" type="msls.application.ИзмениПрофесор.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ИзмениПрофесор", parameters);
    }

    function ИзмениСтудент(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ИзмениСтудент screen.
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
        /// <field name="details" type="msls.application.ИзмениСтудент.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ИзмениСтудент", parameters);
    }

    function Професор(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Професор screen.
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
        /// <field name="details" type="msls.application.Професор.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Професор", parameters);
    }

    function Распоред(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Распоред screen.
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
        /// <field name="details" type="msls.application.Распоред.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Распоред", parameters);
    }

    function Студенти(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Студенти screen.
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
        /// <field name="Br_indeks" type="String">
        /// Gets or sets the br_indeks for this screen.
        /// </field>
        /// <field name="Predmet" type="String">
        /// Gets or sets the predmet for this screen.
        /// </field>
        /// <field name="ActivitiesByStudent" type="msls.VisualCollection" elementType="msls.application.vw_Aktivnosti">
        /// Gets the activitiesByStudent for this screen.
        /// </field>
        /// <field name="Subjects" type="String">
        /// Gets or sets the subjects for this screen.
        /// </field>
        /// <field name="BR_Semestar1" type="Number">
        /// Gets or sets the bR_Semestar1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Студенти.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Студенти", parameters);
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

        Администратор: $defineScreen(Администратор, [
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

        ДодајАктивност: $defineScreen(ДодајАктивност, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        ДодајПредмет: $defineScreen(ДодајПредмет, [
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

        ДодајПрофесор: $defineScreen(ДодајПрофесор, [
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

        ДодајСтудент: $defineScreen(ДодајСтудент, [
            { name: "Student", kind: "local", type: lightSwitchApplication.Student }
        ], [
        ]),

        ЗапишиПредмет: $defineScreen(ЗапишиПредмет, [
            { name: "Izbrani_predmeti", kind: "local", type: lightSwitchApplication.Izbrani_predmeti }
        ], [
        ]),

        ИзмениАктивност: $defineScreen(ИзмениАктивност, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        ИзмениПредмет: $defineScreen(ИзмениПредмет, [
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

        ИзмениПрофесор: $defineScreen(ИзмениПрофесор, [
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

        ИзмениСтудент: $defineScreen(ИзмениСтудент, [
            { name: "Student", kind: "local", type: lightSwitchApplication.Student }
        ], [
        ]),

        Професор: $defineScreen(Професор, [
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

        Распоред: $defineScreen(Распоред, [
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

        Студенти: $defineScreen(Студенти, [
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
            { name: "Br_indeks", kind: "local", type: String },
            { name: "Predmet", kind: "local", type: String },
            {
                name: "ActivitiesByStudent", kind: "collection", elementType: lightSwitchApplication.vw_Aktivnosti,
                createQuery: function (Subjects, BR_Semestar) {
                    return this.dataWorkspace.On_line_rasporedData.ActivitiesByStudent(Subjects).filter("" + ((BR_Semestar === undefined || BR_Semestar === null) ? "false" : "((BR_Semestar ne null) and (BR_Semestar eq " + $toODataString(BR_Semestar, "Int32?") + "))") + "");
                }
            },
            { name: "Subjects", kind: "local", type: String },
            { name: "BR_Semestar1", kind: "local", type: Number }
        ], [
            { name: "ScheduleExam" },
            { name: "vw_Aktivnostis_ItemTap" },
            { name: "ActivitiesByStudent_ItemTap" }
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

        showАдминистратор: $defineShowScreen(function showАдминистратор(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Администратор screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Администратор", parameters, options);
        }),

        showДодајАктивност: $defineShowScreen(function showДодајАктивност(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ДодајАктивност screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ДодајАктивност", parameters, options);
        }),

        showДодајПредмет: $defineShowScreen(function showДодајПредмет(Predmet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ДодајПредмет screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ДодајПредмет", parameters, options);
        }),

        showДодајПрофесор: $defineShowScreen(function showДодајПрофесор(Profesor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ДодајПрофесор screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ДодајПрофесор", parameters, options);
        }),

        showДодајСтудент: $defineShowScreen(function showДодајСтудент(Student, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ДодајСтудент screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ДодајСтудент", parameters, options);
        }),

        showЗапишиПредмет: $defineShowScreen(function showЗапишиПредмет(Izbrani_predmeti, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ЗапишиПредмет screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ЗапишиПредмет", parameters, options);
        }),

        showИзмениАктивност: $defineShowScreen(function showИзмениАктивност(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ИзмениАктивност screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ИзмениАктивност", parameters, options);
        }),

        showИзмениПредмет: $defineShowScreen(function showИзмениПредмет(Predmet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ИзмениПредмет screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ИзмениПредмет", parameters, options);
        }),

        showИзмениПрофесор: $defineShowScreen(function showИзмениПрофесор(Profesor, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ИзмениПрофесор screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ИзмениПрофесор", parameters, options);
        }),

        showИзмениСтудент: $defineShowScreen(function showИзмениСтудент(Student, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ИзмениСтудент screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ИзмениСтудент", parameters, options);
        }),

        showПрофесор: $defineShowScreen(function showПрофесор(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Професор screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Професор", parameters, options);
        }),

        showРаспоред: $defineShowScreen(function showРаспоред(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Распоред screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Распоред", parameters, options);
        }),

        showСтуденти: $defineShowScreen(function showСтуденти(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Студенти screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Студенти", parameters, options);
        })

    });

}(msls.application));
