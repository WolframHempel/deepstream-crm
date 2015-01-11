define({
	settings:{
		hasHeaders: false
	},
	dimensions:{
		borderWidth: 1
	},
	content:[{
		type: 'row',
		content:[{
			width: 20,
			type: 'component',
			componentName: 'asyncLoader',
			componentState: {
				url: 'components/userlist/userlist'
			}
		},{
			type: 'component',
			componentName: 'asyncLoader',
			componentState: {
				url: 'components/userdetail/userdetail'
			}
		},
		{
			type: 'column',
			content:[{
				type: 'component',
				componentName: 'asyncLoader',
				componentState: {
					url: 'components/rfq-ticket/rfq-ticket'
				}
			},{
				type: 'component',
				componentName: 'asyncLoader',
				componentState: {
					url: 'components/trade-blotter/trade-blotter'
				}
			}]
		}]
	}]
});