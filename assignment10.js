const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Determine the current maximum number of listeners for an event
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current Maximum Listeners:', currentMaxListeners);

// Set the maximum number of listeners for an event to 5
eventEmitter.setMaxListeners(5);

// Verify the updated maximum number of listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log('Updated Maximum Listeners:', updatedMaxListeners);