export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
          Rachna Parakh&apos;s Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Welcome to my portfolio website
        </p>
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-gray-400">
            This portfolio is currently under construction.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="animate-pulse">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="animate-pulse delay-100">
              <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
            </div>
            <div className="animate-pulse delay-200">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
