import {useEffect, useState} from "react";
import axios from "axios";
import https from 'https';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);

    // At instance level
    const instance = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });

    useEffect(() => {
        axios
            .get("http://localhost:8080/posts")
            .then(response => {
                setTasks(response.data)
                console.log(response.data);
            });
    }, []);
    const [task, setTask] = useState({ task: "" });

    const handleChange = ({ currentTarget: input }) => {
        input.value === ""
            ? setTask({ task: "" })
            : setTask((prev) => ({ ...prev, task: input.value }));
    };

    const addTask = async (e) => {
        e.preventDefault();
        try {
            if (task.id) {
                const { data } = await axios.put(url + "/" + task.id, {
                    task: task.task,
                });
                const originalTasks = [...tasks];
                const index = originalTasks.findIndex((t) => t._id === task.id);
                originalTasks[index] = data.data;
                setTasks(originalTasks);
                setTask({ task: "" });
                console.log(data.message);
            } else {
                const { data } = await axios.post(url, task);
                setTasks((prev) => [...prev, data.data]);
                setTask({ task: "" });
                console.log(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editTask = (id) => {
        const currentTask = tasks.filter((task) => task.id === id);
        setTask(currentTask[0]);
    };

    const updateTask = async (id) => {
        try {
            const originalTasks = [...tasks];
            const index = originalTasks.findIndex((t) => t.id === id);
            const { data } = await axios.put(url + "/" + id, {
                completed: !originalTasks[index].completed,
            });
            originalTasks[index] = data.data;
            setTasks(originalTasks);
            console.log(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const { data } = await axios.delete(url + "/" + id);
            setTasks((prev) => prev.filter((task) => task.id !== id));
            console.log(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="my-12 w-screen min-h-fit flex flex-col items-center justify-center">
            <h1 className="text-fuchsia-600 text-7xl">Todo-List</h1>
            <div className="flex flex-col items-center p-5 rounded-lg">
                <form onSubmit={addTask} className="flex items-center mb-6">
                    <input className="grow text-fuchsia-600 text-center gradient-fuchsia text-3xl my-2" type="text" placeholder="Task to be done" onChange={handleChange} value={task.task}/>
                    <button type="submit" className="m-4 rounded bg-fuchsia-700 text-white text-xl hover:bg-fuchsia-900"> {task.id ? "Update" : "Add"}</button>
                </form>
                {tasks?.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-1 my-1 rounded-sm border-2">
                        <input className="cursor-pointer text-base outline-none" type="checkbox" checked={task.completed} onChange={() => updateTask(task.id)}/>
                        <p className={task.completed ? "grow px-2.5 line-through" : "grow px-2.5"}></p>
                        <button onClick={() => editTask(task.id)} className="outline-none border-none bg-transparent text-base cursor-pointer px-2">
                            &#9998;
                        </button>
                        <button onClick={() => deleteTask(task._id)}
                        className="outline-none border-none bg-transparent text-base cursor-pointer px-2"
                        >
                            &#10006;
                    </button>
                    </div>
                ))}
                {tasks?.length === 0 && <h2 className="flex text-lg m-0 items-center text-white justify-center capitalize rounded">No tasks</h2>}
            </div>
        </main>
    );
}

