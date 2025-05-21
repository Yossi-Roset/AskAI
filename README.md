# AskAI
AskAI is a ground-breaking Qlik Sense extension, bringing for the first time the power of Generative AI into your BI environment, thus making every user an AI expert. Ever wanted to get more from your data and move into the age of AI? Ask AI is your tool. Simple than ever before – install and use immediately and ask just about anything about your data! 
##### ⚡Uncover hidden patterns in your data.
##### ⚡Generate amazing insights. 
##### ⚡Enrich user experience within Qlik Sense.
##### ⚡Supports Azure OpenAI and OpenAI

![AskAIgif](https://github.com/user-attachments/assets/6219d825-ed53-4b83-8c5a-8f5f929d1872)

### Getting Started
#### Get Ask AI
Go to https://askai.logsys.co.il to download the Zip File.

#### Install on Qlik Sense Enterprise
- Open Qlik Management Console
- Select **Extensions** on the QMC start page or from the Start drop-down menu.
- Click **Import**.
- Click **Choose File** and select .zip file.
- Click **Open** in the File Explorer window.
- Click **Import**.
- Refresh the Qliksense page, and you will now see the Ask AI under your Custom Objects -> Extensions.

#### Install on Qlik Sense SaaS
- In the Management Console, go to the **Extensions** section and click **Add** in the upper right-hand corner.
- In the pop-up, click **Browse** to select an extension file, or drop a file in the designated area.
- Click **Upload**.
- In the Management Console, go to the Content Security Policy section and Click **Add** in the upper right-hand corner.
- In the dialog, set the Name to “Ask AI”
- set the Origin to “prod.logsys.co.il”
- check the following Directives: connect-src, object-src, script-src, font-src, style-src.
- Click **Add**.
- Repeat for https://api.openai.com to Enable OpenAI
- Repeat for https://*.openai.azure.com to Enable AzureOpenAI
- Now you can use the Ask AI under Extensions panel in the Sheet Editor.



### Documentation:
##### Data Source
- The "DataSource" is one or more qlik sense table or straight table that contains the data you want to ask the AI Engine about.

- Select Master Visualization from the list, or uncheck "Use Master Visualization" and put an object id or a variable.

![addtable](https://github.com/user-attachments/assets/a9555e56-6fd6-4ab8-b5c4-4e16fd433ea2)

#### AI Platforms
- The extension supports 2 different AI platforms:

***Open AI:***

![openaisett](https://github.com/user-attachments/assets/85c3b92a-de9e-4eac-9bbe-00155baedcd0)
  
- Before using OpenAI you need to buy an API Key: go to your OpenAI account, go to Billing overview and click "set up paid account", then go to "API Keys" and select "Create new secret key".
([https://platform.openai.com/account/billing/overview](https://platform.openai.com/account/billing/overview))

- Select your OpenAI Model.
You can select here the model that will be used to analyze your data, the default is **gpt-4-mini**.

- Create your own Assistant using OpenAI Playground.
Here is where your prompting skills will be needed, Enable Code Interperter adn set some basic rules, for eaxmple:

- You are a Data Analyst:
- Use the Code Interpreter for all calculations and data filtering tasks.
- Omit reasoning or intermediate steps—provide only the final result without explanatory text (e.g., no "first, we need to...").
- Return results in HTML format whenever applicable or possible.
- Present any list of values as an HTML <ul> list with <li> elements..

***Azure OpenAI:***

![openaiazuresett](https://github.com/user-attachments/assets/2d4df305-341d-4769-8c32-cae1847b8941)

- To get your Key and URL: go to Azure OpenAI Studio, in the "Chat playground" click "Sample Code" choose "curl" and copy the key and the deployment URL.

- Create your own Assistant using Azure AI Studio.
Here is where your prompting skills will be needed, Enable Code Interperter and set some basic rules, for eaxmple:

You are a Data Analyst:

Use the Code Interpreter for all calculations and data filtering tasks.

Omit reasoning or intermediate steps—provide only the final result without explanatory text (e.g., no "first, we need to...").

Return results in HTML format whenever applicable or possible.

Present any list of values as an HTML ul list with li elements..


### About

#### About 'AskAI' Extension:

The 'AskAI' extension has been developed by the Logical BI group, a leading team of experts in Business Intelligence solutions. At Logical BI, we are passionate about harnessing the power of data to drive meaningful insights. 'AskAI' empowers users to interact with their data using natural language, making data exploration effortless and intuitive.

#### **About Logical BI Group:**

Logical BI is a cutting-edge provider of Business Intelligence and data analytics solutions, dedicated to helping businesses make informed decisions through data-driven insights. To learn more about us and our other innovative products and services, please visit our website: https://logsys.co.il

#### **Discover 'LogiExport' Extension:**

In addition to 'AskAI', we have also developed another exceptional extension for QlikSense users called 'LogiExport'. 'LogiExport' streamlines the exporting process, enabling users to effortlessly extract and share data in various formats. Learn more about 'LogiExport' here: https://logiexport.logsys.co.il.


*For support contact us by email: support@logsys.co.il*


