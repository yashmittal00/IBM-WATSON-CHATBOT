
var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

//  Assistant service wrapper.
var service = new AssistantV1({
  username: '614eaa80-89a4-41-a1df-3d851caf9a39', // service username
  password: 'gQ26p1bIrI', // service password
  version: '2018-02-16'
});

var workspace_id = 'dd82cd-a8a5-4caa-a776-c05f3f493213'; // replace with workspace ID


service.message({
  workspace_id: workspace_id
  }, processResponse);

function processResponse(err, response) {
  if (err) {
    console.error(err);
    return;
  }

  
  if (response.intents.length > 0) {
    console.log('Detected intent: #' + response.intents[0].intent);
  }

  
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }


    var newMessageFromUser = prompt('>> ');
   
    service.message({
      workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      context : response.context,
    }, processResponse)
}