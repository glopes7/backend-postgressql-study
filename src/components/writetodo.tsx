import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.toString();

  if (!title) return;

  await prisma.todo.create({
    data: {
      title,
    },
  });

  revalidatePath("/");
}

export function WriteTodo() {
  return (
    <div className="flex items-center h-96 justify-center">
      <div className="w-96 h-44 bg-white rounded-md">
        <div className="items-center text-center font-semibold text-black text-xl mt-3">
          Write Todo List
          <form className="flex justify-center mt-10 gap-1" action={createTodo}>
            <input
              className="bg-slate-200 rounded-lg border-transparent text-base textarea-md"
              type="text"
              placeholder="Write here"
              name="title"
            />
            <button className="btn btn-primary  bg-gray-600 border-none hover:bg-gray-700 ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
