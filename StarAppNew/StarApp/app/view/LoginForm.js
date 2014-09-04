Ext.define('StarApp.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'username',
                        label: 'Username',
                        labelWidth: '40%',
                        name: 'username',
                        required: true,
                        placeHolder: 'type star for login'
                    },
                    {
                        xtype: 'passwordfield',
                        id: 'password',
                        label: 'Password',
                        labelWidth: '40%',
                        name: 'password',
                        required: true,
                        placeHolder: 'type star for login'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginbutton',
                margin: 20,
                padding: 8,
                text: 'Login'
            }
        ]
    }

});