/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L2xiLJAAiqq
 */
import Link from "next/link"

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-800">
                <Link className="flex items-center justify-center" href="#">
                    <svg
                        className=" h-6 w-6"
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
                        <path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
                        <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
                        <path d="M18 22V5l-6-3-6 3v17" />
                        <path d="M12 7v5" />
                        <path d="M10 9h4" />
                    </svg>
                    <span className="ml-2 text-xl font-semibold">Our Church</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Services
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Events
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1 container mx-auto">
                <section className="relative">
                    <img
                        alt="Church banner"
                        className="object-cover w-full h-72"
                        height="780"
                        src="/1.jpg"
                        style={{
                            aspectRatio: "1920/780",
                            objectFit: "cover",
                        }}
                        width="1920"
                    />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center">
                        Welcome to Our Church
                    </h1>
                </section>
                <section className="p-4 lg:p-6">
                    <h2 className="text-3xl font-bold">About Us</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum varius leo, in tincidunt mi.
                        Integer feugiat felis id libero hendrerit, non luctus quam tristique.
                    </p>
                </section>
                <section className="p-4 lg:p-6">
                    <h2 className="text-3xl font-bold">Upcoming Events</h2>
                    <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="border rounded-md p-4">
                            <h3 className="text-xl font-semibold">Event 1</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h3 className="text-xl font-semibold">Event 2</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h3 className="text-xl font-semibold">Event 3</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
                <p className="text-xs text-gray-600 dark:text-gray-400">© 2023 Our Church. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

