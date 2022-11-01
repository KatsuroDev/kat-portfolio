<script setup>

import { onMounted } from 'vue';
import * as bootstrap from 'bootstrap';

onMounted(() => {
    const myCarousel = new bootstrap.Carousel('#carouselExampleInterval')
})

</script>

<template>
    <div class="d-flex justify-content-center">
        <div id="carouselExampleInterval" class="carousel slide w-75" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/images/picture1.JPG" class="d-block img-fluid" alt="...">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/images/picture2.JPG" class="d-block img-fluid" alt="...">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/images/picture3.JPG" class="d-block img-fluid" alt="...">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</template>

<style scoped>
</style>