import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
} // ❗ interface is an abstract type which tells the compiler which property names an object can have and what type of value each property can have.

axios.get(url).then((response) => {
	const todo = response.data as Todo;
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
   
    `);
};
