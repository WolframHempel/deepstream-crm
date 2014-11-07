define(function( require ){

	var ko = require( 'ko' ),
		koTools = {};

	koTools.toObservable = function( valueOrObservable ) {
		return ko.isObservable( valueOrObservable ) ? valueOrObservable : ko.observable( valueOrObservable );
	};

	return koTools;
});