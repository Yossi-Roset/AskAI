define( ['qlik',
	'text!./main.css',
	'text!./template.ng.html',
	'text!./dialog-template.ng.html'
],
function ( qlik, cssContent, template, dialogTemplate ) {

var app = qlik.currApp();	
	
	var tableList;
	
	app.getAppObjectList("masterobject", (objectList) => {
		tableList = objectList.qAppObjectList.qItems
				.filter(object => {
					return object.qData.visualization === "table" || object.qData.visualization === "sn-table" ? true : false;
				})
				.map(filteredObject => ({
						label: filteredObject.qMeta.title,
						value: filteredObject.qInfo.qId
			}))
			app.destroySessionObject(objectList.qInfo.qId);
		});

return {
			type: "items", 
			component: "accordion",
			items: {
				DataSource: {
					type: "items",
					label: "Data Source",
					items: {
						dataFromTable: {
								type: "boolean",
								ref: "props.dataFromTable",							
								label: "Data From Table Object",
								defaultValue: true
						},
						useMasterViz: {
								type: "boolean",
								ref: "props.useMasterViz",							
								label: "Use Master Visualization",
								defaultValue: true,
								show: function (e) {
									 return e.props.dataFromTable
								}
						},
						tableMasterItem: {
								type: "string",								
								ref: "props.tableMasterItem",
								label: "Master Visualization",
								component: "dropdown",
								options: function (e) {return tableList;},
								show:function (e) {
									 return e.props.dataFromTable && e.props.useMasterViz
								}
						},
						tableObjId: {
								type: "string",
								expression: "optional",
								ref: "props.tableObjId",
								label: "Table Object ID",
								show:function (e) {
									 return e.props.dataFromTable && !e.props.useMasterViz
								}
						},								
						data: {
								type: "string",
								expression: "optional",
								ref: "props.Data",
								label: "Data in CSV Format",
								show: function (e) {
									 return !e.props.dataFromTable
								}
						}
					}
				},
				Platforms: {
					type: "items",
					label: "AI Platforms",
					items: {
						platform: {
								ref: "props.platform",
								label: "Default AI Platform",
								type: "string",
								component: "dropdown",
								expression: "optional",
								defaultValue: "openai",
								options: [{
										value: "openai",
										label: "OpenAI"
									}, {
										value: "azureoai",
										label: "Azure OpenAI"
									}, {
										value: "pandasai",
										label: "Python SSE (PandasAI)"
									}
								]
							},
							enableOpenai: {
									type: "boolean",
									ref: "props.enableOpenai",
									label: "Enable OpenAI",
									defaultValue: true
							},
							showButtonOpenai: {
									type: "boolean",
									ref: "props.showButtonOpenai",
									label: "Show OpenAI Button",
									show: function (e) {
										 return e.props.enableOpenai
									}
							},
							openAIKey: {
									type: "string",
									expression: "optional",
									ref: "props.openAIKey",
									label: "OpenAI API Key",
									show: function (e) {
										 return e.props.enableOpenai
									}
							},
							openAIModel: {
									type: "string",
									expression: "optional",
									defaultValue: "gpt-4",
									ref: "props.openAIModel",
									label: "OpenAI Model",
									show: function (e) {
										 return e.props.enableOpenai
									}
							},
							enableAzure: {
									type: "boolean",
									ref: "props.enableAzure",
									label: "Enable Azure OpenAI"
							},
							showButtonAzure: {
									type: "boolean",
									ref: "props.showButtonAzure",
									label: "Show Azure OpenAI Button",
									show: function (e) {
										 return e.props.enableAzure
									}
							},
							azureKey: {
									type: "string",
									expression: "optional",
									ref: "props.azureKey",
									label: "Azure OpenAI API Key",
									show: function (e) {
										 return e.props.enableAzure
									}
							},
							azureURL: {
									type: "string",
									ref: "props.azureURL",
									expression: "optional",
									label: "Azure Deployment URL",
									defaultValue: "https://{resource}.openai.azure.com/openai/deployments/{yourdeployment}/chat/completions?api-version=2023-03-15-preview",
									show: function (e) {
										 return e.props.enableAzure
									}
							},
							enablePandasAI: {
									type: "boolean",
									ref: "props.enablePandasAI",
									label: "Enable Python SSE (PandasAI)"
							},
							showButtonPandasAI: {
									type: "boolean",
									ref: "props.showButtonPandasAI",
									label: "Show Python SSE Button",
									show: function (e) {
										 return e.props.enablePandasAI
									}
							},
							sseNamePandasAI: {
									type: "string",
									expression: "optional",
									ref: "props.pandasAI_SSE_Name",
									label: "Python SSE Name",
									show: function (e) {
										 return e.props.enablePandasAI
									}
							},
							platformFallbackTo: {
								ref: "props.platformFallbackTo",
								label: "Fallback to:",
								type: "string",
								component: "dropdown",
								defaultValue: "none",
								options: [{
										value: "openai",
										label: "OpenAI ChatGPT"
									}, {
										value: "azureoai",
										label: "Azure OpenAI"
									},{
										value: "none",
										label: "No Fallback"
									}
								],
								show: function (e) { //TODO Apply Fallback in Code
									return false//e.props.enablePandasAI
								}
							}
					}
				},
				Settings: {
					type: "items",
					label: "Settings",
					items: {
						defaultQuery: {
								type: "string",
								ref: "props.defaultQuery",
								expression: "optional",
								label: "Defualt Question"
						},
						boldNamesAndVals: {
								type: "boolean",
								ref: "props.boldNamesAndVals",
								expression: "optional",
								label: "Bold Names and Values",
								show:function (e) {
									 return e.props.platform == 'azureoai' || e.props.platform == 'openai'
								}
						},
						title: {
								type: "string",
								expression: "optional",
								ref: "props.Title",
								label: "Title",
								defaultValue: "Ask anything about your data:"
						},
						buttonCaption: {
								type: "string",
								expression: "optional",
								ref: "props.buttonCaption",
								label: "Button Caption",
								defaultValue: "Get Answers"
						},
						resultsToVar: {
								type: "boolean",
								ref: "props.resultsToVar",							
								label: "Results To Variabale (No Popup)",
								defaultValue: false
						},
						resultsVar:{										 
							ref: "props.resultsVar",
							label: "Results Variable",
							type: "string",
							component: "dropdown",
							options: function (e)
							{
								return app.createGenericObject({qVariableListDef: {qType: 'variable'}
								}).then(function (reply) {
									return reply.layout.qVariableList.qItems.map(function (item) {
										return {value: item.qName,label: item.qName};
									});
								});
							},
							show: function (e) {
								 return e.props.resultsToVar
							}
						},
						direction: {		
							ref: "props.direction",
							label: "Display direction",
							type: "string",
							component: "dropdown",
							defaultValue: "ltr",
							options: [{
									value: "rtl",
									label: "Right To Left"
								}, {
									value: "ltr",
									label: "Left To Right"
								}
							]
						},
						answerHeadline: {
								type: "string",
								expression: "optional",
								ref: "props.answerHeadline",
								label: "Answer headline",
								defaultValue: "Answer for your question: <i>{{query}}</i> is:"
						},
						additionalContext: {
								type: "string",
								expression: "optional",
								ref: "props.additionalContext",
								label: "Additional Context",
								defaultValue: "You are a Data Analyst:"
						},
						includeSelContext: {
								type: "boolean",
								ref: "props.includeSelContext",							
								label: "Include Selection Context",
								show: false
						}
					}
				},
				Advanced: {
					type: "items", 
					label: "Advanced", 
						items: {
							max_tokens: {
								type: "integer",
								expression: "optional",
								ref: "props.max_tokens",
								label: "Max response tokens",
								defaultValue: 800,
							},
							temperature: {
								type: "number",
								expression: "optional",
								ref: "props.temperature",
								label: "Temperature",
								defaultValue: 0.3,
							},
							frequency_penalty: {
								type: "number",
								expression: "optional",
								ref: "props.frequency_penalty",
								label: "Frequency penalty",
								defaultValue: 0,
							},
							presence_penalty: {
								type: "number",
								expression: "optional",
								ref: "props.presence_penalty",
								label: "Presence penalty",
								defaultValue: 0,
							},
							top_p: {
								type: "number",
								expression: "optional",
								ref: "props.top_p",
								label: "Top P",
								defaultValue: 0.95,
							},
							stop: {
								type: "string",
								expression: "optional",
								ref: "props.stop",
								label: "Stop sequences (comma separated)",
								defaultValue: ""
							}
						}
					},
				settings: {
						type: "items",
						uses: "settings",
						label: "Advanced", 
							items: {}
				},
				about: {
					label: "About",
					component: "LogicalAskAIAbout"
				}
			}
		};
	}
	);
