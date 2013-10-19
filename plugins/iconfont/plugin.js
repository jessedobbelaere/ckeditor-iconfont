/**
 * Plugin inserting icon font elements into CKEditor editing area.
 * @author Jesse Dobbelaere <jesse@dobbelaere-ae.be>
 */

// Register the plugin with the editor.
CKEDITOR.plugins.add( 'iconfont',
{
	// The plugin initialization logic goes inside this method.
	init: function( editor )
	{
		// Define an editor command that inserts an icon.
		editor.addCommand( 'iconFontDialog',new CKEDITOR.dialogCommand( 'iconFontDialog' ) );

		// Create a toolbar button that executes the plugin command.
		editor.ui.addButton( 'IconFont',
		{
			// Toolbar button tooltip.
			label: 'Insert icon font',
			// Reference to the plugin command name.
			command: 'iconFontDialog',
			// Button's icon file path.
			icon: this.path + 'images/icon.png'
		} );


		// Add a dialog window definition containing all UI elements and listeners.
		CKEDITOR.dialog.add( 'iconFontDialog', function ( editor )
		{
			return {
				// Basic properties of the dialog window: title, minimum size.
				title : 'Icon font',
				minWidth : 400,
				minHeight : 200,

				// Dialog window contents.
				contents :
				[
					{
						// Definition of the Basic Settings dialog window tab (page) with its id, label, and contents.
						id : 'tab1',
						label : 'Basic Settings',
						elements :
						[
							{
								// Dialog window UI element: a text input field for the iconfont name.
								type : 'text',
								id : 'name',

								// Text that labels the field.
								label : 'Icon name',

								// Validation checking whether the field is not empty.
								validate : CKEDITOR.dialog.validate.notEmpty( "Icon name field cannot be empty" )
							}
						]
					}
				],

				// This method is invoked once a user closes the dialog window, accepting the changes.
				onOk : function()
				{
					// A dialog window object.
					var dialog = this;

					// Insert the newly created icon into the cursor position in the document.
					editor.insertElement( CKEDITOR.dom.element.createFromHtml( '<i class="' + dialog.getValueOf( 'tab1', 'name' ) + '" aria-hidden="true"><!-- icon --></i>&nbsp;'));

				}
			};
		} );
	}
} );