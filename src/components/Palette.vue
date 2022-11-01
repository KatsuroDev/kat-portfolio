<script setup>
</script>

<template>

    <div class="row">
        <div class="colorBlock col" style="background-color: var(--jet);"></div>
        <div class="colorBlock col" style="background-color: var(--platinum);"></div>
        <div class="colorBlock col" style="background-color: var(--forest-green-crayola);"></div>
        <div class="colorBlock col" style="background-color: var(--iris);"></div>
        <div class="colorBlock col" style="background-color: var(--black-olive);"></div>
    </div>

</template>

<style scoped>

.colorBlock {
    height: 200px;
    transition: transform 150ms ease-in-out;
}

.colorBlock:hover {
    transform: scale(1.2, 1.2);
    z-index: 10;
}


.row {
    border-width: 1px;
    border-color: blue;
    border-style: solid;
    margin: 0px;
}

</style>