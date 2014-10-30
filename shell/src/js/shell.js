define(function( require ){
	var GoldenLayout = require( 'golden-layout' ),
		layoutConf = require( '../conf/layout-conf'),
		AsyncLoaderComponent = require( './AsyncLoaderComponent' );

	var Shell = function() {
		this._templates = {};

		this.layout = new GoldenLayout( layoutConf );
		this.layout.registerComponent( 'asyncLoader', AsyncLoaderComponent );
		this.layout.init();
	};

	Shell.prototype.registerTemplate = function( name, html ) {
		if( typeof html !== 'string' && typeof html.cloneNode !== 'function' ) {
			throw new Error( 'Please provide a html string or DOM element' );
		}

		if( this._templates[ name ] ) {
			throw new Error( 'Template with name "' + name  + '" is already registered' );
		}
		
		this._templates[ name ] = $( html )[ 0 ];
	};

	Shell.prototype.getTemplate = function( name ) {
		if( this._templates[ name ] ) {
			return this._templates[ name ].cloneNode( true );
		} else {
			throw new Error( 'Unknown template "' + name + '"' );
		}
	};

	return Shell;
});