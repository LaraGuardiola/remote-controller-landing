<template>
  <section class="connect" id="connect" ref="sectionRef">
    <div class="container">
      <h2 class="section-title" :class="{ 'is-visible': visible }">{{ t('connectTitle') }}</h2>
      <p class="section-subtitle" :class="{ 'is-visible': visible }">{{ t('connectSubtitle') }}</p>
      <div class="steps">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="step"
          :class="{ 'is-visible': visible }"
          :style="{ '--i': i }"
        >
          <div class="step-number" v-text="i + 1" />
          <div class="step-content">
            <h3 v-text="step.title" />
            <p v-text="step.desc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { t } from '../locales'

const steps = [
  { title: t('step1Title'), desc: t('step1Desc') },
  { title: t('step2Title'), desc: t('step2Desc') },
  { title: t('step4Title'), desc: t('step4Desc') },
]

const sectionRef = ref<HTMLElement>()
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.section-title,
.section-subtitle,
.port-info {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-title.is-visible,
.section-subtitle.is-visible,
.port-info.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title.is-visible {
  transition-delay: 0s;
}

.section-subtitle.is-visible {
  transition-delay: 0.1s;
}

.port-info.is-visible {
  transition-delay: 0.8s;
}

.step {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: calc(var(--i) * 0.15s + 0.2s);
}

.step.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.step-number {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: calc(var(--i) * 0.15s + 0.35s);
}

.step.is-visible .step-number {
  transform: scale(1);
}

.step .step-number {
  transform: scale(0.4);
}
</style>
