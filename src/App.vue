<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Experience from '@/components/Experience.vue'
import Certifications from '@/components/Certifications.vue'
import Education from '@/components/Education.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="bg-slate-900 text-slate-100 min-h-screen">
    <Navbar />

    <main class="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
