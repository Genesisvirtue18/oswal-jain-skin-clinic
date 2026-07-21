'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react'

const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

function localDate() {
  const now = new Date()
  const offset = now.getTimezoneOffset()
  return new Date(now.getTime() - offset * 60_000).toISOString().slice(0, 10)
}

function slotHasPassed(date, time) {
  if (date !== localDate()) return false
  const [clock, period] = time.split(' ')
  let [hours, minutes] = clock.split(':').map(Number)
  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0
  const slotTime = new Date()
  slotTime.setHours(hours, minutes, 0, 0)
  return slotTime <= new Date()
}

export default function ScheduleStep({ appointment, setAppointment, nextStep, previousStep }) {
  const [bookedSlots, setBookedSlots] = useState([])
  const [availabilityError, setAvailabilityError] = useState('')
  const minDate = localDate()

  useEffect(() => {
    if (!appointment.date) {
      return
    }

    let active = true
    fetch(`/api/appointments?date=${encodeURIComponent(appointment.date)}`)
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) throw new Error(data.error)
        if (active) setBookedSlots(data.bookedSlots || [])
      })
      .catch((error) => active && setAvailabilityError(error.message || 'Unable to load available slots.'))

    return () => { active = false }
  }, [appointment.date])

  const selectTime = (time) => setAppointment({ ...appointment, time })
  const changeDate = (event) => setAppointment({ ...appointment, date: event.target.value, time: '' })
  const canContinue = appointment.date && appointment.time

  return <div>
    <div className="mb-8 text-center"><h2 className="text-2xl font-bold text-[#1A1A2E] md:text-3xl">Choose Date & Time</h2><p className="mt-2 text-sm text-gray-600">Booked and past time slots are unavailable for every treatment category.</p></div>
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-[#ECECEC] bg-white p-5"><div className="mb-4 flex items-center gap-2"><CalendarDays className="h-5 w-5 text-[#D4146A]" /><h3 className="text-lg font-semibold">Appointment Date</h3></div><input type="date" min={minDate} value={appointment.date} onChange={changeDate} className="w-full rounded-xl border border-[#ECECEC] px-4 py-3 outline-none transition focus:border-[#D4146A]" /><p className="mt-3 text-xs text-gray-500">Choose today or a future consultation date.</p></div>
      <div className="rounded-2xl border border-[#ECECEC] bg-white p-5"><div className="mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-[#D4146A]" /><h3 className="text-lg font-semibold">Time Slots</h3></div>{!appointment.date ? <p className="rounded-xl bg-[#FAFBFD] p-4 text-sm text-gray-500">Select a date to view available times.</p> : <><div className="grid grid-cols-2 gap-3">{timeSlots.map((time) => { const unavailable = bookedSlots.includes(time) || slotHasPassed(appointment.date, time); const selected = appointment.time === time; return <button key={time} type="button" disabled={unavailable} onClick={() => selectTime(time)} className={`rounded-lg border py-2.5 text-sm font-medium transition ${unavailable ? 'cursor-not-allowed border-[#ECECEC] bg-[#F7F7F7] text-gray-400 line-through' : selected ? 'border-[#D4146A] bg-[#D4146A] text-white' : 'border-[#ECECEC] hover:border-[#D4146A] hover:bg-[#FFF5F8]'}`}>{time}</button> })}</div>{availabilityError && <p className="mt-3 text-xs text-red-600">{availabilityError}</p>}</>}</div>
    </div>
    <div className="mt-8 flex justify-between"><button type="button" onClick={previousStep} className="inline-flex items-center gap-2 rounded-xl border border-[#ECECEC] px-5 py-3 text-sm font-semibold transition hover:border-[#D4146A] hover:text-[#D4146A]"><ArrowLeft className="h-4 w-4" />Previous</button><button type="button" disabled={!canContinue} onClick={nextStep} className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition ${canContinue ? 'bg-[#D4146A] hover:bg-[#B70F58]' : 'cursor-not-allowed bg-gray-300'}`}>Continue<ArrowRight className="h-4 w-4" /></button></div>
  </div>
}
