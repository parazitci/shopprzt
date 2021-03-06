/**
 * Address model events
 */



import { EventEmitter } from 'events';
import Address from './address.model';
let AddressEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AddressEvents.setMaxListeners(0);

// Model events
let events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for (let e in events) {
  let event = events[e];
  Address.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    AddressEvents.emit(event + ':' + doc._id, doc);
    AddressEvents.emit(event, doc);
  };
}

export default AddressEvents;
