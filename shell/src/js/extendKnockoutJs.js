define(function( require ){

	var ko = require( 'ko' ),
		shell = require( 'shell' );

	/**
	* retrieve templates from the templateService instead of the DOM
	*/
	var originalMakeTemplateSource = ko.nativeTemplateEngine.prototype.makeTemplateSource;

	var templateSources = {};



	
	ko.nativeTemplateEngine.prototype.makeTemplateSource = function( template, templateDocument )
	{
		if( typeof template === "string" )
		{
			if( !templateSources[ template ] )
			{
				var eContainer = document.createElement( "div" );
				eContainer.appendChild( shell.getTemplate( template ) );
				templateSources[ template ] = new ko.templateSources.domElement( eContainer );
			}
			
			return templateSources[ template ];
		}
		else
		{
			return originalMakeTemplateSource( template, templateDocument );
		}
	};
});