Ext.define('StarApp.view.Login', {
    extend: 'Ext.navigation.View',
    alias: 'widget.login',

    requires: [
        'Ext.Img',
        'Ext.Label',
        'Ext.Panel',
        'Ext.Button'
    ],

    config: {
        title: 'STAR',
        cls: 'loginHome',
        styleHtmlContent: true,
        items: [           
            {
                xtype: 'container',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        docked: 'top',
                        margin: 2,
                        layout: {
                            type: 'box',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [                             
                             {
                                 html: [
                                     '<img src="resources/icons/icon_cdc.gif" />'  +                                     
                                     '<h1><img src="resources/images/starlogo.jpg" />Welcome to STAR</h1>' +
                                     '<h2>(Suspense Tracking and Routing)</h2>' +
                                     '<p>Suspense Tracking and Routing (STAR) is an application' +
                                     ' used to manage post-award correspondence submitted by grantees. ' +
                                     'STAR is used to process post-award administrative actions related ' +
                                     'to cooperative agreements. ' +
                                     'Requests are received by the Procurement Grants Office (PGO), ' +
                                     'and PGO then creates a correspondence record in STAR. ' +
                                     'PGO routes the request via STAR to the appropriate organization for review ' +
                                     'and recommendation. ' +
                                     'After the request receives final approval from the organization, ' +
                                     'the correspondence record is returned via STAR to PGO for their final processing.</p>' 
                                     
                                 ]
                             }
                             
                            
                        ]
                    },
                    {
                        xtype: 'panel',
                        itemId: 'loginPanel',
                        padding: '',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'showLoginButton',
                                cls: 'loginButton',
                                margin: 25,
                                padding: 8,
                                width: '90%',
                                text: 'Login'
                            }
                        ]
                    },
                     
                           
                    {
                        html: [
                                '<br><br><hr><img src="resources/images/hhs.png" />'
                        ]
                    }
                ]
            }
        ]
    }

});