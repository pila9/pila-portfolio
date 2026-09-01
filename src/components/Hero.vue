<script setup lang="ts">
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { personalInfo, socialLinks } from '@/data/portfolioData'

const { scrollTo } = useSmoothScroll()
</script>

<template>
  <section id="hero" class="section min-h-screen flex items-center justify-center pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div class="text-center space-y-8">
        <div class="space-y-4">
          <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider">
            {{ personalInfo.title }}
          </p>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100">
            <span class="block mb-2">Hi, I'm</span>
            <span class="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {{ personalInfo.name }}, {{ personalInfo.title }}
            </span>
          </h1>
        </div>

        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          {{ personalInfo.bio }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            @click="scrollTo('#projects')"
            class="px-8 py-3 bg-emerald-500 text-slate-900 font-semibold rounded-lg hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            View Work
          </button>
          <button
            type="button"
            @click="scrollTo('#contact')"
            class="px-8 py-3 border-2 border-slate-600 text-slate-200 font-semibold rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
        </div>

        <div class="flex justify-center gap-6 pt-4">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            class="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-slate-800 transition-all duration-200 group"
          >
            <component
              :is="link.icon"
              class="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
