<template>
    <main id="content">
        <div class="container">
            <b>Website ist aktuell im Aufbau!</b>
            <b><br>Klick dich am besten in der Navigation rum ;)</b>

            <img @click="showAlert()" title="Aktuell im Aufbau!"
                src="https://media1.tenor.com/m/7Qff-aO5G0QAAAAd/genba-neko.gif" alt="Builder cats"
                loading="lazy">
        </div>
    </main>
</template>

<script setup lang="ts">
const showAlert = () => {
    alert('Wir sind noch am Bauen!')
}
</script>
