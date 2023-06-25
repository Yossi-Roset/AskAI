define(["client.property-panel/components/components", "client.property-panel/component-utils"],
function(components, componentUtils){
	
	return function() {
	
		let by = '<div style="width:90%;margin:5%">Extension by:</div>';

		let logo = '<style>.AskAILinks a,.AskAILinks a:visited, .AskAILinks a:hover, .AskAILinks a:active { color: inherit;}</style>' +
			'<div>' +
				'<a href="https://logsys.co.il" target="_blank" title="Go to our website" style="height:0px;">' +
					' <img alt="logo" src="../extensions/AskAI/logicallogo.png" style="width:90%;margin:5%">'+
				'</a>' +				
			'</div>' +
			'<div class="logiLinks" style="width:90%;margin:5%;color:rgb(0, 0, 238)!important"><a href="https://github.com/Yossi-Roset/AskAI" target="_blank" title="See Documentation">• See Documentation</a></div>' +
			'<div class="logiLinks" style="width:90%;margin:5%;color:rgb(0, 0, 238)!important"><a href="mailto:support@logsys.co.il" target="_blank" title="Contact Support">• Contact Support</a></div>'
			;

		let copyright = '<div style="width:90%;margin:5%">© 2023 Logical BI</div>'

		let html = by + logo + copyright;
		
		if(!components.hasComponent("LogicalAskAIAbout")) {
			let aboutComponent = {
				template: html
			};
			components.addComponent("LogicalAskAIAbout", aboutComponent);
			return aboutComponent;
		}			
		else
		{
		  let aboutComponent = components.getComponent("LogicalAskAIAbout");
		  
		  aboutComponent.template = html;
		  
		  return aboutComponent;
		}
	}
});
