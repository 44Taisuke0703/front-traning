import axios from "axios";

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];
const initDB = async () => {
  // まず全件取得
  const res = await axios.get("http://localhost:3000/todo");
  const todosOnServer = res.data;
  // サーバー上の全todoを個別に削除
  await Promise.all(
    todosOnServer.map((todo) =>
      axios.delete(`http://localhost:3000/todo/${todo.id}`)
    )
  ).catch((error) => {
    console.error("Error deleting todos:", error);
  });
  // 新しいデータを追加
  await Promise.all(
    todos.map((todo) => {
      return axios.post("http://localhost:3000/todo", todo);
    })
  )
    .then(() => {
      console.log("DB initialized successfully");
    })
    .catch((error) => {
      console.error("Error initializing DB:", error);
    });
};

initDB();
