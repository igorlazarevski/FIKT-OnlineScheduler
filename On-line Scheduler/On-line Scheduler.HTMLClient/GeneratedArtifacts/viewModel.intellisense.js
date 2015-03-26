/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.ДодајИзмениАктивност.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајИзмениАктивност
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.ДодајИзмениАктивност,
            value: lightSwitchApplication.ДодајИзмениАктивност
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.ДодајИзмениАктивност,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: String
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        PredmetTemplate: {
            _$class: msls.ContentItem,
            _$name: "PredmetTemplate",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "PredmetTemplate",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        TipNaAktivnost1: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost1",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        TipNaAktivnost2: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost2",
            _$parentName: "TipNaAktivnost1",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.TipNaAktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Prostorija",
            screen: lightSwitchApplication.ДодајИзмениАктивност,
            data: lightSwitchApplication.Prostorija,
            value: lightSwitchApplication.Prostorija
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ДодајИзмениАктивност
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ДодајИзмениАктивност, {
        /// <field>
        /// Called when a new ДодајИзмениАктивност screen is created.
        /// <br/>created(msls.application.ДодајИзмениАктивност screen)
        /// </field>
        created: [lightSwitchApplication.ДодајИзмениАктивност],
        /// <field>
        /// Called before changes on an active ДодајИзмениАктивност screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ДодајИзмениАктивност screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ДодајИзмениАктивност],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("left"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Den"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the PredmetTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PredmetTemplate_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("PredmetTemplate"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Ime"); }],
        /// <field>
        /// Called after the TipNaAktivnost1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost1_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("TipNaAktivnost1"); }],
        /// <field>
        /// Called after the TipNaAktivnost2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost2_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("TipNaAktivnost2"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Vreme_kraj"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("right"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.ДодајИзмениАктивност().findContentItem("RowTemplate2"); }]
    });

    lightSwitchApplication.ПрегледАктивност.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ПрегледАктивност
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.ПрегледАктивност,
            value: lightSwitchApplication.ПрегледАктивност
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.ПрегледАктивност,
            value: lightSwitchApplication.Aktivnost
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Predmet: {
            _$class: msls.ContentItem,
            _$name: "Predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Predmet
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "Predmet",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "left",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Profesor
        },
        Prostorija: {
            _$class: msls.ContentItem,
            _$name: "Prostorija",
            _$parentName: "left",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Prostorija
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "right",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "right",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "right",
            screen: lightSwitchApplication.ПрегледАктивност,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ПрегледАктивност
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ПрегледАктивност, {
        /// <field>
        /// Called when a new ПрегледАктивност screen is created.
        /// <br/>created(msls.application.ПрегледАктивност screen)
        /// </field>
        created: [lightSwitchApplication.ПрегледАктивност],
        /// <field>
        /// Called before changes on an active ПрегледАктивност screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ПрегледАктивност screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ПрегледАктивност],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("left"); }],
        /// <field>
        /// Called after the Predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmet_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Prostorija content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prostorija_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Prostorija"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("right"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивност().findContentItem("Vreme_kraj"); }]
    });

    lightSwitchApplication.ПрегледАктивности.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ПрегледАктивности
        },
        AktivnostList: {
            _$class: msls.ContentItem,
            _$name: "AktivnostList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.ПрегледАктивности,
            value: lightSwitchApplication.ПрегледАктивности
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "AktivnostList",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.ПрегледАктивности,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ПрегледАктивности,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: String
        },
        TipNaAktivnost: {
            _$class: msls.ContentItem,
            _$name: "TipNaAktivnost",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.TipNaAktivnost
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: String
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Vreme_pocetok1: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok1",
            _$parentName: "Group",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj1: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj1",
            _$parentName: "Group",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "rows",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "rows",
            screen: lightSwitchApplication.ПрегледАктивности,
            data: lightSwitchApplication.Aktivnost,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ПрегледАктивности
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ПрегледАктивности, {
        /// <field>
        /// Called when a new ПрегледАктивности screen is created.
        /// <br/>created(msls.application.ПрегледАктивности screen)
        /// </field>
        created: [lightSwitchApplication.ПрегледАктивности],
        /// <field>
        /// Called before changes on an active ПрегледАктивности screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ПрегледАктивности screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ПрегледАктивности],
        /// <field>
        /// Called after the AktivnostList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AktivnostList_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("AktivnostList"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("rows"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Den"); }],
        /// <field>
        /// Called after the TipNaAktivnost content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TipNaAktivnost_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("TipNaAktivnost"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Group"); }],
        /// <field>
        /// Called after the Vreme_pocetok1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok1_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Vreme_pocetok1"); }],
        /// <field>
        /// Called after the Vreme_kraj1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj1_postRender: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Vreme_kraj1"); }],
        /// <field>
        /// Called to render the Vreme_pocetok content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_render: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called to render the Vreme_kraj content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_render: [$element, function () { return new lightSwitchApplication.ПрегледАктивности().findContentItem("Vreme_kraj"); }]
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
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Profesor1: {
            _$class: msls.ContentItem,
            _$name: "Profesor1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor1",
            screen: lightSwitchApplication.ДодајПредмет,
            data: lightSwitchApplication.Profesor,
            value: String
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
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Profesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Profesor1"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ДодајПредмет().findContentItem("Prezime"); }],
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
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "rows",
            screen: lightSwitchApplication.ДодајПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: String
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
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
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
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Den"); }],
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
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ДодајПрофесор().findContentItem("Nasoka"); }]
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
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "left",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ДодајСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
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
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
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
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПредмет().findContentItem("Nasoka"); }],
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
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "rows",
            screen: lightSwitchApplication.ИзмениПрофесор,
            data: lightSwitchApplication.Aktivnost,
            value: String
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
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
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
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Den"); }],
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
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ИзмениПрофесор().findContentItem("Nasoka"); }]
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
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: String
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
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "left",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ИзмениСтудент,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
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
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("Br_indeks"); }],
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
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.ИзмениСтудент().findContentItem("ActiveStudent"); }]
    });

    lightSwitchApplication.ЛистаНаПредмети.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ЛистаНаПредмети
        },
        PredmetList: {
            _$class: msls.ContentItem,
            _$name: "PredmetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.ЛистаНаПредмети,
            value: lightSwitchApplication.ЛистаНаПредмети
        },
        Predmets: {
            _$class: msls.ContentItem,
            _$name: "Predmets",
            _$parentName: "PredmetList",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.ЛистаНаПредмети,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ЛистаНаПредмети,
                _$entry: {
                    elementType: lightSwitchApplication.Predmet
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Predmets",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        Ime1: {
            _$class: msls.ContentItem,
            _$name: "Ime1",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.ЛистаНаПредмети,
            value: lightSwitchApplication.ЛистаНаПредмети
        },
        Students: {
            _$class: msls.ContentItem,
            _$name: "Students",
            _$parentName: "Group",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.ЛистаНаПредмети,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ЛистаНаПредмети,
                _$entry: {
                    elementType: lightSwitchApplication.Student
                }
            }
        },
        StudentsTemplate: {
            _$class: msls.ContentItem,
            _$name: "StudentsTemplate",
            _$parentName: "Students",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime2: {
            _$class: msls.ContentItem,
            _$name: "Ime2",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime1: {
            _$class: msls.ContentItem,
            _$name: "Prezime1",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka1: {
            _$class: msls.ContentItem,
            _$name: "Nasoka1",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: String
        },
        Semestar2: {
            _$class: msls.ContentItem,
            _$name: "Semestar2",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        ActiveStudent: {
            _$class: msls.ContentItem,
            _$name: "ActiveStudent",
            _$parentName: "StudentsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Student,
            value: Boolean
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.ЛистаНаПредмети,
            value: lightSwitchApplication.ЛистаНаПредмети
        },
        Profesors: {
            _$class: msls.ContentItem,
            _$name: "Profesors",
            _$parentName: "Group1",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.ЛистаНаПредмети,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ЛистаНаПредмети,
                _$entry: {
                    elementType: lightSwitchApplication.Profesor
                }
            }
        },
        ProfesorsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProfesorsTemplate",
            _$parentName: "Profesors",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Br_kabinet1: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Korisnicko_ime1: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka2: {
            _$class: msls.ContentItem,
            _$name: "Lozinka2",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Ime4: {
            _$class: msls.ContentItem,
            _$name: "Ime4",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime3: {
            _$class: msls.ContentItem,
            _$name: "Prezime3",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Titula1: {
            _$class: msls.ContentItem,
            _$name: "Titula1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Email2: {
            _$class: msls.ContentItem,
            _$name: "Email2",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Telefon1: {
            _$class: msls.ContentItem,
            _$name: "Telefon1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        ActiveProfesor1: {
            _$class: msls.ContentItem,
            _$name: "ActiveProfesor1",
            _$parentName: "ProfesorsTemplate",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Profesor,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ЛистаНаПредмети
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ЛистаНаПредмети, {
        /// <field>
        /// Called when a new ЛистаНаПредмети screen is created.
        /// <br/>created(msls.application.ЛистаНаПредмети screen)
        /// </field>
        created: [lightSwitchApplication.ЛистаНаПредмети],
        /// <field>
        /// Called before changes on an active ЛистаНаПредмети screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ЛистаНаПредмети screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ЛистаНаПредмети],
        /// <field>
        /// Called after the PredmetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PredmetList_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("PredmetList"); }],
        /// <field>
        /// Called after the Predmets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Predmets_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Predmets"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("rows"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the Ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Ime1"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Group"); }],
        /// <field>
        /// Called after the Students content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Students_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Students"); }],
        /// <field>
        /// Called after the StudentsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StudentsTemplate_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("StudentsTemplate"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Ime2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime2_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Ime2"); }],
        /// <field>
        /// Called after the Prezime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Prezime1"); }],
        /// <field>
        /// Called after the Nasoka1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Nasoka1"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Email"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Lozinka"); }],
        /// <field>
        /// Called after the Semestar2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar2_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Semestar2"); }],
        /// <field>
        /// Called after the ActiveStudent content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveStudent_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("ActiveStudent"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Profesors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesors_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Profesors"); }],
        /// <field>
        /// Called after the ProfesorsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfesorsTemplate_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("ProfesorsTemplate"); }],
        /// <field>
        /// Called after the Br_kabinet1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Br_kabinet1"); }],
        /// <field>
        /// Called after the Korisnicko_ime1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Korisnicko_ime1"); }],
        /// <field>
        /// Called after the Lozinka2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka2_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Lozinka2"); }],
        /// <field>
        /// Called after the Ime4 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime4_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Ime4"); }],
        /// <field>
        /// Called after the Prezime3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime3_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Prezime3"); }],
        /// <field>
        /// Called after the Titula1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Titula1"); }],
        /// <field>
        /// Called after the Email2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email2_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Email2"); }],
        /// <field>
        /// Called after the Telefon1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Telefon1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Telefon1"); }],
        /// <field>
        /// Called after the ActiveProfesor1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActiveProfesor1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("ActiveProfesor1"); }]
    });

    lightSwitchApplication.ЛистаНаПрофесори.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ЛистаНаПрофесори
        },
        ProfesorList: {
            _$class: msls.ContentItem,
            _$name: "ProfesorList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.ЛистаНаПрофесори,
            value: lightSwitchApplication.ЛистаНаПрофесори
        },
        Profesors: {
            _$class: msls.ContentItem,
            _$name: "Profesors",
            _$parentName: "ProfesorList",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.ЛистаНаПрофесори,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ЛистаНаПрофесори,
                _$entry: {
                    elementType: lightSwitchApplication.Profesor
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Profesors",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Titula: {
            _$class: msls.ContentItem,
            _$name: "Titula",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Br_kabinet: {
            _$class: msls.ContentItem,
            _$name: "Br_kabinet",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: Number
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Korisnicko_ime: {
            _$class: msls.ContentItem,
            _$name: "Korisnicko_ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Lozinka: {
            _$class: msls.ContentItem,
            _$name: "Lozinka",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПрофесори,
            data: lightSwitchApplication.Profesor,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ЛистаНаПрофесори
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ЛистаНаПрофесори, {
        /// <field>
        /// Called when a new ЛистаНаПрофесори screen is created.
        /// <br/>created(msls.application.ЛистаНаПрофесори screen)
        /// </field>
        created: [lightSwitchApplication.ЛистаНаПрофесори],
        /// <field>
        /// Called before changes on an active ЛистаНаПрофесори screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ЛистаНаПрофесори screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ЛистаНаПрофесори],
        /// <field>
        /// Called after the ProfesorList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProfesorList_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("ProfesorList"); }],
        /// <field>
        /// Called after the Profesors content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesors_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Profesors"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("rows"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Titula content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Titula_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Titula"); }],
        /// <field>
        /// Called after the Br_kabinet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_kabinet_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Br_kabinet"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Email"); }],
        /// <field>
        /// Called after the Korisnicko_ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Korisnicko_ime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Korisnicko_ime"); }],
        /// <field>
        /// Called after the Lozinka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Lozinka_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПрофесори().findContentItem("Lozinka"); }]
    });

    lightSwitchApplication.ЛистаНаСтуденти.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ЛистаНаСтуденти
        },
        StudentList: {
            _$class: msls.ContentItem,
            _$name: "StudentList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.ЛистаНаСтуденти,
            value: lightSwitchApplication.ЛистаНаСтуденти
        },
        Students: {
            _$class: msls.ContentItem,
            _$name: "Students",
            _$parentName: "StudentList",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.ЛистаНаСтуденти,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ЛистаНаСтуденти,
                _$entry: {
                    elementType: lightSwitchApplication.Student
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Students",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Student
        },
        Br_indeks: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: String
        },
        Prezime: {
            _$class: msls.ContentItem,
            _$name: "Prezime",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: String
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: String
        },
        Br_indeks1: {
            _$class: msls.ContentItem,
            _$name: "Br_indeks1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: String
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаСтуденти,
            data: lightSwitchApplication.Student,
            value: lightSwitchApplication.Semestar
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ЛистаНаСтуденти
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ЛистаНаСтуденти, {
        /// <field>
        /// Called when a new ЛистаНаСтуденти screen is created.
        /// <br/>created(msls.application.ЛистаНаСтуденти screen)
        /// </field>
        created: [lightSwitchApplication.ЛистаНаСтуденти],
        /// <field>
        /// Called before changes on an active ЛистаНаСтуденти screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ЛистаНаСтуденти screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ЛистаНаСтуденти],
        /// <field>
        /// Called after the StudentList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StudentList_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("StudentList"); }],
        /// <field>
        /// Called after the Students content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Students_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Students"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("rows"); }],
        /// <field>
        /// Called after the Br_indeks content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Br_indeks"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Prezime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Prezime_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Prezime"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the Br_indeks1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Br_indeks1_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Br_indeks1"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Email"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаСтуденти().findContentItem("Semestar"); }]
    });

}(msls.application));