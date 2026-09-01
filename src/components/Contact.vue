<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Send } from '@lucide/vue'
import { contactInfo, socialLinks } from '@/data/portfolioData'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive<FormErrors>({})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validate = (): boolean => {
  let valid = true
  errors.name = undefined
  errors.email = undefined
  errors.subject = undefined
  errors.message = undefined

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    valid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    valid = false
  }

  return valid
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    isSubmitted.value = true

    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  } catch {
    // submission failed
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Contact Me</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Have a question or want to work together? Send me a message.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <div class="space-y-6">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-emerald-400/50 transition-all duration-300"
          >
            <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <component :is="info.icon" class="w-5 h-5" />
            </div>
            <div>
              <p class="text-sm text-slate-400">{{ info.label }}</p>
              <p v-if="info.href" class="text-slate-200">
                <a :href="info.href">{{ info.value }}</a>
              </p>
              <p v-else class="text-slate-200">{{ info.value }}</p>
            </div>
          </div>

          <div class="pt-2">
            <p class="text-sm text-slate-400 mb-4">Follow me on</p>
            <div class="flex gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="link.label"
                class="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 transition-all duration-200 group"
              >
                <component
                  :is="link.icon"
                  class="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300">
          <div v-if="isSubmitted" class="text-center py-12">
            <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
              <Send class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-slate-100 mb-2">
              Message Sent!
            </h3>
            <p class="text-slate-400">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button
              type="button"
              @click="isSubmitted = false"
              class="mt-6 px-6 py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Send another message
            </button>
          </div>

          <form
            v-else
            @submit.prevent="handleSubmit"
            class="space-y-6"
          >
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="sm:col-span-2">
                <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                  :class="{ 'border-red-500/50 focus:border-red-400 focus:ring-red-400/30': errors.name }"
                />
                <p
                  v-if="errors.name"
                  class="mt-1 text-sm text-red-400"
                >
                  {{ errors.name }}
                </p>
              </div>

              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your.email@example.com"
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                  :class="{ 'border-red-500/50 focus:border-red-400 focus:ring-red-400/30': errors.email }"
                />
                <p
                  v-if="errors.email"
                  class="mt-1 text-sm text-red-400"
                >
                  {{ errors.email }}
                </p>
              </div>

              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="Subject"
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 transition-colors"
                  :class="{ 'border-red-500/50 focus:border-red-400 focus:ring-red-400/30': errors.subject }"
                />
                <p
                  v-if="errors.subject"
                  class="mt-1 text-sm text-red-400"
                >
                  {{ errors.subject }}
                </p>
              </div>

              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Your message..."
                  class="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 resize-none transition-colors"
                  :class="{ 'border-red-500/50 focus:border-red-400 focus:ring-red-400/30': errors.message }"
                />
                <p
                  v-if="errors.message"
                  class="mt-1 text-sm text-red-400"
                >
                  {{ errors.message }}
                </p>
              </div>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex items-center justify-center gap-3 px-6 py-3 bg-emerald-500 text-slate-900 font-semibold rounded-lg hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
              <Send v-if="!isSubmitting" class="w-5 h-5" />
              <svg
                v-if="isSubmitting"
                class="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  stroke="currentColor"
                  stroke-width="4"
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
