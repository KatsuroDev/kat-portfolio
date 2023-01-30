<script setup>

import { onMounted } from 'vue';

onMounted(() => {
    const myCarousel = document.getElementById('carouselExampleInterval');

    const testBlur = document.getElementById('test-blur');

    const firstActiveItem = document.querySelector('.carousel-item.active');
    testBlur.style.backgroundImage = "url(" + firstActiveItem.querySelector('img').src + ")";


    myCarousel.addEventListener('slide.bs.carousel', event => {
        const activeItem = event.relatedTarget;
        testBlur.style.backgroundImage = "url(" + activeItem.querySelector('img').src + ")";
    })
})


</script>

<template>
    <div class="outer">
        <div id="test-blur" class="inner"></div>
        <div class="d-flex justify-content-center inner" id="carousel-container">
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

    </div>
 

</template>

<style scoped>

#carouselExampleInterval, .carousel-inner, #carousel-container, .carousel-item {
    border-radius: 10px 10px 10px 10px;
}

#carouselExampleInterval {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
}


#carousel-container {
    margin-top: 30px;
    margin-bottom: 30px;
}

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

#test-blur {
    width: 100%;
    height: 100%;
    -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
    filter: blur(5px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.outer {
  margin: 0 auto;
  background-color: var(--jet);
  /* important part */
  display: grid;
  place-items: center;
  grid-template-areas: "inner-div";
}

.inner {
  /* important part */
  grid-area: inner-div;
}

</style>