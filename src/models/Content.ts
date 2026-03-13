import mongoose, { Schema, Document } from "mongoose";

export interface IContent extends Document {
    data: Record<string, unknown>;
    version: number;
    isActive: boolean;
    uploadedPdf: string;
    createdAt: Date;
    updatedAt: Date;
}

const ContentSchema = new Schema<IContent>(
    {
        data: { type: Schema.Types.Mixed, required: true },
        version: { type: Number, default: 1 },
        isActive: { type: Boolean, default: true },
        uploadedPdf: { type: String, default: "" },
    },
    { timestamps: true }
);

export default mongoose.models.Content ||
    mongoose.model<IContent>("Content", ContentSchema);
