
Ext.define('StarApp.controller.Login', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginHome: 'login',
            loginForm: 'loginform',
            mainPage: {
                autoCreate: true,
                selector: 'mainpage',
                xtype: 'mainpage'
            },
            main: {
                autoCreate: true,
                selector: 'main',
                xtype: 'main'
            }
        },

        control: {
            "login #showLoginButton": {
                tap: 'showLogin'
            },
            "loginform #loginbutton": {
                tap: 'doLogin'
            }
        }
    },

    showLogin: function (button, e, eOpts) {

        var loginHome = this.getLoginHome();				// Main view


        // Navigate to login
        loginHome.push({
            xtype: "loginform",
            title: "Login"
        });


    },

    doLogin: function (button, e, eOpts) {

        var form = button.up('formpanel'),
        	values = form.getValues(),
        	loginHome = this.getLoginHome(),
        	loginForm = this.getLoginForm(),
        	mainPage = this.getMainPage(),
            main = this.getMain()

        // Success
        var successCallback = function (resp, ops) {

            loginHome.hide();

            loginForm.hide();

            /*
            if (!mainPage.getParent()) {
                Ext.Viewport.add(mainPage);
            }

            mainPage.show();
            */

            if (!main.getParent()) {
                Ext.Viewport.add(main);
            }
            main.show();

        };

        // Failure
        var failureCallback = function (resp, ops) {

            // Show login failure error
            Ext.Msg.alert("Login Failure", resp);

        };


        //debugger;
        var username = Ext.getCmp('username');
        var password = Ext.getCmp('password');

        // TODO: Login using server-side authentication service
        // Ext.Ajax.request({
        //		url: "/api/login",
        //		params: values,
        //		success: successCallback,
        //		failure: failureCallback
        // });


        console.log(username.getValue());

        if (username.getValue() == 'star' && password.getValue() == 'star')
            successCallback();
        else
            failureCallback();


    }

});