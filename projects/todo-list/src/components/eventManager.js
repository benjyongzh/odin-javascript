/* export default function eventManager() {
    const events = [];

    const getEvents = () => {
        return events;
        //events.forEach(event => console.log(event.name));
    }

    const getEvent = eventName => {
        const eventList = events.filter(event => {
            event.name === eventName}
        );
        return eventList[0];
    };

    const publish = (eventName, eventArgs) => {
        let event = getEvent(eventName);

        if (!event) {
            event = eventItem(eventName);
            events.push(event);
        }
        event.fire(eventArgs);
    };

    const subscribe = (eventName, handler) => {
        let event = getEvent(eventName);
        if (!event){
            event = eventItem(eventName);
            events.push(event);
        }

        event.addHandler(handler);

    }

    return {
        getEvents,
        publish,
        subscribe
    }

}; */

import eventItem from "./eventItem";

const events = [];

function getEvents() {
    return events;
}

function getEvent (eventName) {
    const eventList = events.filter(event => {
        event.name === eventName}
    );
    return eventList[0];
};

function publish(eventName, eventArgs) {
    let event = getEvent(eventName);

    if (!event) {
        event = eventItem(eventName);
        events.push(event);
    }
    event.fire(eventArgs);
};

function subscribe(eventName, handler) {
    let event = getEvent(eventName);
    if (!event){
        event = eventItem(eventName);
        events.push(event);
    }

    event.addHandler(handler);
}

export {
    getEvents,
    getEvent,
    publish,
    subscribe
};