<script setup lang="ts">
import { personalInfo, productSkills, reference } from '@/data/portfolioData'
import { Mail, Phone } from '@lucide/vue'
</script>

<template>
  <section id="about" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">About Me</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          A brief background on who I am, what I do, and my core competencies.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Bio -->
        <div class="space-y-6 text-slate-300">
          <p class="text-base leading-relaxed">
            {{ personalInfo.bioLong }}
          </p>
          <p class="text-base leading-relaxed">
            I'm passionate about creating clean, efficient, and accessible user
            interfaces that solve real-world problems. When I'm not coding,
            you can find me contributing to open-source projects or mentoring
            developers in the community.
          </p>

          <!-- Reference -->
          <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300">
            <h3 class="text-lg font-semibold text-slate-100 mb-2">Reference Available</h3>
            <p class="text-slate-400 text-sm mb-3">{{ reference.relationship }}</p>
            <div class="space-y-1">
              <p class="font-medium text-slate-200">{{ reference.name }}</p>
              <p class="text-slate-400 text-sm">{{ reference.title }}<br />{{ reference.company }}</p>
              <div class="flex gap-4 text-sm text-slate-400 mt-2">
                <a
                  :href="`mailto:${reference.email}`"
                  class="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <Mail class="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  :href="`tel:${reference.phone.replace(/\D/g, '')}`"
                  class="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <Phone class="w-4 h-4" />
                  <span>Phone</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Skills -->
        <div class="space-y-6">
          <div class="text-center lg:text-left">
            <h3 class="text-xl font-semibold text-slate-100 mb-4">Product Skills</h3>
            <p class="text-slate-400 text-sm mb-6">
              Core product management competencies rated by proficiency.
            </p>
          </div>
          <div class="space-y-6">
            <div
              v-for="skill in productSkills"
              :key="skill.id"
              class="space-y-2"
            >
              <div class="flex justify-between items-center">
                <span class="text-slate-200 font-medium">{{ skill.name }}</span>
                <span class="text-emerald-400 font-medium">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  :style="{ width: `${skill.level}%` }"
                />
              </div>
              <p class="text-slate-400 text-xs">
                {{ skill.description }}
              </p>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 pt-6">
            <div
              class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div class="text-3xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform">
                6+
              </div>
              <div class="text-sm text-slate-400">
                Years Experience
              </div>
            </div>
            <div
              class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div class="text-3xl font-bold text-emerald-400 mb-1 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div class="text-sm text-slate-400">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
