<script setup lang="ts">
import { skillCategories } from '@/data/portfolioData'
</script>

<template>
  <section id="skills" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Technical Expertise
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Skills</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I specialize in across the full development stack.
        </p>
      </div>

      <div class="space-y-10">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="space-y-4"
        >
          <div class="flex items-baseline justify-between">
            <h3 class="text-xl font-semibold text-slate-200">
              {{ category.title }}
            </h3>
            <span class="text-sm text-slate-500">
              {{ category.skills.length }} technologies
            </span>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.skills"
              :key="skill.name"
              class="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700/50 rounded-full hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200 flex items-center gap-2"
            >
              <component :is="skill.icon" class="w-4 h-4 text-emerald-400" />
              <span>{{ skill.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
