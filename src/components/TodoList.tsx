import { prisma } from "@/lib/prisma";

export default async function TodoList() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      {todos.map((todo) => (
        <div>
          {todo.id} - {todo.title}
        </div>
      ))}
    </div>
  );
}
