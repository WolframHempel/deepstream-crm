require( ['./src/conf/require-conf.js'], function( requireConfig ){
	require.config( requireConfig );
	require( ['./src/js/shell' ], function( Shell ){
		new Shell( document.body );
	});
});