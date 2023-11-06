/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CF6CtRGlgJi
 */
export default function Component() {
    return (
      <div key="1" className="w-full h-full flex flex-col min-w-[360px] max-w-[960px]">
        <header className="h-16 flex items-center justify-between px-4 border-b-2 border-gray-300">
          <button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </button>
          <div className="h-10 w-32 bg-gray-200" />
          <button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </header>
        <main className="flex-grow overflow-y-auto">
          <div className="flex flex-col gap-4 p-4">
            <div className="w-full h-64 rounded-md overflow-hidden border-2 border-gray-300 bg-gray-200" />
            <div className="flex items-center gap-2">
              <button className="focus:outline-none">
                <svg
                  className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
              <button className="focus:outline-none">
                <svg
                  className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
                  <polyline points="9 17 4 12 9 7" />
                  <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                </svg>
              </button>
              <button className="focus:outline-none">
                <svg
                  className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
              <button className="focus:outline-none ml-auto">
                <svg
                  className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Liked by
              <strong className="font-medium text-gray-600">user</strong> and{" "}
              <strong className="font-medium text-gray-600">others</strong>
            </p>
            <div className="flex items-center gap-2">
              <strong className="font-medium text-gray-600">user</strong>
              <p className="text-sm text-gray-500">Great post!</p>
            </div>
            <p className="text-xs text-gray-400">2 HOURS AGO</p>
          </div>
        </main>
        <footer className="h-16 flex items-center justify-around px-4 border-t-2 border-gray-300">
          <button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
          <button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
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
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          <div className="relative">
            <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-200" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </footer>
      </div>
    )
  }
  