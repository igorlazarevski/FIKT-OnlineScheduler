using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;
using System.Web.ApplicationServices;
using System.Web.Configuration;
using System.Web.Security;


namespace FIKT.RoleMembershipProvider
{
    public class CustomMembershipProvider : MembershipProvider
    {
        private static string _applicationName;
        private static string _connectionString;
        public override void Initialize(string name, System.Collections.Specialized.NameValueCollection config)
        {
            _applicationName = config["applicationName"];
            _connectionString = WebConfigurationManager.ConnectionStrings[config["connectionStringName"]].ConnectionString;
            base.Initialize(name, config);
        }

        public override string ApplicationName
        {
            get
            {
                return _applicationName;
            }
            set
            {
                throw new NotImplementedException();
            }
        }

        public override bool ChangePassword(string username, string oldPassword, string newPassword)
        {
            throw new NotImplementedException();
        }

        public override bool ChangePasswordQuestionAndAnswer(string username, string password, string newPasswordQuestion, string newPasswordAnswer)
        {
            throw new NotImplementedException();
        }

        public override MembershipUser CreateUser(string username, string password, string email, string passwordQuestion, string passwordAnswer, bool isApproved, object providerUserKey, out MembershipCreateStatus status)
        {
            throw new NotImplementedException();
        }

        public override bool DeleteUser(string username, bool deleteAllRelatedData)
        {
            throw new NotImplementedException();
        }

        public override bool EnablePasswordReset
        {
            get { throw new NotImplementedException(); }
        }

        public override bool EnablePasswordRetrieval
        {
            get { throw new NotImplementedException(); }
        }

        public override MembershipUserCollection FindUsersByEmail(string emailToMatch, int pageIndex, int pageSize, out int totalRecords)
        {
            throw new NotImplementedException();
        }

        public override MembershipUserCollection FindUsersByName(string usernameToMatch, int pageIndex, int pageSize, out int totalRecords)
        {
            throw new NotImplementedException();
        }

        public override MembershipUserCollection GetAllUsers(int pageIndex, int pageSize, out int totalRecords)
        {
            throw new NotImplementedException();
        }

        public override int GetNumberOfUsersOnline()
        {
            throw new NotImplementedException();
        }

        public override string GetPassword(string username, string answer)
        {
            throw new NotImplementedException();
        }

        public override MembershipUser GetUser(string username, bool userIsOnline)
        {
            MembershipUser user = new MembershipUser("AspNetMembershipProvider", username, null, "", "", "", true, false, new DateTime(), new DateTime(), 
                new DateTime(), new DateTime(), new DateTime());

            string Name;
             if(username.Equals("admin", StringComparison.InvariantCultureIgnoreCase))
             {
                 Name = String.Format("{0} {1}-{2}", "Администратор", "", 0);
                 user.Email = Name;
                 user.Comment = "Administrator";
                 return user;
             }
            SqlConnection myConnection = new SqlConnection(_connectionString);

            try
            {
                myConnection.Open();
                SqlCommand myCommand = new SqlCommand("GetUser",
                                                         myConnection);
                myCommand.CommandType = System.Data.CommandType.StoredProcedure;
                myCommand.Parameters.Add(new SqlParameter()
                {
                    DbType = System.Data.DbType.String,
                    ParameterName = "@Username",
                    Value = username
                });

                var reader = myCommand.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Name = String.Format("{0} {1}-{2}", reader.GetString(1), reader.GetString(2), reader["Semestar"]);
                        user.Email = Name;
                        user.Comment = reader.GetString(3);
                    }
                }

                return user;
            }
            catch (SqlException ex)
            {
                //log if possible
                throw ex;
            }
        }

        public override MembershipUser GetUser(object providerUserKey, bool userIsOnline)
        {
            throw new NotImplementedException();
        }

        public override string GetUserNameByEmail(string email)
        {
            throw new NotImplementedException();
        }

        public override int MaxInvalidPasswordAttempts
        {
            get { throw new NotImplementedException(); }
        }

        public override int MinRequiredNonAlphanumericCharacters
        {
            get { throw new NotImplementedException(); }
        }

        public override int MinRequiredPasswordLength
        {
            get { throw new NotImplementedException(); }
        }

        public override int PasswordAttemptWindow
        {
            get { throw new NotImplementedException(); }
        }

        public override MembershipPasswordFormat PasswordFormat
        {
            get { throw new NotImplementedException(); }
        }

        public override string PasswordStrengthRegularExpression
        {
            get { throw new NotImplementedException(); }
        }

        public override bool RequiresQuestionAndAnswer
        {
            get { throw new NotImplementedException(); }
        }

        public override bool RequiresUniqueEmail
        {
            get { throw new NotImplementedException(); }
        }

        public override string ResetPassword(string username, string answer)
        {
            throw new NotImplementedException();
        }

        public override bool UnlockUser(string userName)
        {
            throw new NotImplementedException();
        }

        public override void UpdateUser(MembershipUser user)
        {
            throw new NotImplementedException();
        }

        public override bool ValidateUser(string username, string password)
        {
            if(username.Equals("admin", StringComparison.InvariantCultureIgnoreCase)
                && password.Equals("admin1strator", StringComparison.InvariantCultureIgnoreCase))
            {
                System.Web.HttpContext.Current.Session["UserName"] = "admin";
                return true;
            }

            SqlConnection myConnection = new SqlConnection(_connectionString);
            try
            {
                myConnection.Open();
                SqlCommand myCommand = new SqlCommand("ValidateUser",
                                                         myConnection);
                myCommand.CommandType = System.Data.CommandType.StoredProcedure;
                myCommand.Parameters.Add(new SqlParameter()
                {
                    DbType = System.Data.DbType.String,
                    ParameterName = "@Username",
                    Value = username
                });

                myCommand.Parameters.Add(new SqlParameter()
                {
                    DbType = System.Data.DbType.String,
                    ParameterName = "@Password",
                    Value = password
                });

                var ret = myCommand.ExecuteScalar();

                if ((int)(ret) == 1)
                {
                    System.Web.HttpContext.Current.Session["UserName"] = username;
                }

                return (int)(ret) == 1;
            }
            catch (SqlException ex)
            {
                //log if possible
                throw ex;
            }
        }
    }


    public class MyUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public FIKT.RoleMembershipProvider.Enums.SystemRoles Role;
        public string UserName { get; set; }
    }
}
