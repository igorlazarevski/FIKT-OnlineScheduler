<%@ Page Inherits="Microsoft.LightSwitch.Security.ServerGenerated.Implementation.LogInPageBase" %>

<!DOCTYPE HTML>
<html>
<head>
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
    <title>Log In</title>
    <style type="text/css">
        /* Here you can customize your login screen */
        html {
            background: #F1F1F1;
        }

        html,
        body,
        .labelStyle {
            color: #2b2b2b;
        }

        h1 {
            color: #2b2b2b;
        }

        .requiredStyle {
            color: #FF1B1B;
        }

        input.buttonStyle {
            color: #444444;
            background-color: #E6FFEE;
            border: 1px solid #3D663F;
        }

            input.buttonStyle:hover {
                background-color: #f1f1f1;
            }

            input.buttonStyle:active {
                background-color: #e3e3e3;
            }

        .textBoxStyle {
            color: #444444;
            background-color: #fcfcfc;
            border: 1px solid #ababab;
        }

        .failureNotification {
            color: #ff0000;
        }

        /* login layout styling */
        * {
            margin: 0px;
        }

        html {
            height: 100%;
            width: 100%;
        }

        html, body {
            font-family: 'Century Gothic';
            font-size: 16px;
            font-weight: normal;
        }

        h1 {
            font-family: 'Century Gothic';
            font-size: 40px;
            text-align: left;
            letter-spacing: -1pt;
            font-weight: normal !important;
            margin-bottom: 12px;
        }

        .accountInfo {
            width: 95%;
            max-width: 310px;
            position: absolute;
            top: 50%;
            margin-top: -144px;
            left: 50%;
            margin-left: -155px;
        }

        .labelStyle {
            font-family: 'Century Gothic';
            font-weight: 700;
        }

        .requiredStyle {
            font-size: 24px;
            line-height: 14px;
            height: 12px;
            vertical-align: bottom;
            margin-left: 5px;
        }

        input.buttonStyle {
            font-family: 'Century Gothic';
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 0px;
            font-size: 16px;
            cursor: pointer;
            -webkit-appearance: none;
        }

        .textBoxStyle {
            background-image: none;
            font-size: 16px;
            display: block;
            outline: 0;
            height: 36px;
            padding: 1px 8px;
            margin: 0px;
            width: 100%;
            max-width: 292px;
            line-height: 36px;
            border-color: #3D663F;
        }

        .submit-login {
            margin-top: 10px;
        }

        .rememberme {
            margin-bottom: 10px;
        }

        input[type=checkbox] {
            margin: 0px 6px 0px 0px;
            vertical-align: -1px;
            cursor: pointer;
        }

        .checkStyle label {
            font-size: 15px;
        }




        .headerHome {
            background-color: #E6FFEE;
            height: 122px;
            background-image: url(images/FIKT_Logo.png);
            background-position-x: center;
            background-repeat: no-repeat;
        }

        .footerHome {
            height: 80px;
            background-color: #E6FFEE;
            background-image: url(images/FIKT_Logo.png);
            background-position-x: center;
            background-repeat: no-repeat;
            display: block;
        }

        #Najavuvanje {
            text-align: center;
        }

        form {
            height: 450px;
        }
    </style>
</head>
<body>
    <div class="headerHome"></div>
    <form id="LogInForm" runat="server">
        <asp:Login ID="LoginUser" runat="server" EnableViewState="false" RenderOuterTable="false">
            <LayoutTemplate>
                <div class="accountInfo">
                    <h1 id="Najavuvanje">Најавување</h1>
                    <div style="margin-bottom: 10px;">
                        <asp:Label ID="UsernameLabel" runat="server" AssociatedControlID="Username" Text="Корисничко име:" CssClass="labelStyle" />
                        <asp:RequiredFieldValidator ID="UsernameRequired" runat="server" ControlToValidate="Username" ValidationGroup="LoginUserValidationGroup" Text="*" ToolTip="Внесот на корисничко име е задолжително" CssClass="requiredStyle" />
                        <asp:TextBox ID="Username" runat="server" CssClass="textBoxStyle" />
                    </div>
                    <div style="margin-bottom: 10px;">
                        <asp:Label ID="PasswordLabel" runat="server" AssociatedControlID="Password" Text="Лозинка:" CssClass="labelStyle" />
                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ValidationGroup="LoginUserValidationGroup" Text="*" ToolTip="Внесот на лозинка е задолжително" CssClass="requiredStyle" />
                        <asp:TextBox ID="Password" runat="server" TextMode="Password" CssClass="textBoxStyle" />
                    </div>
                    <div class="submit-login">
                        <div class="rememberme">
                            <asp:CheckBox ID="RememberMe" runat="server" Text="Запамeти ме наредниот пат" CssClass="checkStyle" />
                        </div>
                        <div style="margin-bottom: 10px;" class="logInBtn">
                            <asp:Button ID="LoginButton" runat="server" CommandName="Login" ValidationGroup="LoginUserValidationGroup" Text="ВЛЕЗ ВО СИСТЕМОТ" Width="310" Height="38" CssClass="buttonStyle" />
                        </div>
                    </div>
                    <span class="failureNotification">
                        <asp:Literal ID="FailureText" runat="server" />
                    </span>
                    <asp:ValidationSummary ID="LoginUserValidationSummary" runat="server" ValidationGroup="LoginUserValidationGroup" />
                </div>
            </LayoutTemplate>
        </asp:Login>
    </form>
    <div class="footerHome">
    </div>
</body>
</html>
