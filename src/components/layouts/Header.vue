<script setup>
</script>

<template>
    <div class="row d-flex align-items-stretch">
        <div class="col title">
            <a class="title-link" href="/">Kat's Portfolio</a>
        </div>
        <div class="col-auto">
            <ul>
                <li class="nav-item"><a class="nav-link" href="#">Albums</a></li>
                <li class="nav-item"><a class="nav-link" href="/admin/upload">Files</a></li>
                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>


.title {
    display: flex;
    align-items: center;
}

.title-link {
    display: block;
    font-family: 'Oxygen';
    font-size: 3.8em;
    font-weight: lighter;
    margin-left: 10px;
    cursor: default;
}

div {
    padding: 0;
    margin: 0;
    -webkit-user-select: none;
    user-select: none;
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
    padding: 0;
    margin: 0;
    width: auto;
    height: 100%;
}

.nav-link {
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.8em;
    font-family: 'Nanum Gothic';
    transition: background-color 125ms ease-in-out;
}

a {
    color: var(--platinum)!important;
    text-decoration: none;
}

.nav-item :hover {
    background-color: rgba(0, 0, 0, 0.2)!important;
}

.row {
    height: 100px;
    background-color: var(--jet);
    margin-right: 0px;
    margin-left: 0px;
}

</style>