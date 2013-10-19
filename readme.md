# CKEditor IconFont plugin

## Description
I often use icons on certain webpages. Nowadays we use icon fonts(check out [http://www.icomoon.io](Icomoon) !). They are vector-based objects, scalable without losing quality or precision, can be colored, transparant, animated and use lesser http requests and lower file size.

To use these icon fonts inside a WYSIWYG editor like CKEditor, you can either switch to the HTML editor and type some html code yourself, or you can use this CKEditor plugin to insert the icon where you're cursor is located.

The plugin simply asks for the icon classname. It will then insert a html snippet like this:

`<i class="icon-telephone" aria-hidden="true"><!-- icon --></i>`

**Note:** the html comment inside the tag is necessary because empty tags are removed in CKEditor after saving.

## Installation (Fork CMS)

1. Copy the folder `iconfont` to your `/backend/core/js/ckeditor/plugins` folder.
2. Open `/backend/core/js/backend.js` with your favorite text editor.
3. Add the iconfont button to the CKEditor toolbar (approx. line 215)

	`toolbar_Full:
	[
		...
		{ name: 'styles', items : ['Format', 'Styles', 'IconFont'] }
	],`

4. Load the plugin (approx. line 242)

````
// load some extra plugins
extraPlugins: 'stylesheetparser,MediaEmbed,iconfont',
````

5. Give it a try!