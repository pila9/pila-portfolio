<script setup lang="ts">
import { projects } from '@/data/portfolioData'
import { ExternalLink, FileText } from '@lucide/vue'
import { GitHub } from '@/icons/brandIcons'
</script>

<template>
  <section id="projects" class="section">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-slate-100 mb-4">Featured Projects</h2>
        <p class="text-slate-400 max-w-2xl mx-auto">
          A selection of projects I'm proud of, built with modern technologies.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div class="p-6 space-y-4">
            <h3 class="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              {{ project.title }}
            </h3>
            <p v-if="project.subtitle" class="text-sm text-emerald-400/70 font-medium">
              {{ project.subtitle }}
            </p>
            <p class="text-slate-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="px-3 py-1 text-xs font-medium bg-slate-900/50 text-slate-300 border border-slate-700/50 rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex gap-3 pt-2">
              <a
                v-if="project.links.live"
                :href="project.links.live"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-slate-900 font-medium rounded-lg hover:bg-emerald-400 transition-colors text-sm"
              >
                <ExternalLink class="w-4 h-4" />
                Live Demo
              </a>
              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors text-sm"
              >
                <GitHub class="w-4 h-4" />
                Source
              </a>
              <a
                v-if="project.certificate"
                :href="project.certificate"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition-colors text-sm"
                :aria-label="`View ${project.title} certificate`"
              >
                <FileText class="w-4 h-4" />
                Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
