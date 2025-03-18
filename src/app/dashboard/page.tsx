import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const supabase = createClient()

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to your Dashboard
          </h1>
          <p className="mt-4 text-gray-600">
            You are signed in as {session.user.email}
          </p>
        </div>
      </div>
    </div>
  )
}