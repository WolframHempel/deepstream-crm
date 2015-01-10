define(function( require ){

	var ko = require( 'ko' ),
		template = require( 'text!./html/rfq-ticket.html' ),
		ViewModel = require( './js/rfq-ticket-view-model' );

	require( 'css!./css/rfq-ticket.css' );
	require( 'common/ko-components/input-field/input-field' );

	var Component = function( container, state ) {
		this.viewmodel = new ViewModel( container, state );
		container.getElement().html( template );
		ko.applyBindings( this.viewmodel, container.getElement()[ 0 ] );
	};

	return Component;
});