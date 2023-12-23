const EventEmitter = require('events');

//create an instance of eventEmitter
const eventEmitter = new EventEmitter();

//subscribe to the "subscribe" event

eventEmitter.on('subscribe', () =>{
    console.log('user has subscribed !');
});

//simulate a user subscribing
function simulateUserSubscription(){
    eventEmitter.emit('subscribe')
};

simulateUserSubscription();