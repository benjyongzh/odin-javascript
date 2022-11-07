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

function getEvent(eventName) {
    //console.log(events);
    const tempList = [];
    //console.log(events.length);
    events.forEach(event => {

        //console.log(events.length);
        if (event.name == eventName){
            tempList.push(event);
        }
    })

    //console.log(tempList);
    return tempList[0];
};

function publish(eventName, eventArgs) {
    //console.log("publish ran");
    let event = getEvent(eventName);
    //console.log(event);
    if (!event) {
        event = eventItem(eventName);
        events.push(event);
    }
    /* console.log(event);
    console.log(events.length); */

    event.fire(eventArgs);
};

function subscribe(eventName, handler) {
    let event = getEvent(eventName);
    if (!event){
        event = eventItem(eventName);
        events.push(event);
    }

    //console.log(events);

    event.addHandler(handler);
}

export {
    events,
    getEvent,
    publish,
    subscribe
};