<script setup>

import { onMounted } from 'vue';
import * as bootstrap from 'bootstrap';

onMounted(() => {
    const myCarousel = new bootstrap.Carousel('#carouselExampleInterval')
})

</script>

<template>
    <div class="d-flex justify-content-center">
        <div id="carouselExampleInterval" class="carousel slide w-75 carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="indicatorButton active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" class="indicatorButton" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" class="indicatorButton" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="4000">
                    <div class="d-flex justify-content-center">
                        <div class="carousel-caption d-block">
                            <h5>Plants</h5>
                            <p>Some plants found at the human science rest room of the cégep</p>
                        </div>
                        <img src="../assets/images/picture1.JPG" class="d-block img-fluid" alt="...">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <div class="d-flex justify-content-center">
                        <div class="carousel-caption d-block">
                            <h5>Close-up plant</h5>
                            <p>A close up of a plant on a rack on plants</p>
                        </div>
                        <img src="../assets/images/picture2.JPG" class="d-block img-fluid" alt="...">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                    <div class="d-flex justify-content-center">
                        <div class="carousel-caption d-block">
                            <h5>Ceiling window</h5>
                            <p>Just a ceiling window at winter time</p>
                        </div>
                        <img src="../assets/images/picture3.JPG" class="d-block img-fluid" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.carousel-indicators {
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 5px 5px 5px 5px;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.70);
    border-radius: 5px 5px 5px 5px;
    margin: 30px 0px 30px 0px;
}

p {
    margin:0;
}
</style>