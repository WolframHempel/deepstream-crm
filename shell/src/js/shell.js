define(function( require ){
	var GoldenLayout = require( 'golden-layout' ),
		layoutConf = require( '../conf/layout-conf'),
		AsyncLoaderComponent = require( './AsyncLoaderComponent' );

	var Shell = function() {
		this.layout = new GoldenLayout( layoutConf );
		this.layout.registerComponent( 'asyncLoader', AsyncLoaderComponent );
		this.layout.init();
	};

	return Shell;
});