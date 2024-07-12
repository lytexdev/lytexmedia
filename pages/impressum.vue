<template>
    <div class="container">
        <div id="imprint">
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 TMG:</p>
            <p>
                <b>Name:</b><br>
                Immanuel Mruk
            </p>
            <p>
                <b>Adresse:</b><br>
                <span>{{ decodedAddress }}</span>
            </p>
            <p>
                <b>Kontakt:</b><br>
                Telefon: <span>{{ decodedPhone }}</span><br />
                E-Mail: <a href="mailto:contact@lytexmedia.com">contact@lytexmedia.com</a>
            </p>
            <p>
                <b>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</b><br>
                Immanuel Mruk<br />
                <span>{{ decodedAddress }}</span>
            </p>
            <p>
                <b>Haftungsausschluss:</b><br>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.<br />Für die Richtigkeit,
                Vollständigkeit und
                Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
                <b>Streitschlichtung:</b><br>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

// Base64-encoded sensitive information
const encodedAddress = 'QW5kcmVhc3N0ci4gMTVBIDMzMDk4IFBhZGVyYm9ybg=='
const encodedPhone = 'KzQ5ICgwKSAxNzY1NTIwNDE0Ng=='

// Reactive variables to store decoded values
const decodedAddress = ref('')
const decodedPhone = ref('')

onMounted(() => {
    decodedAddress.value = atob(encodedAddress)
    decodedPhone.value = atob(encodedPhone)
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#imprint {
    border-radius: 10px;
    background-color: #1a1a1a;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
    text-align: left;
    line-height: 2;
    padding: 4rem;

    h1 {
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 20px;
    }
}
</style>