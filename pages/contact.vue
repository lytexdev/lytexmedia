<template>
    <main class="container">
        <div class="contact-form">
            <div class="contact-form-head">
                <h1>Kontaktanfrage</h1>
                <p>
                    Sie haben Fragen oder möchten uns eine Nachricht zukommen lassen? Nutzen Sie einfach das Kontaktformular
                    und wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
            </div>
            <form @submit.prevent="submitForm">
                <div class="form-group">m
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="form.email" required />
                </div>
                <div class="form-group">
                    <label for="message">Nachricht:</label>
                    <textarea id="message" v-model="form.message" minlength="75" maxlength="3000" required></textarea>
                </div>
                <button type="submit" class="btn">Senden</button>
            </form>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = async () => {
    const emailData = {
        to: 'contact@lytexmedia.com',
        subject: 'Kontaktformular Nachricht',
        text: `Name: ${form.value.name}\nE-Mail: ${form.value.email}\n\n\nNachricht: ${form.value.message}`
    }

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
        })

        if (response.ok) {
            alert('Nachricht erfolgreich gesendet!')
            form.value.name = ''
            form.value.email = ''
            form.value.message = ''
        } else {
            alert('Fehler beim Senden der Nachricht.')
        }
    } catch (error) {
        alert('Fehler beim Senden der Nachricht.')
        console.error(error)
    }
}
</script>

<style lang="scss" scoped>
.contact-form {
    width: 35%;

    .contact-form-head {
        margin-bottom: 2.5rem;

        h1 {
            font-size: 24px;
            margin-bottom: 1rem;
        }

        p {
            font-size: 16px;
        }
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }
}
</style>