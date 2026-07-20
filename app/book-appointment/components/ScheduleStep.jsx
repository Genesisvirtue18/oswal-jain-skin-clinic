'use client'

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
} from 'lucide-react'

const timeSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
]

export default function ScheduleStep({
  appointment,
  setAppointment,
  nextStep,
  previousStep,
}) {
  const selectTime = (time) => {
    setAppointment({
      ...appointment,
      time,
    })
  }

  const changeDate = (e) => {
    setAppointment({
      ...appointment,
      date: e.target.value,
    })
  }

  const canContinue =
    appointment.date !== '' &&
    appointment.time !== ''

  return (
    <div>

      {/* Heading */}

      <div className="mb-8 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E]">
          Choose Date & Time
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Select your preferred appointment schedule.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Date */}

        <div className="rounded-2xl border border-[#ECECEC] bg-white p-5">

          <div className="mb-4 flex items-center gap-2">

            <CalendarDays className="h-5 w-5 text-[#D4146A]" />

            <h3 className="text-lg font-semibold">
              Appointment Date
            </h3>

          </div>

          <input
            type="date"
            value={appointment.date}
            onChange={changeDate}
            className="w-full rounded-xl border border-[#ECECEC] px-4 py-3 outline-none transition focus:border-[#D4146A]"
          />

          <p className="mt-3 text-xs text-gray-500">
            Choose your preferred consultation date.
          </p>

        </div>

        {/* Time */}

        <div className="rounded-2xl border border-[#ECECEC] bg-white p-5">

          <div className="mb-4 flex items-center gap-2">

            <Clock className="h-5 w-5 text-[#D4146A]" />

            <h3 className="text-lg font-semibold">
              Time Slots
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-3">

            {timeSlots.map((time) => {

              const selected =
                appointment.time === time

              return (

                <button
                  key={time}
                  type="button"
                  onClick={() => selectTime(time)}
                  className={`
                    rounded-lg
                    border
                    py-2.5
                    text-sm
                    font-medium
                    transition

                    ${
                      selected
                        ? 'border-[#D4146A] bg-[#D4146A] text-white'
                        : 'border-[#ECECEC] hover:border-[#D4146A] hover:bg-[#FFF5F8]'
                    }
                  `}
                >
                  {time}
                </button>

              )
            })}

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="mt-8 flex justify-between">

        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center gap-2 rounded-xl border border-[#ECECEC] px-5 py-3 text-sm font-semibold transition hover:border-[#D4146A] hover:text-[#D4146A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>

        <button
          type="button"
          disabled={!canContinue}
          onClick={nextStep}
          className={`
            inline-flex
            items-center
            gap-2
            rounded-xl
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition

            ${
              canContinue
                ? 'bg-[#D4146A] hover:bg-[#B70F58]'
                : 'cursor-not-allowed bg-gray-300'
            }
          `}
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

    </div>
  )
}