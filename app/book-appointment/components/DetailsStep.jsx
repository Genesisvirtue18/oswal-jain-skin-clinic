'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function DetailsStep({
  appointment,
  setAppointment,
  nextStep,
  previousStep,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target

    setAppointment({
      ...appointment,
      [name]: value,
    })
  }

  const inputStyle =
    'w-full h-11 rounded-xl border border-[#E6E6E6] bg-white px-4 text-sm outline-none transition-all duration-200 focus:border-[#D4146A] focus:ring-4 focus:ring-pink-100'

  const canContinue =
    appointment.fullName &&
    appointment.phone

  return (
    <div>

      {/* Heading */}

      <div className="mb-8 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E]">
          Patient Details
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Please provide your information to complete your booking.
        </p>

      </div>

      {/* Form */}

      <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Full Name *
          </label>

          <input
            className={inputStyle}
            name="fullName"
            value={appointment.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Phone Number *
          </label>

          <input
            className={inputStyle}
            name="phone"
            value={appointment.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            className={inputStyle}
            name="email"
            value={appointment.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Age
          </label>

          <input
            type="number"
            className={inputStyle}
            name="age"
            value={appointment.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Gender
          </label>

          <select
            className={inputStyle}
            name="gender"
            value={appointment.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium">
            City
          </label>

          <input
            className={inputStyle}
            name="city"
            value={appointment.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>

      </div>

      {/* Concern */}

      <div className="mt-5">

        <label className="mb-1.5 block text-sm font-medium">
          Describe Your Concern
        </label>

        <textarea
          rows={4}
          name="concern"
          value={appointment.concern}
          onChange={handleChange}
          placeholder="Briefly describe your concern..."
          className="w-full rounded-xl border border-[#E6E6E6] p-4 text-sm outline-none transition-all duration-200 focus:border-[#D4146A] focus:ring-4 focus:ring-pink-100"
        />

      </div>

      {/* Buttons */}

      <div className="mt-8 flex items-center justify-between">

        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center gap-2 rounded-xl border border-[#E6E6E6] px-5 py-3 text-sm font-semibold transition hover:border-[#D4146A] hover:text-[#D4146A]"
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
            transition-all

            ${
              canContinue
                ? 'bg-[#D4146A] hover:bg-[#B70F58]'
                : 'cursor-not-allowed bg-gray-300'
            }
          `}
        >
          Review Appointment
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

    </div>
  )
}