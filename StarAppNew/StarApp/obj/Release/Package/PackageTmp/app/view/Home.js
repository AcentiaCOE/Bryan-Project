Ext.define('StarApp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Home',
        iconCls: 'Home',
        cls: 'home',
        scrollable: true,
        styleHtmlContent: true,


        html: [
            '<img src="resources/images/cdclogo.png" />',
            '<h1>Welcome to STAR</h1>',
            "<p></p>",
            '<h2>STAR</h2>',            
            '<br><br><hr><img src="resources/images/hhs.png" />'
        ].join("")
    }
})