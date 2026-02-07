// src/app/dashboard/page.tsx
import { createServerSupabase } from '@/lib/supabase.server';   // ← from .server.ts
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createServerSupabase();

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/auth');
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Welcome back, {session.user.email}!</p>
      <pre className="bg-white p-4 rounded mt-4 overflow-auto">
        {JSON.stringify(session.user, null, 2)}
      </pre>
      {/* Add characters/submit/leaderboard links here later */}
    </div>
  );
}