<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New message (enter to add) </label>
            <input type="text" name="new-message" v-model="newMessage" @input="eraseFeedback">
            <p class="red-text" v-if="this.feedback">{{ feedback }}</p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init.js'
    export default {
        props:['name'],
        data() {
            return {
                newMessage: null,
                feedback: null
            }
        },
        methods: {
            addMessage() {
                if(this.newMessage) {
                    db.collection('messages').add({
                        name: this.name,
                        content: this.newMessage,
                        timestame: Date.now()
                    }).catch(err => {
                        console.log(err.message)
                    })
                    this.newMessage = null
                    this.feedback = null
                }
                else {
                    this.feedback = "You must enter a message!"
                }
            },
            eraseFeedback() {
                this.feedback = null
            }
        }
    }
</script>

<style scoped>

</style>