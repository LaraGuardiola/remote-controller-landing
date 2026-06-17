<template>
    <section class="hero">
        <div class="hero-bg"></div>
        <div class="container hero-content">
            <div class="hero-icon" aria-hidden="true">
                <img :src="heroIcon" alt="Remote Controller" class="hero-icon-img" />
            </div>
            <h1 class="hero-title">Remote Controller</h1>
            <p class="hero-subtitle">
                Turn your smartphone into a wireless trackpad and keyboard for
                your PC
            </p>
            <div class="download-options">
                <a
                    :href="exeUrl"
                    class="download-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        class="platform-icon"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"
                        />
                    </svg>
                    Download for Windows
                </a>
                <a
                    :href="apkUrl"
                    class="download-btn download-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        class="platform-icon"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M17.523 16.132a.698.698 0 0 1-.7-.7v-4.966a.7.7 0 1 1 1.4 0v4.966a.698.698 0 0 1-.7.7m-11.046 0a.698.698 0 0 1-.7-.7v-4.966a.7.7 0 1 1 1.4 0v4.966a.698.698 0 0 1-.7.7m1.575-9.913l-1.473-2.447a.243.243 0 0 1 .422-.242l1.508 2.5a7.46 7.46 0 0 1 7.982 0l1.508-2.5a.243.243 0 0 1 .422.242l-1.473 2.447A7.3 7.3 0 0 1 12 6.004a7.3 7.3 0 0 1-4.948 2.215M3.57 7.91a.73.73 0 0 1 .73-.73h15.4a.73.73 0 0 1 0 1.46H4.3a.73.73 0 0 1-.73-.73m.96 9.436v3.435a1.454 1.454 0 0 0 1.454 1.454h1.42a1.454 1.454 0 0 0 1.454-1.454v-3.435zm12.108 0v3.435a1.454 1.454 0 0 0 1.454 1.454h1.42a1.454 1.454 0 0 0 1.454-1.454v-3.435z"
                        />
                    </svg>
                    Get it on Android
                </a>
            </div>
            <p class="hero-version">
                Latest version &mdash; Free &amp; Open Source
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import heroIcon from '../assets/remote-control.png'

const exeUrl: string =
    "https://github.com/LaraGuardiola/remote-controller/releases/download/1.0.0/remote-controller.exe";
const apkUrl: string =
    "https://play.google.com/store/apps/details?id=com.remotecontroller.app";
</script>
