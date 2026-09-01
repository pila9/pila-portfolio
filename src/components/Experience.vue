<script setup lang="ts">
import { experiences } from '@/data/portfolioData'
import { Calendar, MapPin } from '@lucide/vue'
</script>

<template>
  <section id="experience" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Experience</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          My professional journey and work history.
        </p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <div class="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-slate-700/60 hidden md:block" />

        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="relative mb-16 last:mb-0"
        >
          <div
            class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-400 hidden md:block"
          />

          <div
            class="md:grid md:grid-cols-2 md:items-start gap-8"
            :class="index % 2 === 0 ? 'md:text-right' : 'md:ml-auto'"
          >
            <div
              class="mb-6 md:mb-0"
              :class="index % 2 === 0 ? '' : 'md:col-start-2'"
            >
              <h3 class="text-xl font-bold text-slate-100">
                {{ exp.role }}
              </h3>
              <p class="text-emerald-400 font-medium">
                {{ exp.company }}
              </p>
              <div class="flex items-center gap-2 justify-start md:justify-end text-sm text-slate-400 mt-2">
                <MapPin class="w-4 h-4" />
                <span>{{ exp.location }}</span>
              </div>
              <div class="flex items-center gap-2 justify-start md:justify-end text-sm text-slate-400 mt-1">
                <Calendar class="w-4 h-4" />
                <span>{{ exp.period }}</span>
              </div>
            </div>

            <div
              class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300"
              :class="index % 2 === 0 ? '' : 'md:col-start-2'"
            >
              <p class="text-slate-300 mb-4">
                {{ exp.description }}
              </p>
              <ul class="space-y-2">
                <li
                  v-for="(achievement, aIndex) in exp.achievements"
                  :key="aIndex"
                  class="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <span class="text-emerald-400 mt-0.5">▹</span>
                  <span>{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
