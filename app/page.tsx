import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">AI Interactive Story Engine</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Experience branching narratives with meaningful choices
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Link 
            href="/run/new" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Start New Run</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Begin a new interactive story adventure
            </p>
          </Link>
          
          <Link 
            href="/profile" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Profile</h2>
            <p className="text-gray-600 dark:text-gray-400">
              View your stats and past runs
            </p>
          </Link>
          
          <Link 
            href="/leaderboard" 
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">Leaderboard</h2>
            <p className="text-gray-600 dark:text-gray-400">
              See top players and achievements
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
