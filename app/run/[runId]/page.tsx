interface RunPageProps {
  params: Promise<{
    runId: string;
  }>;
}

export default async function RunPage({ params }: RunPageProps) {
  const { runId } = await params;
  
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Story Run</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Run ID: {runId}
          </p>
        </div>
        
        <div className="border rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Story Content</h2>
            <p className="text-gray-600 dark:text-gray-400">
              The story content will appear here
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Choices</h3>
            <div className="grid gap-2">
              <button className="p-4 border rounded text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Choice 1
              </button>
              <button className="p-4 border rounded text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Choice 2
              </button>
            </div>
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
