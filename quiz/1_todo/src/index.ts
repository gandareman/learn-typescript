interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function logFirstTodo(): Todo {
  return todoItems[0];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function showCompleted(): Todo[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  // eslint-disable-next-line @typescript-eslint/camelcase
  const todo1 = { id: 4, title: 'item 4', done: false };

  addTodo(todo1);
  addTodo({
    id: 5,
    title: 'item 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
