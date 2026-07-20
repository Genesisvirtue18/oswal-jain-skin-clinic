'use client'

import {
  CalendarDays,
  Clock3,
  User,
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  ArrowLeft,
} from 'lucide-react'

export default function ConfirmStep({
  appointment,
  previousStep,
}) {

  const handleConfirm = async () => {

    try {

      // Replace this with your API

      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointment),
      })

      if (res.ok) {

        alert('Appointment Booked Successfully!')

      } else {

        alert('Something went wrong.')

      }

    } catch (error) {

      console.log(error)

      alert('Unable to submit appointment.')

    }

  }

  return (

    <div>

      <div className="mb-12 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF5F8]">

          <BadgeCheck className="h-10 w-10 text-[#D4146A]" />

        </div>

        <h2 className="mt-6 text-4xl font-bold text-[#1A1A2E]">

          Confirm Appointment

        </h2>

        <p className="mt-4 text-[#666]">

          Please review your appointment details before confirming.

        </p>

      </div>

      <div className="rounded-3xl border border-[#ECECEC] bg-white p-8 shadow-sm">

        <div className="grid gap-8 md:grid-cols-2">

          <div>

            <h3 className="mb-5 text-xl font-semibold">

              Appointment Details

            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <BadgeCheck className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    Treatment

                  </p>

                  <p className="font-semibold">

                    {appointment.treatment}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <CalendarDays className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    Date

                  </p>

                  <p className="font-semibold">

                    {appointment.date}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Clock3 className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    Time

                  </p>

                  <p className="font-semibold">

                    {appointment.time}

                  </p>

                </div>

              </div>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-semibold">

              Patient Information

            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <User className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    Full Name

                  </p>

                  <p className="font-semibold">

                    {appointment.fullName}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    Phone

                  </p>

                  <p className="font-semibold">

                    {appointment.phone}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    Email

                  </p>

                  <p className="font-semibold">

                    {appointment.email || '-'}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="h-5 w-5 text-[#D4146A]" />

                <div>

                  <p className="text-sm text-gray-500">

                    City

                  </p>

                  <p className="font-semibold">

                    {appointment.city || '-'}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {appointment.concern && (

          <div className="mt-10 rounded-2xl bg-[#FFF8FB] p-6">

            <h4 className="mb-3 font-semibold">

              Concern

            </h4>

            <p className="leading-7 text-gray-600">

              {appointment.concern}

            </p>

          </div>

        )}

      </div>

      <div className="mt-12 flex justify-between">

        <button
          onClick={previousStep}
          className="inline-flex items-center gap-2 rounded-2xl border border-[#ECECEC] px-8 py-4 font-semibold transition hover:border-[#D4146A] hover:text-[#D4146A]"
        >

          <ArrowLeft className="h-5 w-5" />

          Previous

        </button>

        <button
          onClick={handleConfirm}
          className="rounded-2xl bg-[#D4146A] px-10 py-4 font-semibold text-white transition hover:bg-[#B70F58]"
        >

          Confirm Appointment

        </button>

      </div>

    </div>

  )

}