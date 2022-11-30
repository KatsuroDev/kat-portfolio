<script setup>
    import { ref, watch } from 'vue'

    import MainLayout from '../layouts/MainLayout.vue'
    import Uploader from '../../components/Uploader.vue'

    const files = ref([])
    function getURL(file) {
        return URL.createObjectURL(file)
    }

</script>

<template>
 <MainLayout>
    <p>My File Selector: <Uploader v-model="files" @input="(newFiles) => files = newFiles"></Uploader></p>
    <div class="row">
        <div v-for="file in files" :key="file.id" class="col-2">
            <img class="img-fluid" :src="getURL(file)" />
            <p>{{file.name}}</p>
        </div>
    </div>

 </MainLayout>
</template>

<style scoped>
</style>