define(function( require ){

	var ko = require( 'ko' ),
		koTools = require( 'common/tools/ko-tools' );

	var InputFieldViewModel = function( params ) {
		this.value = koTools.toObservable( params.value );
		this.name = koTools.toObservable( params.name );
	};

	return InputFieldViewModel;
});