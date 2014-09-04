Ext.define('StarApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
           
              {
                  xtype: 'alertitems'
              },
             {
                 xtype: 'browse'
             },
             {

                 title: 'Search',
                 iconCls: 'Home',
                 scrollable: true,
                 styleHtmlContent: true,


                 html: [
                     '<h1>Search Items</h1>',
                     "<p></p>",
                 ].join("")

             },
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'blog'
            },
            {
                xtype: 'contactform'
            }
        ]
    }
});
