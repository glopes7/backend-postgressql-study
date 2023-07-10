import TodoList from "@/components/TodoList";
import { WriteTodo } from "@/components/writetodo";

export default async function Home() {
  return (
    <div>
      <div className="bg-gray-300 h-full"></div>
      <WriteTodo />
      <TodoList />
    </div>
  );
}
