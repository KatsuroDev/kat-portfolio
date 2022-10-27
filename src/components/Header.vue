<script setup>
</script>

<template>
    <div class="row d-flex align-items-stretch">
        <div class="col title">
            <h1>Kat's Portfolio</h1>
        </div>
        <div class="col-auto">
            <ul>
                <li>Albums</li>
                <li>Files</li>
                <li>About</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

.title {
    display: flex;
    align-items: center;
}

h1 {
    display: block;
}

div {
    color: var(--platinum);
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    height:100%;
}

li {
    padding: 5px;
    display: inline;
}

.row {
    height: 100px;
    background-color: var(--jet);
    margin-right: 0px;
    margin-left: 0px;
}

</style>