<script setup lang="ts">
import { computed } from 'vue'
import { education } from '@/data/portfolioData'
import { BookOpen, GraduationCap, Award } from '@lucide/vue'

const degreeItems = computed(() => education.filter((i) => i.type === 'degree'))
const trainingItems = computed(() =>
  education.filter((i) => i.type === 'training' || i.type === 'course'),
)
</script>

<template>
  <section id="education" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
          <BookOpen class="w-7 h-7 text-emerald-400" />
          Education & Training
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Formal education, professional training, and certifications.
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Degrees -->
        <div class="space-y-8 mb-12">
          <h3 class="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <GraduationCap class="w-5 h-5 text-emerald-400" />
            Academic Background
          </h3>
          <div
            v-for="item in degreeItems"
            :key="item.id"
            class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
          >
            <h4 class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              {{ item.degree }}
            </h4>
            <p class="text-emerald-400 font-medium mb-1">{{ item.institution }}</p>
            <p class="text-slate-400 text-sm mb-2">{{ item.period }}</p>
            <p v-if="item.description" class="text-slate-300 text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- Training & Courses -->
        <div class="space-y-8">
          <h3 class="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <Award class="w-5 h-5 text-emerald-400" />
            Training & Certifications
          </h3>
          <div
            v-for="item in trainingItems"
            :key="item.id"
            class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
          >
            <h4 class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              {{ item.degree }}
            </h4>
            <p class="text-emerald-400 font-medium mb-1">{{ item.institution }}</p>
            <p class="text-slate-400 text-sm">{{ item.period }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
