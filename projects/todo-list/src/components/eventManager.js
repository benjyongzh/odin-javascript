const eventItem = (name) => {
    handlers = [];

    const addHandler = handler => {
        handlers.push(handler);
    }
    return {
        name,
        handlers,
        addHandler
    }
}

const eventManager = () => {
    const events = [];

    const getEvent = (eventName) => {
        return events.filter(event => {
            event.name === eventName}
        )[0];
    };

    const publish = (eventName, eventArgs) => {
        const event = getEvent(eventName);

        if (!event) {
            event = eventItem(eventName);
            events.push(event);
        }
        event.fire(eventArgs);
    };

    const subscribe = (eventName, handler) => {
        const event = getEvent(eventName);
        if (!event){
            event = eventItem(eventName);
            events.push(event);
        }

        event.addHandler(event);

    }

    return {
        publish,
        subscribe
    }

};

export {
    eventItem,
    eventManager
}