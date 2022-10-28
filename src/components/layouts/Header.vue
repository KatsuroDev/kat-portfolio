<script setup>
</script>

<template>
    <div class="row d-flex align-items-stretch">
        <div class="col title">
            <h1>Kat's Portfolio</h1>
        </div>
        <div class="col-auto">
            <ul>
                <li><a href="#">Albums</a></li>
                <li><a href="#">Files</a></li>
                <li><a href="#">About</a></li>
                <!--<li>Albums</li>
                <li>Files</li>
                <li>About</li>-->
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
    font-family: 'Oxygen';
    font-size: 3.8em;
    font-weight: lighter;
    margin-left: 10px;
}

div {
    color: var(--platinum);
    padding: 0;
    margin: 0;
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



a {
    padding-left: 10px;
    padding-right: 10px;
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color: var(--platinum)!important;
    text-decoration: none;
    font-size: 1.8em;
    font-family: 'Nanum Gothic';
    transition: background-color 200ms ease-in-out;
}

li :hover {
    background-color: rgba(0, 0, 0, 0.2)!important;
}

.row {
    height: 100px;
    background-color: var(--jet);
    margin-right: 0px;
    margin-left: 0px;
}

</style>