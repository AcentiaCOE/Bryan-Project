/*
 * File: app/view/LoginForm.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('STARApp.view.LoginForm', {
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
                        placeHolder: 'test'
                    },
                    {
                        xtype: 'passwordfield',
                        id: 'password',
                        label: 'Password',
                        labelWidth: '40%',
                        name: 'password',
                        required: true,
                        placeHolder: 'test'
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