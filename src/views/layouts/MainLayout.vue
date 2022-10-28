<script setup>
    import Header from '../../components/layouts/Header.vue'
    
    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })

</script>

<template>
    <Header />
    <main>
        <slot />
    </main>
</template>

<style scoped>
</style>