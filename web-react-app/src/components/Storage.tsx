export interface TaskObject {
    id:number;
    group?:string;
    title: string;
    description: string;
    duedate: Date;
    priority: string;
    status: string;
}


export const StorageService = {
    getCounter(): number | null {
        const counter = localStorage.getItem('counter');
        return counter ? Number(counter) : null;
    },

    setCounter(counter: number): void {
        localStorage.setItem('counter', counter.toString());
    },

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
