export interface TaskObject {
    title: string;
    description: string;
    duedate: Date;
    priority: string;
    status: string;
}

export const StorageService = {
    getTasks: (): TaskObject[] => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskObject[];
        storedTasks.forEach(task => task.duedate = new Date(task.duedate));
        console.log('Read from local storage:', storedTasks);
        return storedTasks;
    },

    setTasks: (tasks: TaskObject[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Written to local storage:', tasks);
    },
};
