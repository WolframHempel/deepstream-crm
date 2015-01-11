define(function( require ){
	var ko = require( 'ko' ),
		CountdownTimer = require( './js/countdown-timer' );

	require( 'css!./css/countdown-timer.css' );

	ko.bindingHandlers.countdownTimer = {};

	ko.bindingHandlers.countdownTimer.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		new CountdownTimer( element, valueAccessor().duration, valueAccessor().trigger );
	};
});