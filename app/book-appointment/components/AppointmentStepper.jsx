'use client'

import { Check } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Service',
    subtitle: 'Choose Treatment',
  },
  {
    id: 2,
    title: 'Schedule',
    subtitle: 'Date & Time',
  },
  {
    id: 3,
    title: 'Details',
    subtitle: 'Patient Info',
  },
  {
    id: 4,
    title: 'Confirm',
    subtitle: 'Finish',
  },
]

export default function AppointmentStepper({ currentStep }) {
  return (
    <div className="mb-8">

      {/* Desktop */}
      <div className="hidden md:flex items-start justify-between">

        {steps.map((step, index) => {
          const active = currentStep === step.id
          const completed = currentStep > step.id

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >

              <div className="flex flex-col items-center">

                <div
                  className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-full border-2
                    text-sm font-semibold
                    transition-all duration-300

                    ${
                      completed
                        ? 'border-[#D4146A] bg-[#D4146A] text-white'
                        : active
                        ? 'border-[#D4146A] bg-[#FFF5F8] text-[#D4146A]'
                        : 'border-gray-300 bg-white text-gray-400'
                    }
                  `}
                >
                  {completed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    step.id
                  )}
                </div>

                <h3
                  className={`
                    mt-3 text-[15px] font-semibold
                    ${
                      active
                        ? 'text-[#D4146A]'
                        : 'text-[#1A1A2E]'
                    }
                  `}
                >
                  {step.title}
                </h3>

                <p className="mt-0.5 text-xs text-gray-500">
                  {step.subtitle}
                </p>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`
                    mx-4 mb-9 h-[2px] flex-1 rounded-full

                    ${
                      completed
                        ? 'bg-[#D4146A]'
                        : 'bg-gray-200'
                    }
                  `}
                />
              )}

            </div>
          )
        })}

      </div>

      {/* Mobile */}
      <div className="md:hidden">

        <div className="flex items-center justify-between">

          {steps.map((step) => {
            const active = currentStep === step.id
            const completed = currentStep > step.id

            return (
              <div
                key={step.id}
                className="flex flex-col items-center"
              >
                <div
                  className={`
                    flex h-9 w-9 items-center justify-center
                    rounded-full text-xs font-semibold

                    ${
                      completed
                        ? 'bg-[#D4146A] text-white'
                        : active
                        ? 'border-2 border-[#D4146A] bg-[#FFF5F8] text-[#D4146A]'
                        : 'bg-gray-200 text-gray-500'
                    }
                  `}
                >
                  {completed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    step.id
                  )}
                </div>
              </div>
            )
          })}

        </div>

        <div className="mt-4">

          <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-[#D4146A] transition-all duration-500"
              style={{
                width: `${currentStep * 25}%`,
              }}
            />

          </div>

          <p className="mt-2 text-center text-xs text-gray-600">
            Step {currentStep} of {steps.length}
          </p>

        </div>

      </div>

    </div>
  )
}