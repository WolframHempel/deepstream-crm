define(function( require ){

	var ko = require( 'ko' );

	require( 'css!./css/execute-button.css' );

	ko.components.register('execute-button', {
		viewModel: require( './js/execute-button-view-model' ),
		template: require( 'text!./html/execute-button.html' )
	});
});