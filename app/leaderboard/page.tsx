export default function LeaderboardPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Leaderboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Top players and achievements
          </p>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Rank</th>
                  <th className="text-left p-2">Player</th>
                  <th className="text-left p-2">Score</th>
                  <th className="text-left p-2">Runs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-500">
                    No entries yet
                  </td>
                </tr>
              </tbody>
            </table>
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
