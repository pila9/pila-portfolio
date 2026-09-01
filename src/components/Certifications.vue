<script setup lang="ts">
import { certificates } from '@/data/portfolioData'
import { Award } from '@lucide/vue'
</script>

<template>
  <section id="certifications" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
          <Award class="w-7 h-7 text-emerald-400" />
          Certifications & Achievements
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Professional certifications and recognized achievements.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div class="p-5 space-y-2">
            <h3 class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              {{ cert.title }}
            </h3>
            <p class="text-slate-400 text-sm">{{ cert.issuer }}</p>
            <p class="text-slate-500 text-xs">{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
