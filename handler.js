const Alexa = require('ask-sdk');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard('Hello World', speechText).getResponse();
  },
};

const FindEventsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'FindEventsIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';
    console.log(handlerInput.requestEnvelope.request.intent.slots);
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard('Hello World', speechText).getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard('Hello World', speechText).getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard('Hello World', speechText).getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    // any cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    return handlerInput.responseBuilder.speak('Sorry, I can\'t understand the command. Please say again.').reprompt('Sorry, I can\'t understand the command. Please say again.').getResponse();
  },
};

exports.handler = Alexa.SkillBuilders.custom().addRequestHandlers(
  LaunchRequestHandler,
  FindEventsIntentHandler,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  SessionEndedRequestHandler,
).lambda();
