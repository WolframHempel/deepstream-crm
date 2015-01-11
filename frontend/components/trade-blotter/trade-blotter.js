define(function( require ){

	var ko = require( 'ko' ),
		template = require( 'text!./html/trade-blotter.html' ),
		ViewModel = require( './js/trade-blotter-view-model' );

	require( 'css!./css/trade-blotter.css' );
	require( 'common/ko-components/input-field/input-field' );
	require( 'common/ko-custom-bindings/formatters/formatters' );

	var Component = function( container, state ) {
		this.viewmodel = new ViewModel( container, state );
		container.getElement().html( template );
		ko.applyBindings( this.viewmodel, container.getElement()[ 0 ] );
	};

	return Component;
});