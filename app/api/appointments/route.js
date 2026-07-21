import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Appointment from '@/models/Appointment'

export async function POST(request) {
  try {
    const payload = await request.json()
    const requiredFields = ['treatment', 'date', 'time', 'fullName', 'phone']
    const missingField = requiredFields.find((field) => !String(payload[field] || '').trim())

    if (missingField) {
      return NextResponse.json({ error: `${missingField} is required.` }, { status: 400 })
    }

    await connectDB()
    const appointment = await Appointment.create(payload)

    return NextResponse.json(
      { message: 'Appointment booked successfully.', appointmentId: appointment._id.toString() },
      { status: 201 }
    )
  } catch (error) {
    if (error?.code === 11000) {
      return NextResponse.json(
        { error: 'This time slot has just been booked. Please choose another time.' },
        { status: 409 }
      )
    }
    console.error('Unable to create appointment:', error)
    return NextResponse.json({ error: 'Unable to book the appointment. Please try again.' }, { status: 500 })
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')

  if (!date) {
    return NextResponse.json({ error: 'date is required.' }, { status: 400 })
  }

  try {
    await connectDB()
    const appointments = await Appointment.find({ date, status: { $ne: 'cancelled' } })
      .select('time -_id')
      .lean()

    return NextResponse.json({ bookedSlots: appointments.map((appointment) => appointment.time) })
  } catch (error) {
    console.error('Unable to fetch appointment availability:', error)
    return NextResponse.json({ error: 'Unable to load availability. Please try again.' }, { status: 500 })
  }
}
