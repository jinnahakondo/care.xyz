import mongoose from "mongoose";

const serviceModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    image: { type: String, required: true },
    features: [{ type: String }],
    rating: { type: Number, default: 0 },
}, { timestamps: true });

const ServiceModel = mongoose.models.Service || mongoose.model("Service", serviceModel);

export default ServiceModel;