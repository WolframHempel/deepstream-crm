require( [ 
	'./src/conf/require-conf.js', 
	'./src/conf/general-conf.js',
	'../bower_components/deepstream.io-client-js/dist/deepstream.js'
	], 
	function( requireConfig, generalConfig, deepstream ){
	
	/**
	 * Configure requirejs
	 */
	require.config( requireConfig );

	/**
	 * Connect to deepstream
	 */
	var deepstreamClient = deepstream( generalConfig.deepstreamUrl );
	deepstreamClient.login({ user: 'test-client' });

	define( 'services/deepstream', deepstreamClient );

	require( ['./shell/src/js/shell' ], function( Shell ){
		define( 'shell', new Shell( document.body ) );
		require( ['./shell/src/js/extendKnockoutJs'] );
	});
});