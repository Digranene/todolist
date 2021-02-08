import {AddItemForm} from "./AddItemForm";
import React from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: "AddItemForm Component",
    comment: AddItemForm
}

const callback = action("Button press in form with: ")

export const AddItemFormBaseExample = (props: any) => {
    return <AddItemForm addItem={ callback } />
}