define(function( require ){
	var ko = require( 'ko' );

	var formatters = {

		toFixed: function( val, options ) {
			if( !options.digits ) {
				throw new Error( 'Missing option \'digits\' for toFixed formatter' );
			}

			if( val ) {
				return parseFloat( val ).toFixed( options.digits );
			} else {
				return '';
			}
		},

		dateFromTimeStamp: function( val ) {
			if( val ) {
				return ( new Date( val ) ).toGMTString();
			} else {
				return '';
			}
		}
	};

	ko.bindingHandlers.format = {
		init:  function( element, valueAccessor ) {
			var settings = valueAccessor();

			if( !formatters[ settings.formatter ] ) {
				throw new Error( 'Unknown formatter \'' + settings.formatter + '\'' );
			}

			if( !settings.value ) {
				throw new Error( 'missing parameter \'value\'' );
			}
		},
		update:  function( element, valueAccessor ) {
			var settings = valueAccessor();
			element.innerHTML = formatters[ settings.formatter ]( settings.value(), settings.options || {} );
		}
	};
});