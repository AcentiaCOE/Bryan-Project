Ext.define('StarApp.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',

    required: [
        'Ext.dataview.List',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        title: 'Blogs',
        iconCls: 'star',

        items: {
            xtype: 'list',
            itemTpl: '{title}',
            title: 'Recent Post',

            store: {
                autoLoad: true,
                fields: ['title', 'author', 'content'],

                proxy: {
                    type: 'jsonp',
                    url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            }
        }
    }

})