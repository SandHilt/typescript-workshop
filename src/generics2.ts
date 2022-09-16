interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function responseToJSON<T>(response: Response): Promise<T> {
  const json = await response.json();
  return json;
}

async function getTodo() {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await responseToJSON<Todo>(request);
  return todo;
}

getTodo()
  .then((todo) => {
    console.log(todo);
  })
  .catch((error) => {
    console.log(error);
  });
