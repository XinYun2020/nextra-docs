import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "../../../db";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/todo");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="w-full hidden sm:flex items-center text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="btn bg-red-600 dark:bg-red-600 dark:hover:bg-red-500">
            Cancel
          </Link>
          <button type="submit" className="btn">
            Create
          </button>
        </div>
      </form>
    </>
  );
}
