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

const _events = [];

function getEvents() {return _events;};

function getEvent(eventName) {
    //console.log(events);
    const tempList = [];
    //console.log(events.length);
    _events.forEach(event => {

        //console.log(events.length);
        if (event.name == eventName){
            tempList.push(event);
        }
    })

    //console.log(tempList);
    return tempList[0];
};

function publish(eventName, eventArgs) {
    let event = getEvent(eventName);
    if (!event) {
        event = eventItem(eventName);
        _events.push(event);
    }
    /* console.log(event);
    console.log(events.length); */

    event.fire(eventArgs);
};

function subscribe(eventName, handler) {
    let event = getEvent(eventName);
    if (!event){
        event = eventItem(eventName);
        _events.push(event);
    }

    //console.log(events);

    event.addHandler(handler);
}

export {
    //events,
    getEvents,
    getEvent,
    publish,
    subscribe
};