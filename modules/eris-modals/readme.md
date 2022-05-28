# Eris Modals

Adds i.createModal option to Eris command interaction, component interaction && unknown interaction

## How to use?

Its very simple
```js
const eris = require("eris");
const client = new eris("token" , {intents: ["all"]});
require("eris-modals")(eris)
```
Now you'll get i.createModal in eris command, component, unknown interaction

```js
i.createModal(options);

/*
Modal formatting options :- https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object
*/
```