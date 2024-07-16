<template>
    <main class="container">
        <div class="coconut">
            <div class="coconut-logo">
                <img src="/coconut.svg" alt="Coconut" title="Coconut" />
                <h1>Coconut</h1>
            </div>

            <p class="coconut-description">Coconut ist ein self-hosted und open-source Dashboard um deinen Server zu verwalten.</p>

            <div class="coconut-content">
                <div class="row-section">
                    <h2>Download</h2>
                    <p>Coconut ist noch in der Entwicklung und wird bald veröffentlicht.</p>
                </div>

                <div class="row-section">
                    <h2>Informationen</h2>
                    <p>Coconut ist ein Projekt von <a href="https://lytexmedia.com">lytexmedia</a> und ist unter der MIT-Lizenz veröffentlicht.</p>
                    <p>Der Quellcode ist auf <a title="Coconut Github Repository" href="https://github.com/ximmanuel/Coconut" target="_blank">GitHub</a> verfügbar.</p>
                </div>

                <div class="row-section">
                    <h2>Features</h2>
                    <ul>
                        <li>System Information</li>
                        <li>Benutzerverwaltung</li>
                        <li>Remote Shutdown / Reboot</li>
                        <li>Backup-Verwaltung</li>
                        <li>Verwaltung von Docker Container</li>
                        <li><strong>Entwicklung eigener Module</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'lytexmedia - Coconut',
    ogTitle: 'lytexmedia - Coconut',
    description: 'Coconut ist ein self-hosted und open-source Dashboard um deinen Server zu verwalten.',
    ogDescription: 'Coconut ist ein self-hosted und open-source Dashboard um deinen Server zu verwalten.',
    twitterDescription: 'Coconut ist ein self-hosted und open-source Dashboard um deinen Server zu verwalten.',
    twitterImage: 'https://lytexmedia.com/coconut.svg',
    twitterCard: 'summary_large_image',
    ogImage: 'https://lytexmedia.com/coconut.svg',
    ogUrl: 'https://lytexmedia.com/coconut'
})
</script>
