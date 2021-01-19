<template>
    <section class="pt-10 pt-md-12">
        <div class="container-lg">
            <div class="row mt-n6">
                <div class="col-md-4">
                    <!-- Card -->
                    <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                        <!-- Image -->
                        <img class="card-img-top rounded-top-left"
                            :src="'posts/post-header-10.png' | img"
                            alt="...">
                        <!-- Body -->
                        <div class="card-body">
                            <!-- Heading -->
                            <h2 class="mb-2">
                                Challenge: Email and phone coordination for appointments with often delayed completed
                                medical reports delivery.
                            </h2>
                            <!-- Text -->
                            <p class="font-size-sm mb-4">
                                Solution: Digitalised the end-to-end process for Pre-employment and Statutory Medical
                                Examinations using our Workplace Care solution.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!-- Card -->
                    <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                        <!-- Image -->
                        <img class="card-img-top rounded-top-left"
                            :src="'posts/post-header-11.png' | img"
                            alt="...">
                        <!-- Body -->
                        <div class="card-body">
                            <!-- Heading -->
                            <h2 class="mb-2">
                                Challenge: Organisation has multiple entities and cost centres and all payments need to
                                be billed accordingly.
                            </h2>
                            <!-- Text -->
                            <p class="font-size-sm mb-4">
                                Solution: Transactions are captured digitally and filtered into individual entity
                                invoices for billing using our Corporate Care solution.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!-- Card -->
                    <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                        <!-- Image -->
                        <img class="card-img-top rounded-top-left"
                            :src="'posts/post-header-12.png' | img"
                            alt="...">
                        <!-- Body -->
                        <div class="card-body">
                            <!-- Heading -->
                            <h2 class="mb-2">
                                Challenge: HRs to conduct mandatory COVID-19 screening to get employees certified fit to
                                work.
                            </h2>
                            <!-- Text -->
                            <p class="font-size-sm mb-4">
                                Solution: Schedule RT-PCR and COVID-19 Antibody screening services and reports stored
                                and retrieved through our Workplace Care solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Post',
  props: {

  },
  methods: {

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
