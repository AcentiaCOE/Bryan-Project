Ext.define('StarApp.view.AlertItems', {
    extend: 'Ext.navigation.View',
    xtype: 'alertitems',

    required: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        title: 'My New Items',
        iconCls: 'list',

        items: {
            xtype: 'list',
            itemTpl: '{name}',
            title: 'My New Correspondence',

            store: {
                autoLoad: true,
                fields: ['name'],

                proxy: {
                    type: 'jsonp',
                    url: 'http://wittybuddy.com/api/contacts',
                    reader: {
                        type: 'json'
                    }
                }
            }

        }
    }


})