Ext.define('StarApp.view.Browse', {
    extend: 'Ext.navigation.View',
    xtype:'browse',

    required: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        title: 'Browse',
        iconCls: 'list',

        items: {
            xtype: 'list',
            itemTpl: '{correspondenceid} {awardnum} {grantyear} {announcementnum}',
            title: 'List of Correspondence',

            store: {
                autoLoad: true,
                fields: ['correspondenceid', 'awardnum', 'grantyear', 'announcementnum'],

                proxy: {
                    type: 'jsonp',
                    url: 'http://localhost/StarApp/api/Correspondence',
                    reader: {
                        type: 'json'                      
                    }
                }
            }
        }
    }


})