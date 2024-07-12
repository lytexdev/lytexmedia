<template>
    <main id="content">
        <div class="container">
            <b>Website ist aktuell im Aufbau! ;)</b>

            <img @click="showAlert()" title="Aktuell im Aufbau!"
                src="https://media1.tenor.com/m/7Qff-aO5G0QAAAAd/genba-neko.gif" alt="Builder cats">
        </div>
    </main>
</template>

<script setup lang="ts">
const showAlert = () => {
    alert('Wir sind noch am Bauen!')
}
</script>

<style scoped lang="scss">
#content {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

.container {
    padding: 2.5rem 0;

    b {
        font-size: 22px;
        font-weight: 400;
    }

    img {
        margin-top: 2.5rem;
        max-height: 328px;
        max-width: 100%;
        cursor: pointer;
    }
}
</style>