# AskAI
AskAI is a ground-breaking Qlik Sense extension, bringing for the first time the power of Generative AI into your BI environment, thus making every user an AI expert. Ever wanted to get more from your data and move into the age of AI? Ask AI is your tool. Simple than ever before – install and use immediately and ask just about anything about your data! 
##### ⚡Uncover hidden patterns in your data.
##### ⚡Generate amazing insights. 
##### ⚡Enrich user experience within Qlik Sense.
##### ⚡3 different AI engines in one extension.

![](https://raw.githubusercontent.com/Yossi-Roset/AskAI/main/docs/img/gifExample.gif)

### Getting Started
#### Get Ask AI
Go to https://github.com/Yossi-Roset/AskAI and download the Zip file.

#### Install on Qlik Sense Enterprise
- Open Qlik Management Console
- Select Extensions on the QMC start page or from the Start drop-down menu.
- Click Import.
- Click Choose File and select .zip file.
- Click Open in the File Explorer window.
- Click Import.
- Refresh the Qliksense page, and you will now see the Ask AI under your Custom Objects -> Extensions.

#### Install on Qlik Sense SaaS
- In the Management Console, go to the Extensions section and click Add in the upper right-hand corner.
- In the pop-up, click Browse to select an extension file, or drop a file in the designated area.
- Click Upload.
- In the Management Console, go to the Content Security Policy section and Click Add in the upper right-hand corner.
- In the dialog, set the Name to “Ask AI”
- set the Origin to“oai.logsys.co.il”
- check the following Directives: connect-src, object-src, script-src, font-src, style-src.
- Click Add.
- Repeat for https://api.openai.com to Enable OpenAI
- Repeat for https://*.openai.azure.com to Enable AzureOpenAI
- Now you can use the Ask AI under Extensions panel in the Sheet Editor.



### Documentation:
##### Data Source
- The "DataSource" is the qlik sense table or straight table that contains the data you want to ask the AI Engine about.

- Select Master Visualization from the list, or uncheck "Use Master Visualization" and put an object id or a variable.

- Another option is to uncheck "Data From Table Object" and insert your data in plaint text / expression.

![](https://raw.githubusercontent.com/Yossi-Roset/AskAI/main/docs/img/properties_DataSource.png?raw=true)


#### AI Platforms
- The extension supports up to 3 different AI platforms. you can determine what platforms will be in use, or to set a default and let the user choose between them.  Following is a quick explanaion:

***Open AI:***

Open AI is the platform behind the famous ChatGPT.

**Pros**: 16K tokens in the largest model, so yo can send bigger tables.

**Cons**: Your Data is sent out to OpenAI Platform
You will need to buy a token for the API (not the ChatGPT Plus subscription)

- To use OpenAI platform in the extension check "Enable OpenAI". 
Select "Show OpenAI Button" if you want the button to be visible.
- Insert your OpenAPI Key.
- If you need to buy a Key: go to your OpenAI account, go to Billing overview and click "set up paid account", then go to "API Keys" and select "Create new secret key".

- Select your OpenAI Model.
You cna select here the model that will be used to analyze your data, the default is **gpt-3.5-turbo-16k**.


***Azure OpenAI:***

Azure OpenAI is Microsoft's enterprise solution for OpenAI:

**Pros**
Secure! your data is encrypted and is not going out of your Azure environment. you can configure a retention policy.
You can train a model on your company's data.
**Cons**
Requires Azure subscription.
biggest model for now is up to 4k Tokens

- To use Azure OpenAI platform in the extension check "Enable Azure OpenAI".
Select "Show Azure OpenAI Button" if you want the button to be visible.

- To get your Key and URL: go to Azure OpenAI Studio, in the "Chat playground" click "Sample Code" choose "curl" and copy the key and the deployment URL.

***Python SSE (PandasAI)*** (Not Supported In SaaS)
This is the most secure option, it uses OpenAI but it sends only the column names to OpenAI not the data itself.

**Pros**
Very secured – data stays on local user environment
Accourate numerical calculations
**Cons**
Answers simpler questions than other platforms
Requires a Python Server Side Extension installation

 To use Python SSE platform in the extension check "Python SSE".
Select "Show Python SSE Button" if you want the button to be visible.


Instructions for Qlik's Python SSE installation, here:
https://github.com/qlik-oss/server-side-extension/blob/master/examples/python/GetStarted.md

![](https://raw.githubusercontent.com/Yossi-Roset/AskAI/main/docs/img/AI_platforms.png?raw=true)

#### Settings

##### Default Question
- The default question when the sheet is loading.

##### Bold Names and Values.
- marks in **bold** the names and the numbers in the answer.

##### Title
- Set the title above the Question input box

##### Button Caption
- Set the caption on the button

##### Results to Variable
- The answer will be set into a variable instead of a dialog, a drop-down menu will appear to select a variable.
- Marking this option will disable the popup answer dialog.

##### Display Direction
- Fully supports LTR or RTL, Left to Right is the default.

##### Answer Headline
- The text that will be added to the beginning of the answer.

##### Additional Context
- An additional context that will be sent to the AI Engine, for example your selections or your comany name.

![](https://raw.githubusercontent.com/Yossi-Roset/AskAI/main/docs/img/Settings.png?raw=true)

#### Advanced

Advanced AI engines settings.

##### Max Response
- Set a limit on the number of tokens per model response. The API supports a maximum of 4000 tokens shared between the prompt (including system message, examples, message history, and user query) and the model's response. One token is roughly 4 characters for typical English text.

##### Temperature
- Controls randomness. Lowering the temperature means that the model will produce more repetitive and deterministic responses. Increasing the temperature will result in more unexpected or creative responses. Try adjusting temperature or Top P but not both.
Frequency penalty
Reduce the chance of repeating a token proportionally based on how often it has appeared in the text so far. This decreases the likelihood of repeating the exact same text in a response.

##### Presence penalty
- Reduce the chance of repeating any token that has appeared in the text at all so far. This increases the likelihood of introducing new topics in a response.

##### Top P
- Similar to temperature, this controls randomness but uses a different method. Lowering Top P will narrow the model’s token selection to likelier tokens. Increasing Top P will let the model choose from tokens with both high and low likelihood. Try adjusting temperature or Top P but not both.

##### Stop Sequence
- Make the model end its response at a desired point. The model response will end before the specified sequence, so it won't contain the stop sequence text. For ChatGPT, using <|im_end|> ensures that the model response doesn't generate a follow-up user query. You can include as many as four stop sequences - Comma separated.

![](https://raw.githubusercontent.com/Yossi-Roset/AskAI/main/docs/img/Advanced.png?raw=true)

#### Appearance
- Control outer object titles, subtitles, footnote and hover menu.





