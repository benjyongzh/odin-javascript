import React, { Component } from "react";

export default class Overview extends Component{
    constructor(props){
        super(props);
    };


    render(){
        const {taskList} = this.props;
        const listItems = taskList.map(task => <li key={task.id}>{task.text}</li>);

        return(
            <ul>
                {listItems}
            </ul>
        )
    }
};