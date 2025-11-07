import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
    try {
        const { name, email, password, role } = await req.json();
        await connectDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
        }

        const newUser = new User({
        name,
        email,
        password,
        role: role === "admin" ? "admin" : "user",
        });

        await newUser.save();
        return new Response(JSON.stringify({ message: "Signup successful" }), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}