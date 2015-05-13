/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Aktivnost(entitySet) {
        /// <summary>
        /// Represents the Aktivnost entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this aktivnost.
        /// </param>
        /// <field name="Vreme_pocetok" type="Date">
        /// Gets or sets the vreme_pocetok for this aktivnost.
        /// </field>
        /// <field name="Vreme_kraj" type="Date">
        /// Gets or sets the vreme_kraj for this aktivnost.
        /// </field>
        /// <field name="ID_aktivnost" type="Number">
        /// Gets or sets the iD_aktivnost for this aktivnost.
        /// </field>
        /// <field name="Predmet" type="msls.application.Predmet">
        /// Gets or sets the predmet for this aktivnost.
        /// </field>
        /// <field name="Profesor" type="msls.application.Profesor">
        /// Gets or sets the profesor for this aktivnost.
        /// </field>
        /// <field name="Prostorija" type="msls.application.Prostorija">
        /// Gets or sets the prostorija for this aktivnost.
        /// </field>
        /// <field name="TipNaAktivnost" type="msls.application.TipNaAktivnost">
        /// Gets or sets the tipNaAktivnost for this aktivnost.
        /// </field>
        /// <field name="Den" type="msls.application.Den">
        /// Gets or sets the den for this aktivnost.
        /// </field>
        /// <field name="Otkazan" type="Boolean">
        /// Gets or sets the otkazan for this aktivnost.
        /// </field>
        /// <field name="details" type="msls.application.Aktivnost.Details">
        /// Gets the details for this aktivnost.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Den(entitySet) {
        /// <summary>
        /// Represents the Den entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this den.
        /// </param>
        /// <field name="ID_Den" type="Number">
        /// Gets or sets the iD_Den for this den.
        /// </field>
        /// <field name="Den1" type="String">
        /// Gets or sets the den1 for this den.
        /// </field>
        /// <field name="Aktivnosts" type="msls.EntityCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this den.
        /// </field>
        /// <field name="details" type="msls.application.Den.Details">
        /// Gets the details for this den.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Izbrani_predmeti(entitySet) {
        /// <summary>
        /// Represents the Izbrani_predmeti entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this izbrani_predmeti.
        /// </param>
        /// <field name="tekoven_semestar" type="String">
        /// Gets or sets the tekoven_semestar for this izbrani_predmeti.
        /// </field>
        /// <field name="ID_izbraniPredmeti" type="Number">
        /// Gets or sets the iD_izbraniPredmeti for this izbrani_predmeti.
        /// </field>
        /// <field name="Predmet" type="msls.application.Predmet">
        /// Gets or sets the predmet for this izbrani_predmeti.
        /// </field>
        /// <field name="Student" type="msls.application.Student">
        /// Gets or sets the student for this izbrani_predmeti.
        /// </field>
        /// <field name="details" type="msls.application.Izbrani_predmeti.Details">
        /// Gets the details for this izbrani_predmeti.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Nasoka(entitySet) {
        /// <summary>
        /// Represents the Nasoka entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this nasoka.
        /// </param>
        /// <field name="ID_Nasoka" type="Number">
        /// Gets or sets the iD_Nasoka for this nasoka.
        /// </field>
        /// <field name="Nasok" type="String">
        /// Gets or sets the nasok for this nasoka.
        /// </field>
        /// <field name="Predmets" type="msls.EntityCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this nasoka.
        /// </field>
        /// <field name="Students" type="msls.EntityCollection" elementType="msls.application.Student">
        /// Gets the students for this nasoka.
        /// </field>
        /// <field name="details" type="msls.application.Nasoka.Details">
        /// Gets the details for this nasoka.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Predmet(entitySet) {
        /// <summary>
        /// Represents the Predmet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this predmet.
        /// </param>
        /// <field name="ID_predmet" type="String">
        /// Gets or sets the iD_predmet for this predmet.
        /// </field>
        /// <field name="Ime" type="String">
        /// Gets or sets the ime for this predmet.
        /// </field>
        /// <field name="Aktivnosts" type="msls.EntityCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this predmet.
        /// </field>
        /// <field name="Izbrani_predmetis" type="msls.EntityCollection" elementType="msls.application.Izbrani_predmeti">
        /// Gets the izbrani_predmetis for this predmet.
        /// </field>
        /// <field name="ActivePredmet" type="Boolean">
        /// Gets or sets the activePredmet for this predmet.
        /// </field>
        /// <field name="Profesor" type="msls.application.Profesor">
        /// Gets or sets the profesor for this predmet.
        /// </field>
        /// <field name="Semestar" type="msls.application.Semestar">
        /// Gets or sets the semestar for this predmet.
        /// </field>
        /// <field name="br_krediti" type="Number">
        /// Gets or sets the br_krediti for this predmet.
        /// </field>
        /// <field name="StatusPredmet" type="msls.application.StatusPredmet">
        /// Gets or sets the statusPredmet for this predmet.
        /// </field>
        /// <field name="Nasoka1" type="msls.application.Nasoka">
        /// Gets or sets the nasoka1 for this predmet.
        /// </field>
        /// <field name="SpisokPolaganjes" type="msls.EntityCollection" elementType="msls.application.SpisokPolaganje">
        /// Gets the spisokPolaganjes for this predmet.
        /// </field>
        /// <field name="details" type="msls.application.Predmet.Details">
        /// Gets the details for this predmet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Profesor(entitySet) {
        /// <summary>
        /// Represents the Profesor entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this profesor.
        /// </param>
        /// <field name="Br_kabinet" type="Number">
        /// Gets or sets the br_kabinet for this profesor.
        /// </field>
        /// <field name="Korisnicko_ime" type="String">
        /// Gets or sets the korisnicko_ime for this profesor.
        /// </field>
        /// <field name="Lozinka" type="String">
        /// Gets or sets the lozinka for this profesor.
        /// </field>
        /// <field name="Ime" type="String">
        /// Gets or sets the ime for this profesor.
        /// </field>
        /// <field name="Prezime" type="String">
        /// Gets or sets the prezime for this profesor.
        /// </field>
        /// <field name="Titula" type="String">
        /// Gets or sets the titula for this profesor.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this profesor.
        /// </field>
        /// <field name="Telefon" type="String">
        /// Gets or sets the telefon for this profesor.
        /// </field>
        /// <field name="ID_profesor" type="Number">
        /// Gets or sets the iD_profesor for this profesor.
        /// </field>
        /// <field name="Aktivnosts" type="msls.EntityCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this profesor.
        /// </field>
        /// <field name="ActiveProfesor" type="Boolean">
        /// Gets or sets the activeProfesor for this profesor.
        /// </field>
        /// <field name="Predmets" type="msls.EntityCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this profesor.
        /// </field>
        /// <field name="details" type="msls.application.Profesor.Details">
        /// Gets the details for this profesor.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Prostorija(entitySet) {
        /// <summary>
        /// Represents the Prostorija entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this prostorija.
        /// </param>
        /// <field name="Br_prostorija" type="Number">
        /// Gets or sets the br_prostorija for this prostorija.
        /// </field>
        /// <field name="Opis" type="String">
        /// Gets or sets the opis for this prostorija.
        /// </field>
        /// <field name="ID_prostorija" type="Number">
        /// Gets or sets the iD_prostorija for this prostorija.
        /// </field>
        /// <field name="Aktivnosts" type="msls.EntityCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this prostorija.
        /// </field>
        /// <field name="details" type="msls.application.Prostorija.Details">
        /// Gets the details for this prostorija.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Semestar(entitySet) {
        /// <summary>
        /// Represents the Semestar entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this semestar.
        /// </param>
        /// <field name="ID_semestar" type="Number">
        /// Gets or sets the iD_semestar for this semestar.
        /// </field>
        /// <field name="Br_semestar" type="Number">
        /// Gets or sets the br_semestar for this semestar.
        /// </field>
        /// <field name="Students" type="msls.EntityCollection" elementType="msls.application.Student">
        /// Gets the students for this semestar.
        /// </field>
        /// <field name="Predmets" type="msls.EntityCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this semestar.
        /// </field>
        /// <field name="details" type="msls.application.Semestar.Details">
        /// Gets the details for this semestar.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function SpisokPolaganje(entitySet) {
        /// <summary>
        /// Represents the SpisokPolaganje entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this spisokPolaganje.
        /// </param>
        /// <field name="ID_spisok" type="Number">
        /// Gets or sets the iD_spisok for this spisokPolaganje.
        /// </field>
        /// <field name="Predmet" type="msls.application.Predmet">
        /// Gets or sets the predmet for this spisokPolaganje.
        /// </field>
        /// <field name="Student" type="msls.application.Student">
        /// Gets or sets the student for this spisokPolaganje.
        /// </field>
        /// <field name="details" type="msls.application.SpisokPolaganje.Details">
        /// Gets the details for this spisokPolaganje.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function StatusPredmet(entitySet) {
        /// <summary>
        /// Represents the StatusPredmet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this statusPredmet.
        /// </param>
        /// <field name="ID_Status" type="Number">
        /// Gets or sets the iD_Status for this statusPredmet.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this statusPredmet.
        /// </field>
        /// <field name="Predmets" type="msls.EntityCollection" elementType="msls.application.Predmet">
        /// Gets the predmets for this statusPredmet.
        /// </field>
        /// <field name="details" type="msls.application.StatusPredmet.Details">
        /// Gets the details for this statusPredmet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Student(entitySet) {
        /// <summary>
        /// Represents the Student entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this student.
        /// </param>
        /// <field name="Br_indeks" type="String">
        /// Gets or sets the br_indeks for this student.
        /// </field>
        /// <field name="Ime" type="String">
        /// Gets or sets the ime for this student.
        /// </field>
        /// <field name="Prezime" type="String">
        /// Gets or sets the prezime for this student.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this student.
        /// </field>
        /// <field name="Lozinka" type="String">
        /// Gets or sets the lozinka for this student.
        /// </field>
        /// <field name="Izbrani_predmetis" type="msls.EntityCollection" elementType="msls.application.Izbrani_predmeti">
        /// Gets the izbrani_predmetis for this student.
        /// </field>
        /// <field name="Semestar" type="msls.application.Semestar">
        /// Gets or sets the semestar for this student.
        /// </field>
        /// <field name="ActiveStudent" type="Boolean">
        /// Gets or sets the activeStudent for this student.
        /// </field>
        /// <field name="Nasoka1" type="msls.application.Nasoka">
        /// Gets or sets the nasoka1 for this student.
        /// </field>
        /// <field name="SpisokPolaganjes" type="msls.EntityCollection" elementType="msls.application.SpisokPolaganje">
        /// Gets the spisokPolaganjes for this student.
        /// </field>
        /// <field name="details" type="msls.application.Student.Details">
        /// Gets the details for this student.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function sysdiagram(entitySet) {
        /// <summary>
        /// Represents the sysdiagram entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this sysdiagram.
        /// </param>
        /// <field name="name" type="String">
        /// Gets or sets the name for this sysdiagram.
        /// </field>
        /// <field name="principal_id" type="Number">
        /// Gets or sets the principal_id for this sysdiagram.
        /// </field>
        /// <field name="diagram_id" type="Number">
        /// Gets or sets the diagram_id for this sysdiagram.
        /// </field>
        /// <field name="version" type="Number">
        /// Gets or sets the version for this sysdiagram.
        /// </field>
        /// <field name="definition" type="String">
        /// Gets or sets the definition for this sysdiagram.
        /// </field>
        /// <field name="details" type="msls.application.sysdiagram.Details">
        /// Gets the details for this sysdiagram.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TipNaAktivnost(entitySet) {
        /// <summary>
        /// Represents the TipNaAktivnost entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tipNaAktivnost.
        /// </param>
        /// <field name="Ime" type="String">
        /// Gets or sets the ime for this tipNaAktivnost.
        /// </field>
        /// <field name="ID_tipNaAktivnost" type="Number">
        /// Gets or sets the iD_tipNaAktivnost for this tipNaAktivnost.
        /// </field>
        /// <field name="Aktivnosts" type="msls.EntityCollection" elementType="msls.application.Aktivnost">
        /// Gets the aktivnosts for this tipNaAktivnost.
        /// </field>
        /// <field name="Povtoruvacki" type="Boolean">
        /// Gets or sets the povtoruvacki for this tipNaAktivnost.
        /// </field>
        /// <field name="details" type="msls.application.TipNaAktivnost.Details">
        /// Gets the details for this tipNaAktivnost.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function vw_Aktivnosti(entitySet) {
        /// <summary>
        /// Represents the vw_Aktivnosti entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this vw_Aktivnosti.
        /// </param>
        /// <field name="ID_aktivnost" type="Number">
        /// Gets or sets the iD_aktivnost for this vw_Aktivnosti.
        /// </field>
        /// <field name="Br_prostorija" type="Number">
        /// Gets or sets the br_prostorija for this vw_Aktivnosti.
        /// </field>
        /// <field name="Opis" type="String">
        /// Gets or sets the opis for this vw_Aktivnosti.
        /// </field>
        /// <field name="Ime" type="String">
        /// Gets or sets the ime for this vw_Aktivnosti.
        /// </field>
        /// <field name="Profesor_Ime" type="String">
        /// Gets or sets the profesor_Ime for this vw_Aktivnosti.
        /// </field>
        /// <field name="Vreme_pocetok" type="Date">
        /// Gets or sets the vreme_pocetok for this vw_Aktivnosti.
        /// </field>
        /// <field name="Vreme_kraj" type="Date">
        /// Gets or sets the vreme_kraj for this vw_Aktivnosti.
        /// </field>
        /// <field name="otkazan" type="Boolean">
        /// Gets or sets the otkazan for this vw_Aktivnosti.
        /// </field>
        /// <field name="Den" type="String">
        /// Gets or sets the den for this vw_Aktivnosti.
        /// </field>
        /// <field name="Povtoruvacki" type="Boolean">
        /// Gets or sets the povtoruvacki for this vw_Aktivnosti.
        /// </field>
        /// <field name="ID_Den" type="Number">
        /// Gets or sets the iD_Den for this vw_Aktivnosti.
        /// </field>
        /// <field name="ImePredmet" type="String">
        /// Gets or sets the imePredmet for this vw_Aktivnosti.
        /// </field>
        /// <field name="Id_Predmet" type="String">
        /// Gets or sets the id_Predmet for this vw_Aktivnosti.
        /// </field>
        /// <field name="BR_Semestar" type="Number">
        /// Gets or sets the bR_Semestar for this vw_Aktivnosti.
        /// </field>
        /// <field name="details" type="msls.application.vw_Aktivnosti.Details">
        /// Gets the details for this vw_Aktivnosti.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function On_line_rasporedData(dataWorkspace) {
        /// <summary>
        /// Represents the On_line_rasporedData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Aktivnosts" type="msls.EntitySet">
        /// Gets the Aktivnosts entity set.
        /// </field>
        /// <field name="Dens" type="msls.EntitySet">
        /// Gets the Dens entity set.
        /// </field>
        /// <field name="Izbrani_predmetis" type="msls.EntitySet">
        /// Gets the Izbrani_predmetis entity set.
        /// </field>
        /// <field name="Nasokas" type="msls.EntitySet">
        /// Gets the Nasokas entity set.
        /// </field>
        /// <field name="Predmets" type="msls.EntitySet">
        /// Gets the Predmets entity set.
        /// </field>
        /// <field name="Profesors" type="msls.EntitySet">
        /// Gets the Profesors entity set.
        /// </field>
        /// <field name="Prostorijas" type="msls.EntitySet">
        /// Gets the Prostorijas entity set.
        /// </field>
        /// <field name="Semestars" type="msls.EntitySet">
        /// Gets the Semestars entity set.
        /// </field>
        /// <field name="SpisokPolaganjes" type="msls.EntitySet">
        /// Gets the SpisokPolaganjes entity set.
        /// </field>
        /// <field name="StatusPredmets" type="msls.EntitySet">
        /// Gets the StatusPredmets entity set.
        /// </field>
        /// <field name="Students" type="msls.EntitySet">
        /// Gets the Students entity set.
        /// </field>
        /// <field name="sysdiagrams" type="msls.EntitySet">
        /// Gets the sysdiagrams entity set.
        /// </field>
        /// <field name="TipNaAktivnosts" type="msls.EntitySet">
        /// Gets the TipNaAktivnosts entity set.
        /// </field>
        /// <field name="vw_Aktivnostis" type="msls.EntitySet">
        /// Gets the vw_Aktivnostis entity set.
        /// </field>
        /// <field name="details" type="msls.application.On_line_rasporedData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="On_line_rasporedData" type="msls.application.On_line_rasporedData">
        /// Gets the On_line_rasporedData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Aktivnost: $defineEntity(Aktivnost, [
            { name: "Vreme_pocetok", type: Date },
            { name: "Vreme_kraj", type: Date },
            { name: "ID_aktivnost", type: Number, isReadOnly: true },
            { name: "Predmet", kind: "reference", type: Predmet },
            { name: "Profesor", kind: "reference", type: Profesor },
            { name: "Prostorija", kind: "reference", type: Prostorija },
            { name: "TipNaAktivnost", kind: "reference", type: TipNaAktivnost },
            { name: "Den", kind: "reference", type: Den },
            { name: "Otkazan", type: Boolean }
        ]),

        Den: $defineEntity(Den, [
            { name: "ID_Den", type: Number, isReadOnly: true },
            { name: "Den1", type: String },
            { name: "Aktivnosts", kind: "collection", elementType: Aktivnost }
        ]),

        Izbrani_predmeti: $defineEntity(Izbrani_predmeti, [
            { name: "tekoven_semestar", type: String },
            { name: "ID_izbraniPredmeti", type: Number, isReadOnly: true },
            { name: "Predmet", kind: "reference", type: Predmet },
            { name: "Student", kind: "reference", type: Student }
        ]),

        Nasoka: $defineEntity(Nasoka, [
            { name: "ID_Nasoka", type: Number, isReadOnly: true },
            { name: "Nasok", type: String },
            { name: "Predmets", kind: "collection", elementType: Predmet },
            { name: "Students", kind: "collection", elementType: Student }
        ]),

        Predmet: $defineEntity(Predmet, [
            { name: "ID_predmet", type: String },
            { name: "Ime", type: String },
            { name: "Aktivnosts", kind: "collection", elementType: Aktivnost },
            { name: "Izbrani_predmetis", kind: "collection", elementType: Izbrani_predmeti },
            { name: "ActivePredmet", type: Boolean },
            { name: "Profesor", kind: "reference", type: Profesor },
            { name: "Semestar", kind: "reference", type: Semestar },
            { name: "br_krediti", type: Number },
            { name: "StatusPredmet", kind: "reference", type: StatusPredmet },
            { name: "Nasoka1", kind: "reference", type: Nasoka },
            { name: "SpisokPolaganjes", kind: "collection", elementType: SpisokPolaganje }
        ]),

        Profesor: $defineEntity(Profesor, [
            { name: "Br_kabinet", type: Number },
            { name: "Korisnicko_ime", type: String },
            { name: "Lozinka", type: String },
            { name: "Ime", type: String },
            { name: "Prezime", type: String },
            { name: "Titula", type: String },
            { name: "Email", type: String },
            { name: "Telefon", type: String },
            { name: "ID_profesor", type: Number, isReadOnly: true },
            { name: "Aktivnosts", kind: "collection", elementType: Aktivnost },
            { name: "ActiveProfesor", type: Boolean },
            { name: "Predmets", kind: "collection", elementType: Predmet }
        ]),

        Prostorija: $defineEntity(Prostorija, [
            { name: "Br_prostorija", type: Number },
            { name: "Opis", type: String },
            { name: "ID_prostorija", type: Number, isReadOnly: true },
            { name: "Aktivnosts", kind: "collection", elementType: Aktivnost }
        ]),

        Semestar: $defineEntity(Semestar, [
            { name: "ID_semestar", type: Number },
            { name: "Br_semestar", type: Number },
            { name: "Students", kind: "collection", elementType: Student },
            { name: "Predmets", kind: "collection", elementType: Predmet }
        ]),

        SpisokPolaganje: $defineEntity(SpisokPolaganje, [
            { name: "ID_spisok", type: Number, isReadOnly: true },
            { name: "Predmet", kind: "reference", type: Predmet },
            { name: "Student", kind: "reference", type: Student }
        ]),

        StatusPredmet: $defineEntity(StatusPredmet, [
            { name: "ID_Status", type: Number, isReadOnly: true },
            { name: "Status", type: String },
            { name: "Predmets", kind: "collection", elementType: Predmet }
        ]),

        Student: $defineEntity(Student, [
            { name: "Br_indeks", type: String },
            { name: "Ime", type: String },
            { name: "Prezime", type: String },
            { name: "Email", type: String },
            { name: "Lozinka", type: String },
            { name: "Izbrani_predmetis", kind: "collection", elementType: Izbrani_predmeti },
            { name: "Semestar", kind: "reference", type: Semestar },
            { name: "ActiveStudent", type: Boolean },
            { name: "Nasoka1", kind: "reference", type: Nasoka },
            { name: "SpisokPolaganjes", kind: "collection", elementType: SpisokPolaganje }
        ]),

        sysdiagram: $defineEntity(sysdiagram, [
            { name: "name", type: String },
            { name: "principal_id", type: Number },
            { name: "diagram_id", type: Number, isReadOnly: true },
            { name: "version", type: Number },
            { name: "definition", type: String }
        ]),

        TipNaAktivnost: $defineEntity(TipNaAktivnost, [
            { name: "Ime", type: String },
            { name: "ID_tipNaAktivnost", type: Number, isReadOnly: true },
            { name: "Aktivnosts", kind: "collection", elementType: Aktivnost },
            { name: "Povtoruvacki", type: Boolean }
        ]),

        vw_Aktivnosti: $defineEntity(vw_Aktivnosti, [
            { name: "ID_aktivnost", type: Number },
            { name: "Br_prostorija", type: Number },
            { name: "Opis", type: String },
            { name: "Ime", type: String },
            { name: "Profesor_Ime", type: String },
            { name: "Vreme_pocetok", type: Date },
            { name: "Vreme_kraj", type: Date },
            { name: "otkazan", type: Boolean },
            { name: "Den", type: String },
            { name: "Povtoruvacki", type: Boolean },
            { name: "ID_Den", type: Number },
            { name: "ImePredmet", type: String },
            { name: "Id_Predmet", type: String },
            { name: "BR_Semestar", type: Number }
        ]),

        On_line_rasporedData: $defineDataService(On_line_rasporedData, lightSwitchApplication.rootUri + "/On_line_rasporedData.svc", [
            { name: "Aktivnosts", elementType: Aktivnost },
            { name: "Dens", elementType: Den },
            { name: "Izbrani_predmetis", elementType: Izbrani_predmeti },
            { name: "Nasokas", elementType: Nasoka },
            { name: "Predmets", elementType: Predmet },
            { name: "Profesors", elementType: Profesor },
            { name: "Prostorijas", elementType: Prostorija },
            { name: "Semestars", elementType: Semestar },
            { name: "SpisokPolaganjes", elementType: SpisokPolaganje },
            { name: "StatusPredmets", elementType: StatusPredmet },
            { name: "Students", elementType: Student },
            { name: "sysdiagrams", elementType: sysdiagram },
            { name: "TipNaAktivnosts", elementType: TipNaAktivnost },
            { name: "vw_Aktivnostis", elementType: vw_Aktivnosti }
        ], [
            {
                name: "Aktivnosts_SingleOrDefault", value: function (ID_aktivnost) {
                    return new $DataServiceQuery({ _entitySet: this.Aktivnosts },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Aktivnosts(" + "ID_aktivnost=" + $toODataString(ID_aktivnost, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Dens_SingleOrDefault", value: function (ID_Den) {
                    return new $DataServiceQuery({ _entitySet: this.Dens },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Dens(" + "ID_Den=" + $toODataString(ID_Den, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Izbrani_predmetis_SingleOrDefault", value: function (ID_izbraniPredmeti) {
                    return new $DataServiceQuery({ _entitySet: this.Izbrani_predmetis },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Izbrani_predmetis(" + "ID_izbraniPredmeti=" + $toODataString(ID_izbraniPredmeti, "Int32?") + ")"
                    );
                }
            },
            {
                name: "IzbranikPredmetiPoStudent", value: function (Br_indeks) {
                    return new $DataServiceQuery({ _entitySet: this.Izbrani_predmetis },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/IzbranikPredmetiPoStudent()",
                        {
                            Br_indeks: $toODataString(Br_indeks, "String?")
                        });
                }
            },
            {
                name: "Nasokas_SingleOrDefault", value: function (ID_Nasoka) {
                    return new $DataServiceQuery({ _entitySet: this.Nasokas },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Nasokas(" + "ID_Nasoka=" + $toODataString(ID_Nasoka, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Predmets_SingleOrDefault", value: function (ID_predmet) {
                    return new $DataServiceQuery({ _entitySet: this.Predmets },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Predmets(" + "ID_predmet=" + $toODataString(ID_predmet, "String?") + ")"
                    );
                }
            },
            {
                name: "GetPredmetByID", value: function (ID_predmet) {
                    return new $DataServiceQuery({ _entitySet: this.Predmets },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/GetPredmetByID()",
                        {
                            ID_predmet: $toODataString(ID_predmet, "String?")
                        });
                }
            },
            {
                name: "Profesors_SingleOrDefault", value: function (ID_profesor) {
                    return new $DataServiceQuery({ _entitySet: this.Profesors },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Profesors(" + "ID_profesor=" + $toODataString(ID_profesor, "Int32?") + ")"
                    );
                }
            },
            {
                name: "GetProfesorByUsername", value: function (Korisnicko_ime) {
                    return new $DataServiceQuery({ _entitySet: this.Profesors },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/GetProfesorByUsername()",
                        {
                            Korisnicko_ime: $toODataString(Korisnicko_ime, "String?")
                        });
                }
            },
            {
                name: "Prostorijas_SingleOrDefault", value: function (ID_prostorija) {
                    return new $DataServiceQuery({ _entitySet: this.Prostorijas },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Prostorijas(" + "ID_prostorija=" + $toODataString(ID_prostorija, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Semestars_SingleOrDefault", value: function (ID_semestar) {
                    return new $DataServiceQuery({ _entitySet: this.Semestars },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Semestars(" + "ID_semestar=" + $toODataString(ID_semestar, "Int32?") + ")"
                    );
                }
            },
            {
                name: "SpisokPolaganjes_SingleOrDefault", value: function (ID_spisok) {
                    return new $DataServiceQuery({ _entitySet: this.SpisokPolaganjes },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/SpisokPolaganjes(" + "ID_spisok=" + $toODataString(ID_spisok, "Int32?") + ")"
                    );
                }
            },
            {
                name: "StatusPredmets_SingleOrDefault", value: function (ID_Status) {
                    return new $DataServiceQuery({ _entitySet: this.StatusPredmets },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/StatusPredmets(" + "ID_Status=" + $toODataString(ID_Status, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Students_SingleOrDefault", value: function (Br_indeks) {
                    return new $DataServiceQuery({ _entitySet: this.Students },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/Students(" + "Br_indeks=" + $toODataString(Br_indeks, "String?") + ")"
                    );
                }
            },
            {
                name: "sysdiagrams_SingleOrDefault", value: function (diagram_id) {
                    return new $DataServiceQuery({ _entitySet: this.sysdiagrams },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/sysdiagrams(" + "diagram_id=" + $toODataString(diagram_id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TipNaAktivnosts_SingleOrDefault", value: function (ID_tipNaAktivnost) {
                    return new $DataServiceQuery({ _entitySet: this.TipNaAktivnosts },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/TipNaAktivnosts(" + "ID_tipNaAktivnost=" + $toODataString(ID_tipNaAktivnost, "Int32?") + ")"
                    );
                }
            },
            {
                name: "vw_Aktivnostis_SingleOrDefault", value: function (ID_aktivnost, ID_Den, Id_Predmet) {
                    return new $DataServiceQuery({ _entitySet: this.vw_Aktivnostis },
                        lightSwitchApplication.rootUri + "/On_line_rasporedData.svc" + "/vw_Aktivnostis(" + "ID_aktivnost=" + $toODataString(ID_aktivnost, "Int32?") + "," + "ID_Den=" + $toODataString(ID_Den, "Int32?") + "," + "Id_Predmet=" + $toODataString(Id_Predmet, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "On_line_rasporedData", type: On_line_rasporedData }
        ])

    });

}(msls.application));
