/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function ДодајИзмениАктивност(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ДодајИзмениАктивност screen.
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
        /// <field name="details" type="msls.application.ДодајИзмениАктивност.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ДодајИзмениАктивност", parameters);
    }

    function ПрегледАктивност(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ПрегледАктивност screen.
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
        /// <field name="details" type="msls.application.ПрегледАктивност.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ПрегледАктивност", parameters);
    }

    function ПрегледАктивности(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ПрегледАктивности screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Aktivnosts" type="msls.VisualCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this screen.
        /// </field>
        /// <field name="Predmet" type="msls.application.Predmet">
        /// Gets the predmet for this screen.
        /// </field>
        /// <field name="ID_predmet" type="msls.application.Predmet">
        /// Gets or sets the iD_predmet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ПрегледАктивности.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ПрегледАктивности", parameters);
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
        /// <field name="Students" type="msls.VisualCollection" elementType="msls.application.Student">
        /// Gets the students for this screen.
        /// </field>
        /// <field name="Profesors" type="msls.VisualCollection" elementType="msls.application.Profesor">
        /// Gets the profesors for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ЛистаНаПредмети.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ЛистаНаПредмети", parameters);
    }

    function ЛистаНаПрофесори(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ЛистаНаПрофесори screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Profesors" type="msls.VisualCollection" elementType="msls.application.Profesor">
        /// Gets the profesors for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ЛистаНаПрофесори.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ЛистаНаПрофесори", parameters);
    }

    function ЛистаНаСтуденти(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ЛистаНаСтуденти screen.
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
        /// <field name="details" type="msls.application.ЛистаНаСтуденти.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ЛистаНаСтуденти", parameters);
    }

    msls._addToNamespace("msls.application", {

        ДодајИзмениАктивност: $defineScreen(ДодајИзмениАктивност, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        ПрегледАктивност: $defineScreen(ПрегледАктивност, [
            { name: "Aktivnost", kind: "local", type: lightSwitchApplication.Aktivnost }
        ], [
        ]),

        ПрегледАктивности: $defineScreen(ПрегледАктивности, [
            {
                name: "Aktivnosts", kind: "collection", elementType: lightSwitchApplication.Aktivnost,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Aktivnosts.orderBy("Den").expand("TipNaAktivnost").expand("Predmet");
                }
            },
            {
                name: "Predmet", kind: "reference", type: lightSwitchApplication.Predmet,
                createQuery: function (ID_predmet) {
                    return this.dataWorkspace.On_line_rasporedData.Predmets_SingleOrDefault(ID_predmet);
                }
            },
            { name: "ID_predmet", kind: "local", type: lightSwitchApplication.Predmet }
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

        ИзмениСтудент: $defineScreen(ИзмениСтудент, [
            { name: "Student", kind: "local", type: lightSwitchApplication.Student }
        ], [
        ]),

        ЛистаНаПредмети: $defineScreen(ЛистаНаПредмети, [
            {
                name: "Predmets", kind: "collection", elementType: lightSwitchApplication.Predmet,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Predmets.filter("(ActivePredmet ne null) and (ActivePredmet eq true)").expand("Profesor").expand("Semestar");
                }
            },
            {
                name: "Students", kind: "collection", elementType: lightSwitchApplication.Student,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Students.expand("Semestar");
                }
            },
            {
                name: "Profesors", kind: "collection", elementType: lightSwitchApplication.Profesor,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Profesors;
                }
            }
        ], [
        ]),

        ЛистаНаПрофесори: $defineScreen(ЛистаНаПрофесори, [
            {
                name: "Profesors", kind: "collection", elementType: lightSwitchApplication.Profesor,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Profesors;
                }
            }
        ], [
        ]),

        ЛистаНаСтуденти: $defineScreen(ЛистаНаСтуденти, [
            {
                name: "Students", kind: "collection", elementType: lightSwitchApplication.Student,
                createQuery: function () {
                    return this.dataWorkspace.On_line_rasporedData.Students.expand("Semestar");
                }
            }
        ], [
        ]),

        showДодајИзмениАктивност: $defineShowScreen(function showДодајИзмениАктивност(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ДодајИзмениАктивност screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ДодајИзмениАктивност", parameters, options);
        }),

        showПрегледАктивност: $defineShowScreen(function showПрегледАктивност(Aktivnost, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ПрегледАктивност screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ПрегледАктивност", parameters, options);
        }),

        showПрегледАктивности: $defineShowScreen(function showПрегледАктивности(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ПрегледАктивности screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ПрегледАктивности", parameters, options);
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

        showЛистаНаПрофесори: $defineShowScreen(function showЛистаНаПрофесори(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ЛистаНаПрофесори screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ЛистаНаПрофесори", parameters, options);
        }),

        showЛистаНаСтуденти: $defineShowScreen(function showЛистаНаСтуденти(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ЛистаНаСтуденти screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ЛистаНаСтуденти", parameters, options);
        })

    });

}(msls.application));
