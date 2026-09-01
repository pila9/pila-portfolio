<script setup lang="ts">
import { skillCategories } from '@/data/portfolioData'
</script>

<template>
  <section id="skills" class="section bg-slate-800/30">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Skills & Expertise</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I specialize in.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
        >
          <h3 class="text-xl font-semibold text-slate-100 mb-4 group-hover:text-emerald-400 transition-colors">
            {{ category.title }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex flex-col items-center gap-2 bg-slate-900/50 border border-slate-700/30 rounded-lg p-3 hover:border-emerald-400/50 hover:bg-slate-900/70 transition-all duration-200"
            >
              <component
                :is="skill.icon"
                class="w-6 h-6 text-emerald-400"
              />
              <span class="text-xs font-medium text-slate-300 text-center">
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
