# CKEditor IconFont plugin
Insert one of your icons into your content inside CKEditor without the hassle of typing the HTML code yourself in the cluttered CKEditor code view.

## Description
I often use icons on webpages. Nowadays it's a best practice to use icon fonts. They provide a number of benefits such as: being vector-based, scalable without losing quality or precision, they can be colored or be transparant, animated and they use lesser http requests and have a lower file size.

To use these icon fonts inside a WYSIWYG editor like CKEditor (used in Fork CMS), you can either switch to the editor's HTML view and type some html code yourself, or you can **use this CKEditor plugin to insert the icon at the exact place where the cursor is located**. It's not pleasant to type HTML code right inside the cluttered CKEditor "Source" code view, so I created this small plugin to do this job for me.

The plugin simply asks for the icon's CSS classname. It will then insert a html snippet like this:

`<i class="icon-telephone" aria-hidden="true"><!-- icon --></i>`

**Note:** the html comment inside the tag is necessary because empty tags are removed in CKEditor after saving.

## Plugin installation in Fork CMS
Installing this plugin into CKEditor is easy. If you're not familiar with icon fonts, you may want to add them first to your theme (checkout the tutorial beneath).

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
5. Give it a try! You can find a new icon in your editor's toolbar. Press it and enter the CSS classname you would normally use in html.

### Example: Using icon fonts in Fork CMS with Icomoon and IconFont plugin
I prefer using [http://www.icomoon.io](Icomoon) to generate custom icon webfonts. You can pick the icons that you want to be included in your webfont from a dozen free third-party icon sets such as Font Awesome, Entypo, ... By picking only the icons you'll need and not the whole set with hundreds of icons, you'll cause less overhead, and since it's only a single font file there are less file requests needed. Hell, with Icomoon you can even import your own svg images to your custom webfont, or manipulate an icon in the browser! Also worth checking out is [http://fontello.com/](Fontello), and [http://fontastic.me/](Fontastic).

1. Pick your icons and let Icomoon generate your webfont.
2. Extract the zip package.
3. Copy the font files in the `fonts` directory to your `frontend/themes/THEME_NAME/core/layout/fonts` folder.
4. Add the contents of `style.css` to your theme's CSS file (e.g. `frontend/themes/THEME_NAME/core/layout/css`screen.css`). Be sure to check if the path to your font files is correct and also check if you copied all of the css classnames! (See screenshot beneath).
5. Go to a page in your Fork CMS backend and edit a textblock. The CKEditor pops up like you're used to.
6. Let's say I'm creating a contact webpage. Enter a phone number and place the cursor back to the start of the line.
7. Click on the new icon in the CKEditor toolbar: ![Iconfont plugin icon](/plugins/iconfont/images/icon.png "Iconfont plugin icon").
8. A popup appears. I have an icon with classname `.icon-mobile` in my css styles, so I need to enter `icon-mobile` and press OK.
9. A HTML snippet is inserted where the cursor is located: `<i class="icon-mobile" aria-hidden="true"><!-- icon --></i>`. Normally, you can see the icon appear inside the editor right before the telephone number. If not, you can try to clear the browser cache or maybe clear the Fork CMS cache.
10. Enjoy your icon fonts on your website.

[ ![Screenshot screen.css](http://i.imgur.com/aSxCN9Vs.png) ](http://i.imgur.com/aSxCN9V.png)
[ ![Screenshot](http://i.imgur.com/PNsm9jjs.png) ](http://i.imgur.com/PNsm9jj.png)
[ ![Screenshot](http://i.imgur.com/5dEyziFs.png) ](http://i.imgur.com/5dEyziF.png)
