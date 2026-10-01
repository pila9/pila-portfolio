<script setup lang="ts">
import { experiences } from '@/data/portfolioData'
import { MapPin, Calendar } from '@lucide/vue'

const isAchievementGroup = (achievement: string | { title: string; items: string[] }): achievement is { title: string; items: string[] } => {
  return typeof achievement === 'object' && 'title' in achievement
}
</script>

<template>
  <section id="experience" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-4">
          Career
        </p>
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Work Experience</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          A look at the roles, teams, and systems I've contributed to as a
          product owner and front-end developer.
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <div
          v-for="exp in experiences"
          :key="exp.id"
          class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300 group"
        >
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
            <div>
              <h3 class="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                {{ exp.role }}
              </h3>
              <p class="text-emerald-400 font-medium">
                {{ exp.company }}
              </p>
              <div class="flex items-center gap-4 text-sm text-slate-400 mt-1">
                <div class="flex items-center gap-1">
                  <MapPin class="w-4 h-4" />
                  <span>{{ exp.location }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Calendar class="w-4 h-4" />
                  <span>{{ exp.period }}</span>
                </div>
              </div>
            </div>
          </div>

          <p class="text-slate-300 mb-4" v-if="exp.description">
            {{ exp.description }}
          </p>

          <div class="space-y-4">
            <template v-for="(achievement, index) in exp.achievements" :key="index">
              <div v-if="isAchievementGroup(achievement)" class="space-y-2 pl-2 border-l-2 border-emerald-400/30">
                <h4 class="text-sm font-semibold text-emerald-300 uppercase tracking-wider">{{ achievement.title }}</h4>
                <ul class="space-y-1.5">
                  <li v-for="(item, itemIndex) in achievement.items" :key="itemIndex" class="flex items-start gap-3 text-slate-300 text-sm">
                    <span class="text-emerald-400 mt-0.5 flex-shrink-0">▹</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
              <li v-else class="flex items-start gap-3 text-slate-300 text-sm">
                <span class="text-emerald-400 mt-0.5 flex-shrink-0">▹</span>
                <span>{{ achievement }}</span>
              </li>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
