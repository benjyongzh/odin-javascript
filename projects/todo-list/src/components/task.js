import * as eventManager from "./eventManager";
import { add } from 'date-fns';

export default function taskItem(title="My New Task", description=""/* , dueDate */, priority=1) {

    //let _isComplete = false;
    let dueDate = new Date();
    dueDate = add(dueDate, {
        years: 0,
        months: 0,
        weeks: 0,
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
    
      const setTitle = inputTitle => title = inputTitle;
      const setDueDate = inputDate => dueDate = inputDate;
      //const setDueDate = inputDueDate => dueDate = inputDueDate;
      //const setDescription = inputDescription => description = inputDescription;
      //const setPriority = inputPriority => priority = inputPriority;
      
      //const setCompletion = status => _isComplete = status;
      
      const setTaskValues = eventArgs => {
          setTitle(eventArgs.title);
          setDueDate(eventArgs.duedate);
          eventManager.publish('refreshTask', eventArgs.task);
        };
    
    const getTitle = () => title;
    //const getDescription = () => description;
    const getDueDate = () => dueDate;
    //const getPriority = () => priority;
    //const getCompletion = () => _isComplete;

    // eventManager.subscribe('setTaskValues', eventArgs => {
    //     setValues(eventArgs);
    // })

    return {
        setTitle,
        setDueDate,
        //setDescription,
        //setDueDate,
        // setPriority,
        // setCompletion,
        setTaskValues,

        getTitle,
        //getDescription,
        getDueDate,
        // getPriority,
        // getCompletion
    };
};