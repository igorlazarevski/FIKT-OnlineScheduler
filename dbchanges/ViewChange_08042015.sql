ALTER VIEW [dbo].[vw_Aktivnosti]
AS
SELECT    a.ID_aktivnost,  p.Br_prostorija, p.Opis, ta.Ime, prof.Ime + ' ' + prof.Prezime Profesor_Ime,
cast(convert(varchar(23),convert(date, dateadd(day, d.ID_Den-1, DATEADD(wk, DATEDIFF(wk,0,GETDATE()), 0))),121)+' '+convert(varchar(12),convert(time, a.Vreme_pocetok),121) as datetime) as Vreme_pocetok,
cast(convert(varchar(23),convert(date, dateadd(day, d.ID_Den-1, DATEADD(wk, DATEDIFF(wk,0,GETDATE()), 0))),121)+' '+convert(varchar(12),convert(time, a.Vreme_kraj),121) as datetime) as Vreme_kraj
, a.otkazan, d .Den,ta.Povtoruvacki, d.ID_Den,pred.ime ImePredmet, pred.Id_Predmet
FROM         Aktivnost a INNER JOIN
                      TipNaAktivnost ta ON ta.ID_tipNaAktivnost = a.ID_TipNaAktivnost INNER JOIN
                      Prostorija p ON p.ID_prostorija = a.ID_prostorija INNER JOIN
                      Profesor prof ON prof.ID_profesor = a.ID_profesor INNER JOIN
                      Den d ON d .ID_Den = a.ID_Den inner join
                      Predmet pred on pred.ID_Predmet = a.ID_Predmet
WHERE     a.otkazan = 0 AND ta.Povtoruvacki = 1 AND NOT EXISTS
                          (SELECT     NULL
                            FROM          Aktivnost a1 INNER JOIN
                                                   TipNaAktivnost ta1 ON ta1.ID_tipNaAktivnost = a1.ID_TipNaAktivnost INNER JOIN
                                                   Prostorija p1 ON p1.ID_prostorija = a1.ID_prostorija INNER JOIN
                                                   Profesor prof1 ON prof1.ID_profesor = a1.ID_profesor
                            WHERE      a1.otkazan = 1 AND ta1.Povtoruvacki = 1 AND cast(a1.Vreme_pocetok AS time) = cast(a.Vreme_pocetok AS time) AND cast(a1.Vreme_kraj AS time) 
                                                   = cast(a.Vreme_kraj AS time) AND a.ID_Den = a1.ID_Den)
UNION
SELECT     a.ID_aktivnost, p.Br_prostorija, p.Opis, ta.Ime, prof.Ime + ' ' + prof.Prezime Profesor_Ime, 
cast(convert(varchar(23),convert(date, dateadd(day, d.ID_Den-1, DATEADD(wk, DATEDIFF(wk,0,GETDATE()), 0))),121)+' '+convert(varchar(12),convert(time, a.Vreme_pocetok),121) as datetime) as Vreme_pocetok,
cast(convert(varchar(23),convert(date, dateadd(day, d.ID_Den-1, DATEADD(wk, DATEDIFF(wk,0,GETDATE()), 0))),121)+' '+convert(varchar(12),convert(time, a.Vreme_kraj),121) as datetime) as Vreme_kraj
, a.otkazan, d .Den,ta.Povtoruvacki, d.ID_Den,pred.ime ImePredmet, pred.Id_Predmet
FROM         Aktivnost a INNER JOIN
                      TipNaAktivnost ta ON ta.ID_tipNaAktivnost = a.ID_TipNaAktivnost INNER JOIN
                      Prostorija p ON p.ID_prostorija = a.ID_prostorija INNER JOIN
                      Profesor prof ON prof.ID_profesor = a.ID_profesor INNER JOIN
                      Den d ON d .ID_Den = a.ID_Den inner join
                      Predmet pred on pred.ID_Predmet = a.ID_Predmet
WHERE     (a.otkazan = 1 AND ta.Povtoruvacki = 1) 
UNION
SELECT     a.ID_aktivnost, p.Br_prostorija, p.Opis, ta.Ime, prof.Ime + ' ' + prof.Prezime Profesor_Ime, a.Vreme_pocetok, a.Vreme_kraj, a.otkazan, d .Den,
ta.Povtoruvacki, d.ID_Den,pred.ime ImePredmet, pred.Id_Predmet
FROM         Aktivnost a INNER JOIN
                      TipNaAktivnost ta ON ta.ID_tipNaAktivnost = a.ID_TipNaAktivnost INNER JOIN
                      Prostorija p ON p.ID_prostorija = a.ID_prostorija INNER JOIN
                      Profesor prof ON prof.ID_profesor = a.ID_profesor INNER JOIN
                      Den d ON d .ID_Den = a.ID_Den inner join
                      Predmet pred on pred.ID_Predmet = a.ID_Predmet
WHERE     a.otkazan = 0 AND ta.Povtoruvacki = 0