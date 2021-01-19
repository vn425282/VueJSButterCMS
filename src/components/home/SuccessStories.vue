<template>
  <section class="pt-11 pt-md-13 pb-11 pb-md-16 bg-gradient-light">
    <!-- Content -->
    <div class="container-lg">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8 text-center">
          <!-- Preheading -->
          <h6 class="text-uppercase text-danger mb-5">
            Success Stories
          </h6>
          <!-- Heading -->
          <h2 class="display-4 mb-5">
            Hear how we meet the <span class="text-underline-warning">evolving</span> health, safety and well-being needs of organisations.
          </h2>
        </div>
      </div>
    </div>
    <!-- SHAPE -->
    <div class="position-relative">
      <div class="shape shape-fluid-x shape-bottom text-danger pb-18">
        <div class="shape-img pb-8 pb-md-11">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 0h100v25H75L25 50H0z" fill="currentColor"></path></svg>
        </div>
      </div>
    </div>

    <div class="pt-10 pt-md-12">
      <div class="container-lg">
        <div class="row mt-n6">
          <div class="col-md-4">
            <!-- Card -->
            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
              <!-- Image -->
              <img class="card-img-top rounded-top-left"
                :src="'posts/post-header-10.png' | img" alt="...">
              <!-- Body -->
              <div class="card-body">
                <!-- Heading -->
                <h2 class="mb-2">
                  Challenge: HRs have to source for health screening and dental services options for their employees.
                </h2>
                <!-- Text -->
                <p class="font-size-sm mb-4">
                  Solution: Using our Preventive Care solution, the deals marketplace provides a wide range of options by renowned healthcare providers for the employees to select immediately with no setup required.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Card -->
            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
              <!-- Image -->
              <img class="card-img-top rounded-top-left"
                :src="'posts/post-header-11.png' | img" alt="...">
              <!-- Body -->
              <div class="card-body">
                <!-- Heading -->
                <h2 class="mb-2">
                  Challenge: Group has multiple entities with numerous cost centres making billing complicated.
                </h2>
                <!-- Text -->
                <p class="font-size-sm mb-4">
                  Solution: Transactions are tracked digitally and can be easily filtered to create entity-level invoices for finance using our Corporate Care solution.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Card -->
            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
              <!-- Image -->
              <img class="card-img-top rounded-top-left"
                :src="'posts/post-header-12.png' | img" alt="...">
              <!-- Body -->
              <div class="card-body">
                <!-- Heading -->
                <h2 class="mb-2">
                  Challenge: Safety officers had to arrange for COVID-19 screening for employees in Malaysia.
                </h2>
                <!-- Text -->
                <p class="font-size-sm mb-4">
                  Solution: Schedule RT-PCR and COVID-19 Antibody screening services and reports stored and retrieved through our Workplace Care solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 text-center mt-8">
        <!-- Buttons -->
        <router-link class="btn btn-outline-danger lift" to="./success-stories">
          Read More
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuccessStories',

  props: {},

  methods: {},

  filters: {
    img: function (value) {
      return require('@/assets/img/' + value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
