import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  return (
    <div className="container my-5">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
}