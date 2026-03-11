import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    duration: { type: Number, required: true },
    durationType: { type: String, enum: ["hour", "day"], required: true },
    division: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    address: { type: String, required: true },
    totalCost: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Confirmed", "Completed", "Cancelled"], default: "Pending" },
    bookingDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});
const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
