<script setup>
    import { ref } from 'vue';

    import MainLayout from '../layouts/MainLayout.vue';
    import Uploader from '../../components/Uploader.vue';

    const files = ref([]);
    function getURL(file) {
        return URL.createObjectURL(file);
    }

</script>

<template>
 <MainLayout>
    <Uploader @input="(newFiles) => files = newFiles"/>
    <div class="row">
        <div v-for="file in files" :key="file.id" class="col-2">
            <img class="img-fluid" :src="getURL(file)" />
            <p>{{file.name}}</p>
        </div>
    </div>

 </MainLayout>
</template>

<style scoped>
.row {
    margin: 0;
}
</style>