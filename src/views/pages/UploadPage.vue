<script setup>
    import { ref, watch } from 'vue'

    import MainLayout from '../layouts/MainLayout.vue'
    import Uploader from '../../components/Uploader.vue'

    const files = ref([])

</script>

<template>
 <MainLayout>
    <p>My File Selector: <Uploader v-model="files" @input="(newFiles) => files = newFiles"></Uploader></p>
    <p v-for="file in files" :key="file.id">
        {{file.name}}
    </p>
 </MainLayout>
</template>

<style scoped>
</style>