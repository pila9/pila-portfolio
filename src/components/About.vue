<script setup lang="ts">
import { personalInfo } from '@/data/portfolioData'

const stats = [
  { label: 'Years of Experience', value: '6+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies Mastered', value: '40+' },
]
</script>

<template>
  <section id="about" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          A brief background on who I am and what I do.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-slate-300">
          <p class="text-base leading-relaxed">
            {{ personalInfo.bioLong }}
          </p>
          <p class="text-base leading-relaxed">
            I'm passionate about creating clean, efficient, and accessible
            user interfaces that solve real-world problems. When I'm not coding,
            you can find me contributing to open-source projects or mentoring
            developers in the community.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300 group"
          >
            <div class="text-4xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              {{ stat.value }}
            </div>
            <div class="text-sm text-slate-400">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
