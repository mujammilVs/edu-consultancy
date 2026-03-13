import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
    name: string;
    email: string;
    phone: string;
    countryPreference: string;
    visaType: string;
    message: string;
    formType: "consultation" | "apply" | "contact";
    status: "new" | "contacted" | "in-progress" | "converted" | "closed";
    createdAt: Date;
    updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        countryPreference: { type: String, default: "" },
        visaType: { type: String, default: "" },
        message: { type: String, default: "" },
        formType: {
            type: String,
            enum: ["consultation", "apply", "contact"],
            default: "contact",
        },
        status: {
            type: String,
            enum: ["new", "contacted", "in-progress", "converted", "closed"],
            default: "new",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
