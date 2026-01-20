export default function ProfilePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">
            View your stats and past runs
          </p>
        </div>
        
        <div className="border rounded-lg p-6 space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">User Stats</h2>
            <p className="text-gray-500">Sign in to view your profile</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Recent Runs</h2>
            <p className="text-gray-500">No runs yet</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="/" 
            className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
