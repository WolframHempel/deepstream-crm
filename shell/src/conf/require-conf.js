define({
	baseUrl: '../',
	paths:{
		'golden-layout': 'bower_components/golden-layout/dist/goldenlayout.min',
		'jquery': 'bower_components/jquery/dist/jquery.min',
		'ko': 'bower_components/knockoutjs/dist/knockout',
		'text': 'bower_components/requirejs-text/text',
		'common': 'common/'
	},
	map: {
		'*': {
			'css': 'bower_components/require-css/css'
		}
	}
});