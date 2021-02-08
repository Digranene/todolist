import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7605e903-b8ff-4265-a75c-a6e229f322d4"
    }
}

export const todolistsAPI = {
    getTodolists() {
        const promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    createTodolists(title: string) {
        const promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: title}, settings)
        return promise
    },
    deleteTodolists() {
        const promise = axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    updateTodolists() {
        const promise = axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "Bla-bla-bla"}, settings)
        return promise
    }
}