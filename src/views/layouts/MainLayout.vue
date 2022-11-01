<script setup>
    import Header from '../../components/layouts/Header.vue'
</script>

<template>
    <Header />
    <main>
        <slot />
    </main>
</template>

<style scoped>
main {
    z-index: 1;
}

Header {
    z-index: 2;
}

</style>