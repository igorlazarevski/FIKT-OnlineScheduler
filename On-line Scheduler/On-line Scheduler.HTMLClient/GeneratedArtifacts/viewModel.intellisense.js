/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAktivnost.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAktivnost
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.AddEditAktivnost,
            value: lightSwitchApplication.AddEditAktivnost
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.AddEditAktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Otkazan: {
            _$class: msls.ContentItem,
            _$name: "Otkazan",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAktivnost,
            data: lightSwitchApplication.Aktivnost,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAktivnost
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAktivnost, {
        /// <field>
        /// Called when a new AddEditAktivnost screen is created.
        /// <br/>created(msls.application.AddEditAktivnost screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAktivnost],
        /// <field>
        /// Called before changes on an active AddEditAktivnost screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAktivnost screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAktivnost],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("left"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("right"); }],
        /// <field>
        /// Called after the Otkazan content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Otkazan_postRender: [$element, function () { return new lightSwitchApplication.AddEditAktivnost().findContentItem("Otkazan"); }]
    });

    lightSwitchApplication.Welcome.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Welcome
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Welcome,
            data: lightSwitchApplication.Welcome,
            value: lightSwitchApplication.Welcome
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Welcome,
            data: lightSwitchApplication.Welcome,
            value: lightSwitchApplication.Welcome
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Welcome
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Welcome, {
        /// <field>
        /// Called when a new Welcome screen is created.
        /// <br/>created(msls.application.Welcome screen)
        /// </field>
        created: [lightSwitchApplication.Welcome],
        /// <field>
        /// Called before changes on an active Welcome screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Welcome screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Welcome],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Welcome().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.Welcome().findContentItem("ScreenContent"); }]
    });

    lightSwitchApplication.Administrator.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Administrator
        },
        PredmetList: {
            _$class: msls.ContentItem,
            _$name: "PredmetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: lightSwitchApplication.Administrator
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "PredmetList",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Administrator,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "rows",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "rows",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: lightSwitchApplication.Administrator
        },
        Students: {
            _$class: msls.ContentItem,
            _$name: "Students",
            _$parentName: "Group",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Administrator,
                _$entry: {
                    elementType: lightSwitchApplication.Student
                }
            }
        },
        StudentsTemplate: {
            _$class: msls.ContentItem,
            _$name: "StudentsTemplate",
            _$parentName: "Students",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime1: {
            _$class: msls.ContentItem,
            _$name: "Prezime1",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: String
        },
        Semestar2: {
            _$class: msls.ContentItem,
            _$name: "Semestar2",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: lightSwitchApplication.Administrator
        },
        Profesors: {
            _$class: msls.ContentItem,
            _$name: "Profesors",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Administrator,
                _$entry: {
                    elementType: lightSwitchApplication.Profesor
                }
            }
        },
        ProfesorsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProfesorsTemplate",
            _$parentName: "Profesors",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Br_kabinet1: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime1: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka2: {
            _$class: msls.ContentItem,
            _$name: "Lozinka2",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Ime4: {
            _$class: msls.ContentItem,
            _$name: "Ime4",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime3: {
            _$class: msls.ContentItem,
            _$name: "Prezime3",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Titula1: {
            _$class: msls.ContentItem,
            _$name: "Titula1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email2: {
            _$class: msls.ContentItem,
            _$name: "Email2",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon1: {
            _$class: msls.ContentItem,
            _$name: "Telefon1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor1: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: lightSwitchApplication.Administrator
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Administrator,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Administrator,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        AktivnostsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AktivnostsTemplate",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        Ime3: {
            _$class: msls.ContentItem,
            _$name: "Ime3",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor1: {
            _$class: msls.ContentItem,
            _$name: "Profesor1",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        Ime5: {
            _$class: msls.ContentItem,
            _$name: "Ime5",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime2: {
            _$class: msls.ContentItem,
            _$name: "Prezime2",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Administrator,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Administrator
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Administrator, {
        /// <field>
        /// Called when a new Administrator screen is created.
        /// <br/>created(msls.application.Administrator screen)
        /// </field>
        created: [lightSwitchApplication.Administrator],
        /// <field>
        /// Called before changes on an active Administrator screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Administrator screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Administrator],
        /// <field>
        /// Called after the PredmetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PredmetList_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("PredmetList"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("rows"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Group"); }],
        /// <field>
        /// Called after the Students content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Students_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Students"); }],
        /// <field>
        /// Called after the StudentsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StudentsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("StudentsTemplate"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Prezime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Prezime1"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Email"); }],
        /// <field>
        /// Called after the Semestar2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar2_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Semestar2"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("ActiveStudent"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Profesors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesors_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Profesors"); }],
        /// <field>
        /// Called after the ProfesorsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfesorsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("ProfesorsTemplate"); }],
        /// <field>
        /// Called after the Br_kabinet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Br_kabinet1"); }],
        /// <field>
        /// Called after the Korisnicko_ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Korisnicko_ime1"); }],
        /// <field>
        /// Called after the Lozinka2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka2_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Lozinka2"); }],
        /// <field>
        /// Called after the Ime4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime4_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Ime4"); }],
        /// <field>
        /// Called after the Prezime3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime3_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Prezime3"); }],
        /// <field>
        /// Called after the Titula1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Titula1"); }],
        /// <field>
        /// Called after the Email2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email2_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Email2"); }],
        /// <field>
        /// Called after the Telefon1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Telefon1"); }],
        /// <field>
        /// Called after the ActiveProfesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("ActiveProfesor1"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the AktivnostsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AktivnostsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("AktivnostsTemplate"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Den"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the Ime3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime3_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Ime3"); }],
        /// <field>
        /// Called after the Profesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor1_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Profesor1"); }],
        /// <field>
        /// Called after the Ime5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime5_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Ime5"); }],
        /// <field>
        /// Called after the Prezime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime2_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Prezime2"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.Administrator().findContentItem("Vreme_kraj"); }]
    });

    lightSwitchApplication.AddActivity.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddActivity
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.AddActivity,
            value: lightSwitchApplication.AddActivity
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.AddActivity,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Predmet1: {
            _$class: msls.ContentItem,
            _$name: "Predmet1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "Predmet1",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "left",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "left",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "Den",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Den,
            value: lightSwitchApplication.Den
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "left",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Prostorija",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Prostorija,
            value: lightSwitchApplication.Prostorija
        },
        Otkazan: {
            _$class: msls.ContentItem,
            _$name: "Otkazan",
            _$parentName: "left",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "right",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "TipNaAktivnost",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.TipNaAktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "right",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "right",
            screen: lightSwitchApplication.AddActivity,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddActivity
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddActivity, {
        /// <field>
        /// Called when a new AddActivity screen is created.
        /// <br/>created(msls.application.AddActivity screen)
        /// </field>
        created: [lightSwitchApplication.AddActivity],
        /// <field>
        /// Called before changes on an active AddActivity screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddActivity screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddActivity],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("left"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Predmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet1_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Predmet1"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Den"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Otkazan content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Otkazan_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Otkazan"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("right"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.AddActivity().findContentItem("Vreme_kraj"); }]
    });

    lightSwitchApplication.AddSubject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddSubject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.AddSubject,
            value: lightSwitchApplication.AddSubject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.AddSubject,
            value: lightSwitchApplication.Predmet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        br_krediti: {
            _$class: msls.ContentItem,
            _$name: "br_krediti",
            _$parentName: "left",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: Number
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        StatusPredmet: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet",
            _$parentName: "right",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.StatusPredmet
        },
        StatusPredmet1: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet1",
            _$parentName: "StatusPredmet",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.StatusPredmet,
            value: lightSwitchApplication.StatusPredmet
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        ProfesorTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProfesorTemplate",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Semestar1: {
            _$class: msls.ContentItem,
            _$name: "Semestar1",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        ActivePredmet: {
            _$class: msls.ContentItem,
            _$name: "ActivePredmet",
            _$parentName: "right",
            screen: lightSwitchApplication.AddSubject,
            data: lightSwitchApplication.Predmet,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddSubject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddSubject, {
        /// <field>
        /// Called when a new AddSubject screen is created.
        /// <br/>created(msls.application.AddSubject screen)
        /// </field>
        created: [lightSwitchApplication.AddSubject],
        /// <field>
        /// Called before changes on an active AddSubject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddSubject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddSubject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("left"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Ime"); }],
        /// <field>
        /// Called after the br_krediti content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        br_krediti_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("br_krediti"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("right"); }],
        /// <field>
        /// Called after the StatusPredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("StatusPredmet"); }],
        /// <field>
        /// Called after the StatusPredmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet1_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("StatusPredmet1"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the ProfesorTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfesorTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("ProfesorTemplate"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Semestar1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar1_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("Semestar1"); }],
        /// <field>
        /// Called after the ActivePredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActivePredmet_postRender: [$element, function () { return new lightSwitchApplication.AddSubject().findContentItem("ActivePredmet"); }]
    });

    lightSwitchApplication.AddProfesor.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddProfesor
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.AddProfesor,
            value: lightSwitchApplication.AddProfesor
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.AddProfesor,
            value: lightSwitchApplication.Profesor
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Br_kabinet: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet",
            _$parentName: "left",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "left",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Titula: {
            _$class: msls.ContentItem,
            _$name: "Titula",
            _$parentName: "right",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon: {
            _$class: msls.ContentItem,
            _$name: "Telefon",
            _$parentName: "right",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor",
            _$parentName: "right",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.AddProfesor,
            value: lightSwitchApplication.AddProfesor
        },
        Aktivnosts1: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts1",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.AddProfesor,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddProfesor,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Aktivnosts1",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.AddProfesor,
            value: lightSwitchApplication.AddProfesor
        },
        Predmets1: {
            _$class: msls.ContentItem,
            _$name: "Predmets1",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.AddProfesor,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddProfesor,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "Predmets1",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows1",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.AddProfesor,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddProfesor
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddProfesor, {
        /// <field>
        /// Called when a new AddProfesor screen is created.
        /// <br/>created(msls.application.AddProfesor screen)
        /// </field>
        created: [lightSwitchApplication.AddProfesor],
        /// <field>
        /// Called before changes on an active AddProfesor screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddProfesor screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddProfesor],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("left"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Br_kabinet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Br_kabinet"); }],
        /// <field>
        /// Called after the Korisnicko_ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Korisnicko_ime"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("right"); }],
        /// <field>
        /// Called after the Titula content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Titula"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Email"); }],
        /// <field>
        /// Called after the Telefon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Telefon"); }],
        /// <field>
        /// Called after the ActiveProfesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("ActiveProfesor"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the Aktivnosts1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts1_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Aktivnosts1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("rows"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the Predmets1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets1_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Predmets1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("rows1"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.AddProfesor().findContentItem("Ime1"); }]
    });

    lightSwitchApplication.AddStudent.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddStudent
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.AddStudent,
            value: lightSwitchApplication.AddStudent
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.AddStudent,
            value: lightSwitchApplication.Student
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "left",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "right",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "right",
            screen: lightSwitchApplication.AddStudent,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddStudent
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddStudent, {
        /// <field>
        /// Called when a new AddStudent screen is created.
        /// <br/>created(msls.application.AddStudent screen)
        /// </field>
        created: [lightSwitchApplication.AddStudent],
        /// <field>
        /// Called before changes on an active AddStudent screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddStudent screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddStudent],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("left"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("right"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Email"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.AddStudent().findContentItem("ActiveStudent"); }]
    });

    lightSwitchApplication.EnlistSubject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EnlistSubject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.EnlistSubject,
            value: lightSwitchApplication.EnlistSubject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.EnlistSubject,
            value: lightSwitchApplication.Izbrani_predmeti
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Izbrani_predmeti
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Predmet
        },
        PredmetTemplate: {
            _$class: msls.ContentItem,
            _$name: "PredmetTemplate",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "PredmetTemplate",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Izbrani_predmeti
        },
        Student: {
            _$class: msls.ContentItem,
            _$name: "Student",
            _$parentName: "right",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Student
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Student",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.EnlistSubject,
            data: lightSwitchApplication.Student,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.EnlistSubject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.EnlistSubject, {
        /// <field>
        /// Called when a new EnlistSubject screen is created.
        /// <br/>created(msls.application.EnlistSubject screen)
        /// </field>
        created: [lightSwitchApplication.EnlistSubject],
        /// <field>
        /// Called before changes on an active EnlistSubject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EnlistSubject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EnlistSubject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("left"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the PredmetTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PredmetTemplate_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("PredmetTemplate"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("right"); }],
        /// <field>
        /// Called after the Student content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Student_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("Student"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.EnlistSubject().findContentItem("Prezime"); }]
    });

    lightSwitchApplication.ModifyActivity.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifyActivity
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.ModifyActivity,
            value: lightSwitchApplication.ModifyActivity
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.ModifyActivity,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Predmet1: {
            _$class: msls.ContentItem,
            _$name: "Predmet1",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "Predmet1",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "Den",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Den,
            value: lightSwitchApplication.Den
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Prostorija",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Prostorija,
            value: lightSwitchApplication.Prostorija
        },
        Otkazan: {
            _$class: msls.ContentItem,
            _$name: "Otkazan",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: Boolean
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "TipNaAktivnost",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.TipNaAktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyActivity,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifyActivity
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ModifyActivity, {
        /// <field>
        /// Called when a new ModifyActivity screen is created.
        /// <br/>created(msls.application.ModifyActivity screen)
        /// </field>
        created: [lightSwitchApplication.ModifyActivity],
        /// <field>
        /// Called before changes on an active ModifyActivity screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ModifyActivity screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ModifyActivity],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("left"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Predmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet1_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Predmet1"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Den"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the Otkazan content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Otkazan_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Otkazan"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("right"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ModifyActivity().findContentItem("Vreme_kraj"); }]
    });

    lightSwitchApplication.ModifySubject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifySubject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.ModifySubject,
            value: lightSwitchApplication.ModifySubject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.ModifySubject,
            value: lightSwitchApplication.Predmet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        StatusPredmet: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.StatusPredmet
        },
        StatusPredmet1: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet1",
            _$parentName: "StatusPredmet",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.StatusPredmet,
            value: lightSwitchApplication.StatusPredmet
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        br_krediti: {
            _$class: msls.ContentItem,
            _$name: "br_krediti",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Profesor1: {
            _$class: msls.ContentItem,
            _$name: "Profesor1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Semestar1: {
            _$class: msls.ContentItem,
            _$name: "Semestar1",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        ActivePredmet: {
            _$class: msls.ContentItem,
            _$name: "ActivePredmet",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifySubject,
            data: lightSwitchApplication.Predmet,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifySubject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ModifySubject, {
        /// <field>
        /// Called when a new ModifySubject screen is created.
        /// <br/>created(msls.application.ModifySubject screen)
        /// </field>
        created: [lightSwitchApplication.ModifySubject],
        /// <field>
        /// Called before changes on an active ModifySubject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ModifySubject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ModifySubject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("left"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Ime"); }],
        /// <field>
        /// Called after the StatusPredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("StatusPredmet"); }],
        /// <field>
        /// Called after the StatusPredmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet1_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("StatusPredmet1"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the br_krediti content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        br_krediti_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("br_krediti"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("right"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Profesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor1_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Profesor1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Semestar1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar1_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("Semestar1"); }],
        /// <field>
        /// Called after the ActivePredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActivePredmet_postRender: [$element, function () { return new lightSwitchApplication.ModifySubject().findContentItem("ActivePredmet"); }]
    });

    lightSwitchApplication.ModifyProfesor.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifyProfesor
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.ModifyProfesor,
            value: lightSwitchApplication.ModifyProfesor
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.ModifyProfesor,
            value: lightSwitchApplication.Profesor
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Br_kabinet: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Titula: {
            _$class: msls.ContentItem,
            _$name: "Titula",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon: {
            _$class: msls.ContentItem,
            _$name: "Telefon",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.ModifyProfesor,
            value: lightSwitchApplication.ModifyProfesor
        },
        Aktivnosts1: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts1",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.ModifyProfesor,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ModifyProfesor,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Aktivnosts1",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "rows",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "rows",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "rows",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.ModifyProfesor,
            value: lightSwitchApplication.ModifyProfesor
        },
        Predmets1: {
            _$class: msls.ContentItem,
            _$name: "Predmets1",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.ModifyProfesor,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ModifyProfesor,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "Predmets1",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ModifyProfesor,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifyProfesor
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ModifyProfesor, {
        /// <field>
        /// Called when a new ModifyProfesor screen is created.
        /// <br/>created(msls.application.ModifyProfesor screen)
        /// </field>
        created: [lightSwitchApplication.ModifyProfesor],
        /// <field>
        /// Called before changes on an active ModifyProfesor screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ModifyProfesor screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ModifyProfesor],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("left"); }],
        /// <field>
        /// Called after the Br_kabinet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Br_kabinet"); }],
        /// <field>
        /// Called after the Korisnicko_ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Korisnicko_ime"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("right"); }],
        /// <field>
        /// Called after the Titula content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Titula"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Email"); }],
        /// <field>
        /// Called after the Telefon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Telefon"); }],
        /// <field>
        /// Called after the ActiveProfesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("ActiveProfesor"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the Aktivnosts1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts1_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Aktivnosts1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("rows"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the Predmets1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets1_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Predmets1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("rows1"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ModifyProfesor().findContentItem("Ime1"); }]
    });

    lightSwitchApplication.ModifyStudent.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifyStudent
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.ModifyStudent,
            value: lightSwitchApplication.ModifyStudent
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.ModifyStudent,
            value: lightSwitchApplication.Student
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: String
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "right",
            screen: lightSwitchApplication.ModifyStudent,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ModifyStudent
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ModifyStudent, {
        /// <field>
        /// Called when a new ModifyStudent screen is created.
        /// <br/>created(msls.application.ModifyStudent screen)
        /// </field>
        created: [lightSwitchApplication.ModifyStudent],
        /// <field>
        /// Called before changes on an active ModifyStudent screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ModifyStudent screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ModifyStudent],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("left"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("right"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Email"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.ModifyStudent().findContentItem("ActiveStudent"); }]
    });

    lightSwitchApplication.Profesors.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Profesors
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: lightSwitchApplication.Profesors
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "Group",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Profesors,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        PredmetsTemplate: {
            _$class: msls.ContentItem,
            _$name: "PredmetsTemplate",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "PredmetsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "PredmetsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        StatusPredmet: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet",
            _$parentName: "PredmetsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.StatusPredmet
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: lightSwitchApplication.Profesors
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Profesors,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        AktivnostsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AktivnostsTemplate",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Список: {
            _$class: msls.ContentItem,
            _$name: "Список",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: lightSwitchApplication.Profesors
        },
        SpisokPolaganjes: {
            _$class: msls.ContentItem,
            _$name: "SpisokPolaganjes",
            _$parentName: "Список",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Profesors,
                _$entry: {
                    elementType: lightSwitchApplication.SpisokPolaganje
                }
            }
        },
        SpisokPolaganjesTemplate: {
            _$class: msls.ContentItem,
            _$name: "SpisokPolaganjesTemplate",
            _$parentName: "SpisokPolaganjes",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.SpisokPolaganje,
            value: lightSwitchApplication.SpisokPolaganje
        },
        Predmet1: {
            _$class: msls.ContentItem,
            _$name: "Predmet1",
            _$parentName: "SpisokPolaganjesTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.SpisokPolaganje,
            value: lightSwitchApplication.Predmet
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "Predmet1",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Student: {
            _$class: msls.ContentItem,
            _$name: "Student",
            _$parentName: "SpisokPolaganjesTemplate",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.SpisokPolaganje,
            value: lightSwitchApplication.Student
        },
        Ime3: {
            _$class: msls.ContentItem,
            _$name: "Ime3",
            _$parentName: "Student",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Student",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: String
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "Student",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "Student",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Nasoka
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Profesors
        },
        PopUpSpisok: {
            _$class: msls.ContentItem,
            _$name: "PopUpSpisok",
            _$parentName: "Popups",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: lightSwitchApplication.Profesors
        },
        SpisokPolaganjes1: {
            _$class: msls.ContentItem,
            _$name: "SpisokPolaganjes1",
            _$parentName: "PopUpSpisok",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Profesors,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Profesors,
                _$entry: {
                    elementType: lightSwitchApplication.SpisokPolaganje
                }
            }
        },
        SpisokPolaganjes1Template: {
            _$class: msls.ContentItem,
            _$name: "SpisokPolaganjes1Template",
            _$parentName: "SpisokPolaganjes1",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.SpisokPolaganje,
            value: lightSwitchApplication.SpisokPolaganje
        },
        Student1: {
            _$class: msls.ContentItem,
            _$name: "Student1",
            _$parentName: "SpisokPolaganjes1Template",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.SpisokPolaganje,
            value: lightSwitchApplication.Student
        },
        Br_indeks1: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks1",
            _$parentName: "Student1",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime4: {
            _$class: msls.ContentItem,
            _$name: "Ime4",
            _$parentName: "Student1",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime1: {
            _$class: msls.ContentItem,
            _$name: "Prezime1",
            _$parentName: "Student1",
            screen: lightSwitchApplication.Profesors,
            data: lightSwitchApplication.Student,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Profesors, {
        /// <field>
        /// Called when a new Profesors screen is created.
        /// <br/>created(msls.application.Profesors screen)
        /// </field>
        created: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called before changes on an active Profesors screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Profesors screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the Predmets_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        Predmets_ItemTap_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the Predmets_ItemTap method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        Predmets_ItemTap_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the Predmets_ItemTap1 method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        Predmets_ItemTap1_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the Predmets_ItemTap1 method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        Predmets_ItemTap1_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the Predmets_ItemTap2 method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        Predmets_ItemTap2_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the Predmets_ItemTap2 method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        Predmets_ItemTap2_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the ShowAtendees method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        ShowAtendees_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the ShowAtendees method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        ShowAtendees_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the ShowAtendees_Tap method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        ShowAtendees_Tap_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the ShowAtendees_Tap method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        ShowAtendees_Tap_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the CancelActivity method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        CancelActivity_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the CancelActivity method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        CancelActivity_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the CancelActivity_Tap method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        CancelActivity_Tap_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the CancelActivity_Tap method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        CancelActivity_Tap_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to determine if the Aktivnosts_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.Profesors screen)
        /// </field>
        Aktivnosts_ItemTap_canExecute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called to execute the Aktivnosts_ItemTap method.
        /// <br/>execute(msls.application.Profesors screen)
        /// </field>
        Aktivnosts_ItemTap_execute: [lightSwitchApplication.Profesors],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Group"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the PredmetsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PredmetsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("PredmetsTemplate"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the StatusPredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("StatusPredmet"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the AktivnostsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AktivnostsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("AktivnostsTemplate"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Den"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Список content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Список_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Список"); }],
        /// <field>
        /// Called after the SpisokPolaganjes content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpisokPolaganjes_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("SpisokPolaganjes"); }],
        /// <field>
        /// Called to render the SpisokPolaganjesTemplate content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpisokPolaganjesTemplate_render: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("SpisokPolaganjesTemplate"); }],
        /// <field>
        /// Called after the Predmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Predmet1"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Student content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Student_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Student"); }],
        /// <field>
        /// Called after the Ime3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime3_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Ime3"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the PopUpSpisok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PopUpSpisok_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("PopUpSpisok"); }],
        /// <field>
        /// Called after the SpisokPolaganjes1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpisokPolaganjes1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("SpisokPolaganjes1"); }],
        /// <field>
        /// Called after the SpisokPolaganjes1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SpisokPolaganjes1Template_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("SpisokPolaganjes1Template"); }],
        /// <field>
        /// Called after the Student1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Student1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Student1"); }],
        /// <field>
        /// Called after the Br_indeks1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Br_indeks1"); }],
        /// <field>
        /// Called after the Ime4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime4_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Ime4"); }],
        /// <field>
        /// Called after the Prezime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime1_postRender: [$element, function () { return new lightSwitchApplication.Profesors().findContentItem("Prezime1"); }]
    });

    lightSwitchApplication.Schedule.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Schedule
        },
        vw_AktivnostiList: {
            _$class: msls.ContentItem,
            _$name: "vw_AktivnostiList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.Schedule,
            value: lightSwitchApplication.Schedule
        },
        BR_Semestar: {
            _$class: msls.ContentItem,
            _$name: "BR_Semestar",
            _$parentName: "vw_AktivnostiList",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.Schedule,
            value: Number
        },
        vw_Aktivnostis: {
            _$class: msls.ContentItem,
            _$name: "vw_Aktivnostis",
            _$parentName: "vw_AktivnostiList",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.Schedule,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Schedule,
                _$entry: {
                    elementType: lightSwitchApplication.vw_Aktivnosti
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "vw_Aktivnostis",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: lightSwitchApplication.vw_Aktivnosti
        },
        ImePredmet: {
            _$class: msls.ContentItem,
            _$name: "ImePredmet",
            _$parentName: "rows",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Opis: {
            _$class: msls.ContentItem,
            _$name: "Opis",
            _$parentName: "rows",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "rows",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "rows",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: lightSwitchApplication.vw_Aktivnosti
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "Group",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "Group",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: Date
        },
        Profesor_Ime: {
            _$class: msls.ContentItem,
            _$name: "Profesor_Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.Schedule,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Schedule
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Schedule, {
        /// <field>
        /// Called when a new Schedule screen is created.
        /// <br/>created(msls.application.Schedule screen)
        /// </field>
        created: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called before changes on an active Schedule screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Schedule screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to determine if the ShowAddEditActivity_Tap method can be executed.
        /// <br/>canExecute(msls.application.Schedule screen)
        /// </field>
        ShowAddEditActivity_Tap_canExecute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to execute the ShowAddEditActivity_Tap method.
        /// <br/>execute(msls.application.Schedule screen)
        /// </field>
        ShowAddEditActivity_Tap_execute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to determine if the ScheduleExam method can be executed.
        /// <br/>canExecute(msls.application.Schedule screen)
        /// </field>
        ScheduleExam_canExecute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to execute the ScheduleExam method.
        /// <br/>execute(msls.application.Schedule screen)
        /// </field>
        ScheduleExam_execute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to determine if the ScheduleExam_Tap method can be executed.
        /// <br/>canExecute(msls.application.Schedule screen)
        /// </field>
        ScheduleExam_Tap_canExecute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to execute the ScheduleExam_Tap method.
        /// <br/>execute(msls.application.Schedule screen)
        /// </field>
        ScheduleExam_Tap_execute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to determine if the vw_AktivnostiList_Tap method can be executed.
        /// <br/>canExecute(msls.application.Schedule screen)
        /// </field>
        vw_AktivnostiList_Tap_canExecute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called to execute the vw_AktivnostiList_Tap method.
        /// <br/>execute(msls.application.Schedule screen)
        /// </field>
        vw_AktivnostiList_Tap_execute: [lightSwitchApplication.Schedule],
        /// <field>
        /// Called after the vw_AktivnostiList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vw_AktivnostiList_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("vw_AktivnostiList"); }],
        /// <field>
        /// Called after the BR_Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BR_Semestar_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("BR_Semestar"); }],
        /// <field>
        /// Called after the vw_Aktivnostis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vw_Aktivnostis_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("vw_Aktivnostis"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("rows"); }],
        /// <field>
        /// Called after the ImePredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImePredmet_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("ImePredmet"); }],
        /// <field>
        /// Called after the Opis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Opis_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Opis"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Den"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Group"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Profesor_Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_Ime_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Profesor_Ime"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.Schedule().findContentItem("Ime"); }]
    });

    lightSwitchApplication.Students.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Students
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Students,
            value: lightSwitchApplication.Students
        },
        BR_Semestar: {
            _$class: msls.ContentItem,
            _$name: "BR_Semestar",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Students,
            value: Number
        },
        vw_Aktivnostis: {
            _$class: msls.ContentItem,
            _$name: "vw_Aktivnostis",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Students,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Students,
                _$entry: {
                    elementType: lightSwitchApplication.vw_Aktivnosti
                }
            }
        },
        vw_AktivnostisTemplate: {
            _$class: msls.ContentItem,
            _$name: "vw_AktivnostisTemplate",
            _$parentName: "vw_Aktivnostis",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: lightSwitchApplication.vw_Aktivnosti
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "vw_AktivnostisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        ImePredmet: {
            _$class: msls.ContentItem,
            _$name: "ImePredmet",
            _$parentName: "vw_AktivnostisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Opis: {
            _$class: msls.ContentItem,
            _$name: "Opis",
            _$parentName: "vw_AktivnostisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "vw_AktivnostisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: lightSwitchApplication.vw_Aktivnosti
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: Date
        },
        Profesor_Ime: {
            _$class: msls.ContentItem,
            _$name: "Profesor_Ime",
            _$parentName: "vw_AktivnostisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "vw_AktivnostisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.vw_Aktivnosti,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Students,
            value: lightSwitchApplication.Students
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "Group",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Students,
            value: String
        },
        Izbrani_predmetis: {
            _$class: msls.ContentItem,
            _$name: "Izbrani_predmetis",
            _$parentName: "Group",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Students,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Students,
                _$entry: {
                    elementType: lightSwitchApplication.Izbrani_predmeti
                }
            }
        },
        Izbrani_predmetisTemplate: {
            _$class: msls.ContentItem,
            _$name: "Izbrani_predmetisTemplate",
            _$parentName: "Izbrani_predmetis",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Izbrani_predmeti
        },
        Semestar2: {
            _$class: msls.ContentItem,
            _$name: "Semestar2",
            _$parentName: "Izbrani_predmetisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Semestar
        },
        tekoven_semestar: {
            _$class: msls.ContentItem,
            _$name: "tekoven_semestar",
            _$parentName: "Izbrani_predmetisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: String
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "Izbrani_predmetisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        br_krediti: {
            _$class: msls.ContentItem,
            _$name: "br_krediti",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Predmet,
            value: Number
        },
        StatusPredmet: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.StatusPredmet
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Nasoka
        },
        Student: {
            _$class: msls.ContentItem,
            _$name: "Student",
            _$parentName: "Izbrani_predmetisTemplate",
            screen: lightSwitchApplication.Students,
            data: lightSwitchApplication.Izbrani_predmeti,
            value: lightSwitchApplication.Student
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Students
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Students, {
        /// <field>
        /// Called when a new Students screen is created.
        /// <br/>created(msls.application.Students screen)
        /// </field>
        created: [lightSwitchApplication.Students],
        /// <field>
        /// Called before changes on an active Students screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Students screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Students],
        /// <field>
        /// Called to determine if the ScheduleExam method can be executed.
        /// <br/>canExecute(msls.application.Students screen)
        /// </field>
        ScheduleExam_canExecute: [lightSwitchApplication.Students],
        /// <field>
        /// Called to execute the ScheduleExam method.
        /// <br/>execute(msls.application.Students screen)
        /// </field>
        ScheduleExam_execute: [lightSwitchApplication.Students],
        /// <field>
        /// Called to determine if the vw_Aktivnostis_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.Students screen)
        /// </field>
        vw_Aktivnostis_ItemTap_canExecute: [lightSwitchApplication.Students],
        /// <field>
        /// Called to execute the vw_Aktivnostis_ItemTap method.
        /// <br/>execute(msls.application.Students screen)
        /// </field>
        vw_Aktivnostis_ItemTap_execute: [lightSwitchApplication.Students],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Group1"); }],
        /// <field>
        /// Called after the BR_Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BR_Semestar_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("BR_Semestar"); }],
        /// <field>
        /// Called after the vw_Aktivnostis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vw_Aktivnostis_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("vw_Aktivnostis"); }],
        /// <field>
        /// Called after the vw_AktivnostisTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        vw_AktivnostisTemplate_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("vw_AktivnostisTemplate"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Den"); }],
        /// <field>
        /// Called after the ImePredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ImePredmet_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("ImePredmet"); }],
        /// <field>
        /// Called after the Opis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Opis_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Opis"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Profesor_Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_Ime_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Profesor_Ime"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Group"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Izbrani_predmetis content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Izbrani_predmetis_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Izbrani_predmetis"); }],
        /// <field>
        /// Called after the Izbrani_predmetisTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Izbrani_predmetisTemplate_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Izbrani_predmetisTemplate"); }],
        /// <field>
        /// Called after the Semestar2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar2_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Semestar2"); }],
        /// <field>
        /// Called after the tekoven_semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        tekoven_semestar_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("tekoven_semestar"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Email"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the br_krediti content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        br_krediti_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("br_krediti"); }],
        /// <field>
        /// Called after the StatusPredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("StatusPredmet"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Student content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Student_postRender: [$element, function () { return new lightSwitchApplication.Students().findContentItem("Student"); }]
    });

}(msls.application));