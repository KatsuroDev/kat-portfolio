<script setup>

import { onMounted } from 'vue';
import * as bootstrap from 'bootstrap';

onMounted(() => {
    const myCarousel = document.getElementById('carouselExampleInterval')
    const carouselContainer = document.getElementById('carousel-container')

    const testBlur = document.getElementById('test-blur')

    const firstActiveItem = document.querySelector('.carousel-item.active')
    //carouselContainer.style.backgroundImage = "url(" + firstActiveItem.querySelector('img').src + ")"
    testBlur.style.backgroundImage = "url(" + firstActiveItem.querySelector('img').src + ")"


    myCarousel.addEventListener('slid.bs.carousel', event => {
        const activeItem = document.querySelector('.carousel-item.active')
        //carouselContainer.style.backgroundImage = "url(" + activeItem.querySelector('img').src + ")"
    })
})


</script>

<template>
    <div id="test-blur"></div>
    <div class="d-flex justify-content-center" id="carousel-container">
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

#carousel-container {
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 500ms;
}

#test-blur {

    position: absolute;
    left: 0px;
    top: 100px;
    z-index: 0;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
    filter: blur(5px);

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>