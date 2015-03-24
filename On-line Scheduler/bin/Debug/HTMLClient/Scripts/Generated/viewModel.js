/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function ЛистаНаПредмети(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ЛистаНаПредмети screen.
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
        /// <field name="details" type="msls.application.ЛистаНаПредмети.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ЛистаНаПредмети", parameters);
    }

    function AddEditPredmet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditPredmet screen.
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
        /// <field name="details" type="msls.application.AddEditPredmet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditPredmet", parameters);
    }

    msls._addToNamespace("msls.application", {

        ЛистаНаПредмети: $defineScreen(ЛистаНаПредмети, [
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Predmets.expand("Profesor").expand("Semestar");
                }
            }
        ], [
        ]),

        AddEditPredmet: $defineScreen(AddEditPredmet, [
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

        showЛистаНаПредмети: $defineShowScreen(function showЛистаНаПредмети(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ЛистаНаПредмети screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ЛистаНаПредмети", parameters, options);
        }),

        showAddEditPredmet: $defineShowScreen(function showAddEditPredmet(Predmet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditPredmet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditPredmet", parameters, options);
        })

    });

}(msls.application));
