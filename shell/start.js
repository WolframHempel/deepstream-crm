require( ['./src/conf/require-conf.js'], function( requireConfig ){
	require.config( requireConfig );
	require( ['./shell/src/js/shell' ], function( Shell ){
		new Shell( document.body );
	});
});