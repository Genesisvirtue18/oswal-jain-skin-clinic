'use client'

import { useState } from 'react'
import { Playfair_Display } from 'next/font/google'

import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

import AppointmentStepper from './components/AppointmentStepper'
import ServiceStep from './components/ServiceStep'
import ScheduleStep from './components/ScheduleStep'
import DetailsStep from './components/DetailsStep'
import ConfirmStep from './components/ConfirmStep'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function BookAppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const [appointment, setAppointment] = useState({
    treatment: '',
    subTreatment: '',
    date: '',
    time: '',
    fullName: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    city: '',
    concern: '',
  })

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FAFAFC]">

        {/* Hero */}

        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-white to-white">

          <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">

            <div className="max-w-3xl">

              <span className="inline-flex rounded-full bg-[#FFE6F0] px-5 py-2 text-sm font-semibold text-[#D4146A]">
                Appointment Booking
              </span>

              <h1
                className={`${playfair.className} mt-6 text-5xl font-bold leading-tight text-[#1A1A2E] md:text-6xl`}
              >
                Book Your
                <span className="text-[#D4146A]">
                  {' '}
                  Appointment
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#5A5A72]">
                Schedule your consultation with
                <strong> Dr. Varun Jain </strong>
                by following these simple booking steps.
              </p>

            </div>

          </div>

        </section>

        {/* Booking Card */}

        <section className="pt-4 pb-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="rounded-3xl border border-[#F2F2F2] bg-white p-5 md:p-7 shadow-lg">

              <AppointmentStepper currentStep={currentStep} />

              <div className="mt-6">
                {currentStep === 1 && (
                  <ServiceStep
                    appointment={appointment}
                    setAppointment={setAppointment}
                    nextStep={nextStep}
                  />
                )}

                {currentStep === 2 && (
                  <ScheduleStep
                    appointment={appointment}
                    setAppointment={setAppointment}
                    nextStep={nextStep}
                    previousStep={previousStep}
                  />
                )}

                {currentStep === 3 && (
                  <DetailsStep
                    appointment={appointment}
                    setAppointment={setAppointment}
                    nextStep={nextStep}
                    previousStep={previousStep}
                  />
                )}

                {currentStep === 4 && (
                  <ConfirmStep
                    appointment={appointment}
                    previousStep={previousStep}
                  />
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />

    </>
  )
}