/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.ДодајАктивност.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајАктивност
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.ДодајАктивност,
            value: lightSwitchApplication.ДодајАктивност
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.ДодајАктивност,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "Den",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Den,
            value: lightSwitchApplication.Den
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Prostorija",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Prostorija,
            value: lightSwitchApplication.Prostorija
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "TipNaAktivnost",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.TipNaAktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајАктивност
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ДодајАктивност, {
        /// <field>
        /// Called when a new ДодајАктивност screen is created.
        /// <br/>created(msls.application.ДодајАктивност screen)
        /// </field>
        created: [lightSwitchApplication.ДодајАктивност],
        /// <field>
        /// Called before changes on an active ДодајАктивност screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ДодајАктивност screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ДодајАктивност],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("left"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Den"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("right"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ДодајАктивност().findContentItem("Vreme_kraj"); }]
    });

    lightSwitchApplication.Администратор.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Администратор
        },
        PredmetList: {
            _$class: msls.ContentItem,
            _$name: "PredmetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: lightSwitchApplication.Администратор
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "PredmetList",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Администратор,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "rows",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "rows",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: lightSwitchApplication.Администратор
        },
        Students: {
            _$class: msls.ContentItem,
            _$name: "Students",
            _$parentName: "Group",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Администратор,
                _$entry: {
                    elementType: lightSwitchApplication.Student
                }
            }
        },
        StudentsTemplate: {
            _$class: msls.ContentItem,
            _$name: "StudentsTemplate",
            _$parentName: "Students",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime1: {
            _$class: msls.ContentItem,
            _$name: "Prezime1",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: String
        },
        Semestar2: {
            _$class: msls.ContentItem,
            _$name: "Semestar2",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: lightSwitchApplication.Администратор
        },
        Profesors: {
            _$class: msls.ContentItem,
            _$name: "Profesors",
            _$parentName: "Group1",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Администратор,
                _$entry: {
                    elementType: lightSwitchApplication.Profesor
                }
            }
        },
        ProfesorsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProfesorsTemplate",
            _$parentName: "Profesors",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Br_kabinet1: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime1: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka2: {
            _$class: msls.ContentItem,
            _$name: "Lozinka2",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Ime4: {
            _$class: msls.ContentItem,
            _$name: "Ime4",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime3: {
            _$class: msls.ContentItem,
            _$name: "Prezime3",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Titula1: {
            _$class: msls.ContentItem,
            _$name: "Titula1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email2: {
            _$class: msls.ContentItem,
            _$name: "Email2",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon1: {
            _$class: msls.ContentItem,
            _$name: "Telefon1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor1: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: lightSwitchApplication.Администратор
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Group2",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Администратор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Администратор,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        AktivnostsTemplate: {
            _$class: msls.ContentItem,
            _$name: "AktivnostsTemplate",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        Ime3: {
            _$class: msls.ContentItem,
            _$name: "Ime3",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor1: {
            _$class: msls.ContentItem,
            _$name: "Profesor1",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        Ime5: {
            _$class: msls.ContentItem,
            _$name: "Ime5",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime2: {
            _$class: msls.ContentItem,
            _$name: "Prezime2",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "AktivnostsTemplate",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "Group3",
            screen: lightSwitchApplication.Администратор,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Администратор
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Администратор, {
        /// <field>
        /// Called when a new Администратор screen is created.
        /// <br/>created(msls.application.Администратор screen)
        /// </field>
        created: [lightSwitchApplication.Администратор],
        /// <field>
        /// Called before changes on an active Администратор screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Администратор screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Администратор],
        /// <field>
        /// Called after the PredmetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PredmetList_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("PredmetList"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("rows"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Group"); }],
        /// <field>
        /// Called after the Students content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Students_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Students"); }],
        /// <field>
        /// Called after the StudentsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StudentsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("StudentsTemplate"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Prezime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Prezime1"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Email"); }],
        /// <field>
        /// Called after the Semestar2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar2_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Semestar2"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("ActiveStudent"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Profesors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesors_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Profesors"); }],
        /// <field>
        /// Called after the ProfesorsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfesorsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("ProfesorsTemplate"); }],
        /// <field>
        /// Called after the Br_kabinet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Br_kabinet1"); }],
        /// <field>
        /// Called after the Korisnicko_ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Korisnicko_ime1"); }],
        /// <field>
        /// Called after the Lozinka2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka2_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Lozinka2"); }],
        /// <field>
        /// Called after the Ime4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime4_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Ime4"); }],
        /// <field>
        /// Called after the Prezime3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime3_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Prezime3"); }],
        /// <field>
        /// Called after the Titula1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Titula1"); }],
        /// <field>
        /// Called after the Email2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email2_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Email2"); }],
        /// <field>
        /// Called after the Telefon1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Telefon1"); }],
        /// <field>
        /// Called after the ActiveProfesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("ActiveProfesor1"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the AktivnostsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AktivnostsTemplate_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("AktivnostsTemplate"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Den"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the Ime3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime3_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Ime3"); }],
        /// <field>
        /// Called after the Profesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor1_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Profesor1"); }],
        /// <field>
        /// Called after the Ime5 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime5_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Ime5"); }],
        /// <field>
        /// Called after the Prezime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime2_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Prezime2"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.Администратор().findContentItem("Vreme_kraj"); }]
    });

    lightSwitchApplication.ДодајПредмет.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајПредмет
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.ДодајПредмет,
            value: lightSwitchApplication.ДодајПредмет
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.ДодајПредмет,
            value: lightSwitchApplication.Predmet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        br_krediti: {
            _$class: msls.ContentItem,
            _$name: "br_krediti",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: Number
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        StatusPredmet: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.StatusPredmet
        },
        StatusPredmet1: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet1",
            _$parentName: "StatusPredmet",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.StatusPredmet,
            value: lightSwitchApplication.StatusPredmet
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        ProfesorTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProfesorTemplate",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Semestar1: {
            _$class: msls.ContentItem,
            _$name: "Semestar1",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        ActivePredmet: {
            _$class: msls.ContentItem,
            _$name: "ActivePredmet",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајПредмет
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ДодајПредмет, {
        /// <field>
        /// Called when a new ДодајПредмет screen is created.
        /// <br/>created(msls.application.ДодајПредмет screen)
        /// </field>
        created: [lightSwitchApplication.ДодајПредмет],
        /// <field>
        /// Called before changes on an active ДодајПредмет screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ДодајПредмет screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ДодајПредмет],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("left"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Ime"); }],
        /// <field>
        /// Called after the br_krediti content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        br_krediti_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("br_krediti"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("right"); }],
        /// <field>
        /// Called after the StatusPredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("StatusPredmet"); }],
        /// <field>
        /// Called after the StatusPredmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("StatusPredmet1"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the ProfesorTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfesorTemplate_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("ProfesorTemplate"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Semestar1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Semestar1"); }],
        /// <field>
        /// Called after the ActivePredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActivePredmet_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("ActivePredmet"); }]
    });

    lightSwitchApplication.ДодајПрофесор.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајПрофесор
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.ДодајПрофесор,
            value: lightSwitchApplication.ДодајПрофесор
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.ДодајПрофесор,
            value: lightSwitchApplication.Profesor
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Br_kabinet: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Titula: {
            _$class: msls.ContentItem,
            _$name: "Titula",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon: {
            _$class: msls.ContentItem,
            _$name: "Telefon",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.ДодајПрофесор,
            value: lightSwitchApplication.ДодајПрофесор
        },
        Aktivnosts1: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts1",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.ДодајПрофесор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ДодајПрофесор,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Aktivnosts1",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "rows",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "rows",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.ДодајПрофесор,
            value: lightSwitchApplication.ДодајПрофесор
        },
        Predmets1: {
            _$class: msls.ContentItem,
            _$name: "Predmets1",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.ДодајПрофесор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ДодајПрофесор,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "Predmets1",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајПрофесор
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ДодајПрофесор, {
        /// <field>
        /// Called when a new ДодајПрофесор screen is created.
        /// <br/>created(msls.application.ДодајПрофесор screen)
        /// </field>
        created: [lightSwitchApplication.ДодајПрофесор],
        /// <field>
        /// Called before changes on an active ДодајПрофесор screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ДодајПрофесор screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ДодајПрофесор],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("left"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Br_kabinet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Br_kabinet"); }],
        /// <field>
        /// Called after the Korisnicko_ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Korisnicko_ime"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("right"); }],
        /// <field>
        /// Called after the Titula content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Titula"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Email"); }],
        /// <field>
        /// Called after the Telefon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Telefon"); }],
        /// <field>
        /// Called after the ActiveProfesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("ActiveProfesor"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the Aktivnosts1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Aktivnosts1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("rows"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the Predmets1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Predmets1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("rows1"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Ime1"); }]
    });

    lightSwitchApplication.ДодајСтудент.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајСтудент
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.ДодајСтудент,
            value: lightSwitchApplication.ДодајСтудент
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.ДодајСтудент,
            value: lightSwitchApplication.Student
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајСтудент
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ДодајСтудент, {
        /// <field>
        /// Called when a new ДодајСтудент screen is created.
        /// <br/>created(msls.application.ДодајСтудент screen)
        /// </field>
        created: [lightSwitchApplication.ДодајСтудент],
        /// <field>
        /// Called before changes on an active ДодајСтудент screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ДодајСтудент screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ДодајСтудент],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("left"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("right"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Email"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.ДодајСтудент().findContentItem("ActiveStudent"); }]
    });

    lightSwitchApplication.ИзмениПредмет.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениПредмет
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.ИзмениПредмет,
            value: lightSwitchApplication.ИзмениПредмет
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.ИзмениПредмет,
            value: lightSwitchApplication.Predmet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        StatusPredmet: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.StatusPredmet
        },
        StatusPredmet1: {
            _$class: msls.ContentItem,
            _$name: "StatusPredmet1",
            _$parentName: "StatusPredmet",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.StatusPredmet,
            value: lightSwitchApplication.StatusPredmet
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        br_krediti: {
            _$class: msls.ContentItem,
            _$name: "br_krediti",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Profesor1: {
            _$class: msls.ContentItem,
            _$name: "Profesor1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Semestar1: {
            _$class: msls.ContentItem,
            _$name: "Semestar1",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        ActivePredmet: {
            _$class: msls.ContentItem,
            _$name: "ActivePredmet",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПредмет,
            data: lightSwitchApplication.Predmet,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениПредмет
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ИзмениПредмет, {
        /// <field>
        /// Called when a new ИзмениПредмет screen is created.
        /// <br/>created(msls.application.ИзмениПредмет screen)
        /// </field>
        created: [lightSwitchApplication.ИзмениПредмет],
        /// <field>
        /// Called before changes on an active ИзмениПредмет screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ИзмениПредмет screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ИзмениПредмет],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("left"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Ime"); }],
        /// <field>
        /// Called after the StatusPredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("StatusPredmet"); }],
        /// <field>
        /// Called after the StatusPredmet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusPredmet1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("StatusPredmet1"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the br_krediti content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        br_krediti_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("br_krediti"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("right"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Profesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Profesor1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Semestar1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Semestar1"); }],
        /// <field>
        /// Called after the ActivePredmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActivePredmet_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("ActivePredmet"); }]
    });

    lightSwitchApplication.ИзмениПрофесор.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениПрофесор
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.ИзмениПрофесор,
            value: lightSwitchApplication.ИзмениПрофесор
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.ИзмениПрофесор,
            value: lightSwitchApplication.Profesor
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Br_kabinet: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Titula: {
            _$class: msls.ContentItem,
            _$name: "Titula",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon: {
            _$class: msls.ContentItem,
            _$name: "Telefon",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.ИзмениПрофесор,
            value: lightSwitchApplication.ИзмениПрофесор
        },
        Aktivnosts1: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts1",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.ИзмениПрофесор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ИзмениПрофесор,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Aktivnosts1",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "rows",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "rows",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.ИзмениПрофесор,
            value: lightSwitchApplication.ИзмениПрофесор
        },
        Predmets1: {
            _$class: msls.ContentItem,
            _$name: "Predmets1",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.ИзмениПрофесор,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ИзмениПрофесор,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows1: {
            _$class: msls.ContentItem,
            _$name: "rows1",
            _$parentName: "Predmets1",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "rows1",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениПрофесор
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ИзмениПрофесор, {
        /// <field>
        /// Called when a new ИзмениПрофесор screen is created.
        /// <br/>created(msls.application.ИзмениПрофесор screen)
        /// </field>
        created: [lightSwitchApplication.ИзмениПрофесор],
        /// <field>
        /// Called before changes on an active ИзмениПрофесор screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ИзмениПрофесор screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ИзмениПрофесор],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("left"); }],
        /// <field>
        /// Called after the Br_kabinet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Br_kabinet"); }],
        /// <field>
        /// Called after the Korisnicko_ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Korisnicko_ime"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("right"); }],
        /// <field>
        /// Called after the Titula content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Titula"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Email"); }],
        /// <field>
        /// Called after the Telefon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Telefon"); }],
        /// <field>
        /// Called after the ActiveProfesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("ActiveProfesor"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the Aktivnosts1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Aktivnosts1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("rows"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the Predmets1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Predmets1"); }],
        /// <field>
        /// Called after the rows1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("rows1"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Ime1"); }]
    });

    lightSwitchApplication.ИзмениСтудент.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениСтудент
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.ИзмениСтудент,
            value: lightSwitchApplication.ИзмениСтудент
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.ИзмениСтудент,
            value: lightSwitchApplication.Student
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Nasoka
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "Nasoka1",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Nasoka,
            value: lightSwitchApplication.Nasoka
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениСтудент
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ИзмениСтудент, {
        /// <field>
        /// Called when a new ИзмениСтудент screen is created.
        /// <br/>created(msls.application.ИзмениСтудент screen)
        /// </field>
        created: [lightSwitchApplication.ИзмениСтудент],
        /// <field>
        /// Called before changes on an active ИзмениСтудент screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ИзмениСтудент screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ИзмениСтудент],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("left"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("right"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Email"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("ActiveStudent"); }]
    });

    lightSwitchApplication.ИзмениАктивност.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениАктивност
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.ИзмениАктивност,
            value: lightSwitchApplication.ИзмениАктивност
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.ИзмениАктивност,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Den
        },
        RowTemplate4: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate4",
            _$parentName: "Den",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Den,
            value: lightSwitchApplication.Den
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Prostorija",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Prostorija,
            value: lightSwitchApplication.Prostorija
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "TipNaAktivnost",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.TipNaAktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "right",
            screen: lightSwitchApplication.ИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ИзмениАктивност
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ИзмениАктивност, {
        /// <field>
        /// Called when a new ИзмениАктивност screen is created.
        /// <br/>created(msls.application.ИзмениАктивност screen)
        /// </field>
        created: [lightSwitchApplication.ИзмениАктивност],
        /// <field>
        /// Called before changes on an active ИзмениАктивност screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ИзмениАктивност screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ИзмениАктивност],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("left"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Den"); }],
        /// <field>
        /// Called after the RowTemplate4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate4_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("RowTemplate4"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("right"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ИзмениАктивност().findContentItem("Vreme_kraj"); }]
    });

}(msls.application));