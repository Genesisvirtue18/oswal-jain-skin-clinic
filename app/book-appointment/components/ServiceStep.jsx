'use client'

import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'face',
    title: 'Face Treatments',
    description:
      'Acne, pigmentation, anti-ageing, skin rejuvenation and facial procedures.',
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    description:
      'Hair loss, PRP, GFC, dandruff and advanced hair restoration.',
  },
  {
    id: 'skin',
    title: 'Skin Conditions',
    description:
      'Psoriasis, eczema, vitiligo, allergies and fungal infections.',
  },
  {
    id: 'laser',
    title: 'Laser Treatments',
    description:
      'Laser hair reduction, pigmentation and skin resurfacing.',
  },
  {
    id: 'men',
    title: 'Treatments for Men',
    description:
      'Hair, beard, acne and aesthetic procedures for men.',
  },
  {
    id: 'sexual',
    title: 'Sexual Wellness',
    description:
      'Private consultation and treatment for intimate wellness.',
  },
  {
    id: 'sugarcane-hydrafacial',
    title: 'Sugarcane Hydrafacial',
    description:
      'Gentle exfoliation, pore cleansing and hydration-focused facial care.',
  },
  {
    id: 'melasma-treatment',
    title: 'Melasma Treatment',
    description:
      'Dermatologist-led care for melasma, dark patches and uneven skin tone.',
  },
]

export default function ServiceStep({
  appointment,
  setAppointment,
  nextStep,
}) {
  const selectService = (service) => {
    setAppointment({
      ...appointment,
      treatment: service.title,
    })
  }

  return (
    <div>

      {/* Heading */}
      <div className="mb-7 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E]">
          Choose Your Treatment
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Select a treatment category to continue.
        </p>

      </div>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => {
          const selected =
            appointment.treatment === service.title

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => selectService(service)}
              className={`
                group
                rounded-2xl
                border
                p-5
                text-left
                transition-all
                duration-300

                ${
                  selected
                    ? 'border-[#D4146A] bg-[#FFF5F8] shadow-sm'
                    : 'border-gray-200 bg-white hover:border-[#D4146A] hover:shadow-md'
                }
              `}
            >

              <h3 className="text-lg font-semibold text-[#1A1A2E] group-hover:text-[#D4146A] transition">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

            </button>
          )
        })}

      </div>

      {/* Button */}

      <div className="mt-8 flex justify-end">

        <button
          type="button"
          disabled={!appointment.treatment}
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
              appointment.treatment
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
