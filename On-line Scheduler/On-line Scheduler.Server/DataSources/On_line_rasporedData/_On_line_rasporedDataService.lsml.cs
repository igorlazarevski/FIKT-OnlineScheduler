using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Linq.Expressions;

namespace LightSwitchApplication
{
    public partial class On_line_rasporedDataService
    {
        partial void vw_Aktivnostis_Validate(vw_Aktivnosti entity, EntitySetValidationResultsBuilder results)
        {

        }

        partial void vw_Aktivnostis_Filter(ref Expression<Func<vw_Aktivnosti, bool>> filter)
        {

        }

        partial void ActivitiesByStudent_PreprocessQuery(string Subjects, ref IQueryable<vw_Aktivnosti> query)
        {
            query = query.Where(x => Subjects.Contains(x.Id_Predmet + ",")).OrderBy(x => x.ID_Den);
        }
    }
}
