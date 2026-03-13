import connectDB from "@/lib/db";
import ServiceModel from "@/models/ServiceModel";

export async function GET(request) {
    try {
        await connectDB();
        const services = await ServiceModel.find();
        return Response.json({ services }, { status: 200 });
    } catch {
        return Response.json({ error: "Failed to fetch services" }, { status: 500 });
    }
}