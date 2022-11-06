const eventItem = (name) => {
    handlers = [];

    const addHandler = handler => {
        handlers.push(handler);
    }

    const removeHandler = handlerToRemove => {
        for (let i = 0; i < handlers.length; i++){
            if (handlers[i] == handlerToRemove){
                handlers.splice(i,1);
                break;
            }
        }
    }

    const fire = eventArgs => {
        handlers.forEach(handle => {
            handle(eventArgs);
        });
    }

    return {
        name,
        handlers,
        addHandler,
        removeHandler,
        fire
    }
}

const eventManager = () => {
    const events = [];

    const showEvents = () => events;

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

        event.addHandler(handler);

    }

    return {
        showEvents,
        publish,
        subscribe
    }

};

export {
    eventItem,
    eventManager
}