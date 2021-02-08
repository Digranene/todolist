import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";


export default {
    title: "Task Component",
    comment: Task
}

const changeTaskStatusCallback = action("Status changed")
const changeTaskTitleCallback = action("Title changed")
const removeTaskCallback = action("Task removed")

export const TaskBaseExample = () => {
    return <>
        <Task
            task={ {id: "1", isDone: true, title: "Kabzda"} }
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            todolistId={"todolistId1"}
        />
        <Task
            task={ {id: "2", isDone: false, title: "Prosto"} }
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            todolistId={"todolistId2"}
        />
    </>
}