
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the event handler
function eventHandler() {
  console.log('Event handler triggered!');
}

// Subscribe to the "customEvent" event
eventEmitter.on('customEvent', eventHandler);

// Emit the "customEvent" event
eventEmitter.emit('customEvent'); // This will trigger the event handler

// Remove the event handler
eventEmitter.removeListener('customEvent', eventHandler);

// Emit the "customEvent" event again
eventEmitter.emit('customEvent'); // This won't trigger the event handler

// Attempt to add the event handler again (just for illustration)
eventEmitter.on('customEvent', eventHandler);

// Emit the "customEvent" event once more
eventEmitter.emit('customEvent'); // This will trigger the event handler again
