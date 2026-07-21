import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema(
  {
    treatment: { type: String, required: true, trim: true, maxlength: 120 },
    subTreatment: { type: String, trim: true, maxlength: 120, default: '' },
    date: { type: String, required: true, trim: true, maxlength: 30 },
    time: { type: String, required: true, trim: true, maxlength: 30 },
    fullName: { type: String, required: true, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, maxlength: 30 },
    email: { type: String, trim: true, lowercase: true, maxlength: 160, default: '' },
    age: { type: String, trim: true, maxlength: 10, default: '' },
    gender: { type: String, trim: true, maxlength: 30, default: '' },
    city: { type: String, trim: true, maxlength: 100, default: '' },
    concern: { type: String, trim: true, maxlength: 2000, default: '' },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  },
  { timestamps: true }
)

appointmentSchema.index({ date: 1, time: 1 }, { unique: true })

export default mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema)
