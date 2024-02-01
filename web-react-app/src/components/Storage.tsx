// Define TaskObject interface for task objects
export interface TaskObject {
    id: number;
    group?: string;
    title: string;
    description: string;
    duedate: Date;
    priority: string;
    status: string;
}

// Define StorageService object for handling local storage operations
export const StorageService = {
    // Get counter from local storage
    getCounter(): number | null {
        const counter = localStorage.getItem('counter');
        return counter ? Number(counter) : null;
    },

    setCounter(counter: number): void {
        // Set counter in local storage
        localStorage.setItem('counter', counter.toString());
    },

    getTasks: (): TaskObject[] => {
        // Get tasks from local storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskObject[];
        // Convert duedate from string to Date object
        storedTasks.forEach(task => task.duedate = new Date(task.duedate));
        console.log('Read from local storage:', storedTasks);
        return storedTasks;
    },
    // Set tasks in local storage
    setTasks: (tasks: TaskObject[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Written to local storage:', tasks);
    },
};
