<template>
  <div class="app">
    <HeroSection />
    <FeaturesSection />
    <HowToConnect />
    <footer class="footer">
      <div class="container">
        <p>Remote Controller &copy; 2026</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowToConnect from './components/HowToConnect.vue'
</script>
