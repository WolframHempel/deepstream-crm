define({
	settings:{
		hasHeaders: false
	},
	dimensions:{
		borderWidth: 2
	},
	content:[{
		type: 'row',
		content:[{
			width: 20,
			type: 'component',
			componentName: 'asyncLoader',
			componentState: {
				url: 'components/userlist'
			}
		},{
			type: 'component',
			componentName: 'asyncLoader',
			componentState: {
				url: 'components/userdetail'
			}
		}]
	}]
});