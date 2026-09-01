<script setup lang="ts">
import { socialLinks } from '@/data/portfolioData'
</script>

<template>
  <footer class="bg-slate-900 border-t border-slate-700/50">
    <div class="container mx-auto section py-8 md:py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-2 text-xl font-bold">
          <span class="text-2xl text-emerald-400">&lt;JD /&gt;</span>
          <span class="text-slate-300">John Doe</span>
        </div>

        <nav aria-label="Social links" class="flex items-center gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.label"
            class="w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/50 transition-all duration-200 group"
          >
            <component
              :is="link.icon"
              class="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
            />
          </a>
        </nav>
      </div>

      <div class="mt-8 pt-8 border-t border-slate-700/50 text-center text-sm text-slate-400">
        <p>
          &copy; {{ new Date().getFullYear() }} John Doe. All rights reserved.
        </p>
        <p class="mt-2">
          Built with Vue 3, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
