/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

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
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
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
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "rows",
            screen: lightSwitchApplication.ЛистаНаПредмети,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
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
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Status"); }],
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
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.ЛистаНаПредмети().findContentItem("Semestar"); }]
    });

    lightSwitchApplication.AddEditPredmet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPredmet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.AddEditPredmet,
            value: lightSwitchApplication.AddEditPredmet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.AddEditPredmet,
            value: lightSwitchApplication.Predmet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        ID_predmet: {
            _$class: msls.ContentItem,
            _$name: "ID_predmet",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Ime: {
            _$class: msls.ContentItem,
            _$name: "Ime",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        Nasoka: {
            _$class: msls.ContentItem,
            _$name: "Nasoka",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Predmet
        },
        Profesor: {
            _$class: msls.ContentItem,
            _$name: "Profesor",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Profesor
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Profesor",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Profesor,
            value: lightSwitchApplication.Profesor
        },
        Semestar: {
            _$class: msls.ContentItem,
            _$name: "Semestar",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Predmet,
            value: lightSwitchApplication.Semestar
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Semestar",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Semestar,
            value: lightSwitchApplication.Semestar
        },
        Aktivnosts: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.AddEditPredmet,
            value: lightSwitchApplication.AddEditPredmet
        },
        Aktivnosts1: {
            _$class: msls.ContentItem,
            _$name: "Aktivnosts1",
            _$parentName: "Aktivnosts",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.AddEditPredmet,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditPredmet,
                _$entry: {
                    elementType: lightSwitchApplication.Aktivnost
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Aktivnosts1",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Aktivnost,
            value: lightSwitchApplication.Aktivnost
        },
        Den: {
            _$class: msls.ContentItem,
            _$name: "Den",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Aktivnost,
            value: String
        },
        Vreme_pocetok: {
            _$class: msls.ContentItem,
            _$name: "Vreme_pocetok",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Aktivnost,
            value: Object
        },
        Vreme_kraj: {
            _$class: msls.ContentItem,
            _$name: "Vreme_kraj",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditPredmet,
            data: lightSwitchApplication.Aktivnost,
            value: Object
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditPredmet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditPredmet, {
        /// <field>
        /// Called when a new AddEditPredmet screen is created.
        /// <br/>created(msls.application.AddEditPredmet screen)
        /// </field>
        created: [lightSwitchApplication.AddEditPredmet],
        /// <field>
        /// Called before changes on an active AddEditPredmet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditPredmet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditPredmet],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("left"); }],
        /// <field>
        /// Called after the ID_predmet content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ID_predmet_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("ID_predmet"); }],
        /// <field>
        /// Called after the Ime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ime_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Ime"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Status"); }],
        /// <field>
        /// Called after the Nasoka content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Nasoka_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Nasoka"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("right"); }],
        /// <field>
        /// Called after the Profesor content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Profesor_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Profesor"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Semestar content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Semestar_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Semestar"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the Aktivnosts content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Aktivnosts"); }],
        /// <field>
        /// Called after the Aktivnosts1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Aktivnosts1_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Aktivnosts1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("rows"); }],
        /// <field>
        /// Called after the Den content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Den_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Den"); }],
        /// <field>
        /// Called after the Vreme_pocetok content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_pocetok_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Vreme_pocetok"); }],
        /// <field>
        /// Called after the Vreme_kraj content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Vreme_kraj_postRender: [$element, function () { return new lightSwitchApplication.AddEditPredmet().findContentItem("Vreme_kraj"); }]
    });

}(msls.application));