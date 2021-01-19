<template>
<section class="pt-12 pb-10 pb-md-12">
        <div class="container-lg">
          <div class="row align-items-center justify-content-betwen mb-9">
            <div class="col-md-12 text-center">
              <!-- Heading -->
              <h2 class="display-4 mb-4 mb-md-0">
                Testimonials
              </h2>
            </div>
          </div>
        <flickity ref="flickity" :options="flickityOptions">
            <div class="carousel-cell">
                <div class="owl-item cloned" style="width: 340px;">
                  <div aria-hidden="true">
                    <!-- Card -->
                    <div class="card lift lift-lg">
                      <div class="card-body text-center">
                        <!-- Logo -->
                        <p class="img-fluid svg-shim border-airbnb mx-auto mb-6" style="max-width: 85px;">
                          <img :src="'virtual/avatar-3.jpg' | img" class="img-fluid avatar avatar-ex-sm mx-auto rounded-circle" alt="">
                        </p>

                        <!-- Text -->
                        <p>
                          In urna lectus, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                          <div class="ml-4 text-left text-danger">
                                <!-- Title -->
                                <p class="small mb-0">
                                  Jay
                                </p>

                                <!-- Position -->
                                <p class="small text-muted mt-n1 mb-0">
                                Nov 01, 2020
                                </p>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="owl-item cloned" style="width: 340px;">
                  <div aria-hidden="true">
                    <!-- Card -->
                    <div class="card lift lift-lg">
                      <div class="card-body text-center">
                        <!-- Logo -->
                        <p class="img-fluid svg-shim border-airbnb mx-auto mb-6" style="max-width: 85px;">
                          <img :src="'virtual/avatar-4.jpg' | img" class="img-fluid avatar avatar-ex-sm mx-auto rounded-circle" alt="">
                        </p>

                        <!-- Text -->
                        <p>
                          In urna lectus, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                          <div class="ml-4 text-left text-danger">
                                <!-- Title -->
                                <p class="small mb-0">
                                  Wan
                                </p>

                                <!-- Position -->
                                <p class="small text-muted mt-n1 mb-0">
                                Nov 01, 2020
                                </p>

                            </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="owl-item cloned" style="width: 340px;">
                  <div aria-hidden="true">
                    <!-- Card -->
                    <div class="card lift lift-lg">
                      <div class="card-body text-center">
                        <!-- Logo -->
                        <p class="img-fluid svg-shim border-airbnb mx-auto mb-6" style="max-width: 85px;">
                          <img :src="'virtual/avatar-3.jpg' | img" class="img-fluid avatar avatar-ex-sm mx-auto rounded-circle" alt="">
                        </p>

                        <!-- Text -->
                        <p>
                          In urna lectus, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                          <div class="ml-4 text-left text-danger">
                                <!-- Title -->
                                <p class="small mb-0">
                                    Christopher
                                </p>

                                <!-- Position -->
                                <p class="small text-muted mt-n1 mb-0">
                                Nov 01, 2020
                                </p>

                            </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="carousel-cell">
                <div class="owl-item cloned" style="width: 340px;">
                  <div aria-hidden="true">
                    <!-- Card -->
                    <div class="card lift lift-lg">
                      <div class="card-body text-center">
                        <!-- Logo -->
                        <p class="img-fluid svg-shim border-airbnb mx-auto mb-6" style="max-width: 85px;">
                          <img :src="'virtual/avatar-2.jpg' | img" class="img-fluid avatar avatar-ex-sm mx-auto rounded-circle" alt="">
                        </p>

                        <!-- Text -->
                        <p>
                          In urna lectus, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                          <div class="ml-4 text-left text-danger">
                                <!-- Title -->
                                <p class="small mb-0">
                                  Tom
                                </p>

                                <!-- Position -->
                                <p class="small text-muted mt-n1 mb-0">
                                Nov 01, 2020
                                </p>

                            </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </flickity>

        </div>
      </section>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: 'Testimonials',
  props: {

  },
  data () {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 3000,
        wrapAround: true
      }
    }
  },
  methods: {

  },
  components: {
    Flickity
  },
  filters: {
    img: function (value) {
      return require('@/assets/img/' + value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
