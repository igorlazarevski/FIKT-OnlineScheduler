using FIKT.RoleMembershipProvider;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace LightSwitchApplication.WEB
{
    /// <summary>
    /// Summary description for Handler1
    /// </summary>
    public class Handler1 : IHttpHandler, IRequiresSessionState
    {

        public void ProcessRequest(HttpContext context)
        {
            using (var serverContext = ServerApplicationContext.CreateContext())
            {
                context.Response.ContentType = "text/plain";
                string userString = "";
                string role = "";

                if (System.Web.HttpContext.Current.Session != null &&
                    System.Web.HttpContext.Current.Session["UserName"] != null)
                {
                    MembershipUser user = System.Web.Security.Membership.GetUser(System.Web.HttpContext.Current.Session["UserName"] as string, true);
                        //HelperMethods.GetUser(System.Web.HttpContext.Current.Session["UserName"] as string);
                    
                    userString = "{\"UserName\":\"" + user.UserName
                        + "\", \"Semestar\":\"" + user.Email.Substring(user.Email.IndexOf("-")+1)
                        + "\", \"Role\":\"" + user.Comment
                        + "\", \"Name\":\"" + user.Email.Substring(0, user.Email.IndexOf("-"))+ "\"}";
                }

                context.Response.Write(userString);
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}