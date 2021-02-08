import React from "react";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";


export default {
    title: "EditableSpan Component",
    comment: EditableSpan
}

const onChangeCallback = action("Value changed")


export const EditableSpanBaseExample = () => {
    return <EditableSpan value={"Start Value"} onChange={onChangeCallback}/>
}