import Link from "next/link"
async function getData() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
}
export default async function Component() {
    const data = await getData()
    const a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return (
        <section className="flex flex-col lg:flex-row lg:space-x-6">
            <header className="flex justify-between items-center px-6 py-4 bg-zinc-900 text-zinc-50">
                <Link className="flex items-center space-x-2" href="#">
                    <svg
                        className=" h-10 w-10"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M15 11h.01" />
                        <path d="M11 15h.01" />
                        <path d="M16 16h.01" />
                        <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
                        <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                    </svg>
                    <h1 className="text-3xl">Food Blog</h1>
                </Link>
                <nav className="hidden lg:flex space-x-6">
                    <Link className="text-lg hover:text-zinc-300" href="#">
                        Home
                    </Link>
                    <Link className="text-lg hover:text-zinc-300" href="#">
                        Recipes
                    </Link>
                    <Link className="text-lg hover:text-zinc-300" href="#">
                        Categories
                    </Link>
                    <Link className="text-lg hover:text-zinc-300" href="#">
                        About
                    </Link>
                </nav>
            </header>
            <main className="flex-1 lg:px-12 py-6 space-y-6">
                <article className="border p-6 rounded-lg space-y-4">
                    <img
                        alt="Featured Image"
                        className="object-cover rounded-md"
                        height="200"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "350/200",
                            objectFit: "cover",
                        }}
                        width="350"
                    />
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Posted by John Doe on November 10, 2023</p>
                    <p className="text-base text-zinc-700 dark:text-zinc-200">
                        Pasta is a type of food typically made from an unleavened dough of wheat...
                    </p>
                </article>
            </main>
            <aside className="lg:w-80 p-6 space-y-6">
                <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Search</h3>
                    <input
                        className="w-full px-3 py-2 border rounded-md text-base text-zinc-700 dark:text-zinc-200"
                        placeholder="Search..."
                        type="search"
                    />
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Popular Categories</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                className="text-base text-zinc-700 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-100"
                                href="#"
                            >
                                Pasta
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="border p-4 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Recent Posts</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                className="text-base text-zinc-700 dark:text-zinc-200 hover:text-zinc-500 dark:hover:text-zinc-100"
                                href="#"
                            >
                                Delicious Pasta
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </section>
    )
}

