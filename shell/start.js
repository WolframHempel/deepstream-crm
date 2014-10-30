require( [ 
	'./src/conf/require-conf.js', 
	'./src/conf/general-conf.js'], 
	function( requireConfig, generalConfig ){
	
	/**
	 * Configure requirejs
	 */
	require.config( requireConfig );

	/**
	 * Connect to deepstream
	 */
	var deepstreamClient = new DeepstreamClient( generalConfig.deepstreamUrl );
	deepstreamClient.setPersistDefault( false );
	define( 'services/deepstream', deepstreamClient );

	require( ['./shell/src/js/shell' ], function( Shell ){
		define( 'shell', new Shell( document.body ) );
		require( ['./shell/src/js/extendKnockoutJs'] );
	});
});