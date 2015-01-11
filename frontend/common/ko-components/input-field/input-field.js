define(function( require ){

	var ko = require( 'ko' );

	require( 'css!./css/input-field.css' );

	ko.components.register('input-field', {
		viewModel: require( './js/input-field-view-model' ),
		template: require( 'text!./html/input-field-template.html' )
	});
});