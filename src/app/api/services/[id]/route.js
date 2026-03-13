import connectDB from "@/lib/db";
import ServiceModel from "@/models/ServiceModel";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    await connectDB();
    const service = await ServiceModel.findOne({ _id: id });
    return Response.json(service, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}