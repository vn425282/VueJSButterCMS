<template>
  <section class="bg-gradient-light pt-6 pt-md-11 pb-9 pb-md-11">
    <div class="container-lg">
      <p id="solution-custom"></p>
      <div class="row align-items-center justify-content-between">
        <div class="col-md-12 col-lg-18 text-center">
          <!-- Preheading -->
          <h6 class="text-uppercase text-danger mt-5 mb-5">HealthTech Solutions Designed for Corporates</h6>

          <!-- Heading -->
          <h2 class="display-3 mb-5">
                  One Portal connected to a <span class="text-underline text-underline-warning">storage, communication, commerce, health and payment</span> network
          </h2>
        </div>
      </div>
      <br :style="{display: setTransformVal() ? 'block' : 'none'}" />
      <br />
      <div class="row align-items-center justify-content-between">
        <div class="col-md-12 col-lg-18">
          <!-- Stack -->
          <div class="card-stack">
            <!-- Workplace Care Card -->
            <div class="card-stack-item mb-9">
              <div
                class="card card-lg rounded overflow-hidden"
                :style="{ transform: setTransformVal() ? 'translateY(calc(-3rem)) scale(0.91)' : 'translateY(calc(0rem)) scale(1)'}"
              >
                <div class="row no-gutters" style="opacity: 1">
                  <div class="col-md order-md-1 d-flex align-items-end">
                    <!-- Image -->
                    <a href="https://jebhealth.com/workplace-care">
                      <img
                        class="card-img-top"
                        :src="'solution/landing-statutory-checkups.jpg' | img"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div
                    class="col-md-5 order-md-0 d-flex align-items-center bg-white"
                  >
                    <div class="card-body text-center">
                      <!-- Icon -->
                      <div class="icon text-danger mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path
                              d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
                              fill="#f2a900"
                              opacity=".3"
                            ></path>
                            <path
                              d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z"
                              fill="#f2a900"
                            ></path>
                          </g>
                        </svg>
                      </div>

                      <!-- Heading -->
                      <h1 class="font-family-sans-serif mb-4 mt-auto">
                        Workplace Care
                      </h1>

                      <!-- Text -->
                      <p>
                            Complete 30+ types of statutory medical examinations, pre-employment and occupational health assessments & back-to-work COVID-19 screenings (Malaysia only) on one interface.
                      </p>

                      <!-- Link -->
                      <!-- a class="h6 text-danger text-uppercase text-decoration-none mt-auto" href="/solutions/workplace-care/features/statutory-checkups">
                          View<i class="fe fe-arrow-right"></i>
                        </a-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Virtual Care Card -->
            <div class="card-stack-item mb-9">
              <div
                class="card card-lg rounded overflow-hidden"
                :style="{ transform: setTransformVal() ? 'translateY(calc(-2rem)) scale(0.94)' : 'translateY(calc(0rem)) scale(1)'}"
              >
                <div class="row no-gutters" style="opacity: 1">
                  <div class="col-md order-md-1 d-flex align-items-end">
                    <!-- Image -->
                    <a href="https://jebhealth.com/virtual-care">
                      <img
                        class="card-img-top"
                        :src="'solution/landing-medical-teleconsultation.jpg' | img"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div
                    class="col-md-5 order-md-0 d-flex align-items-center bg-white"
                  >
                    <div class="card-body text-center">
                      <!-- Icon -->
                      <div class="icon text-danger mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path
                              d="M7.139 4v15h9.722V4H7.14zm.694-3h8.334c1.406 0 2.083.981 2.083 2.5v17c0 1.519-.677 2.5-2.083 2.5H7.833c-1.406 0-2.083-.981-2.083-2.5v-17c0-1.519.677-2.5 2.083-2.5z"
                              fill="#f2a900"
                            ></path>
                            <path
                              fill="#f2a900"
                              opacity=".3"
                              d="M7 4v15h10V4z"
                            ></path>
                            <circle
                              fill="#f2a900"
                              cx="12"
                              cy="21"
                              r="1"
                            ></circle>
                          </g>
                        </svg>
                      </div>

                      <!-- Heading -->
                      <h1 class="font-family-sans-serif mb-4 mt-auto">
                        Virtual Care
                      </h1>

                      <!-- Text -->
                      <p>
                        Teleconsult with 100+ qualified doctors from a curated panel of telemedicine providers using our digitalised straight-through registration.
                      </p>

                      <!-- Link -->
                      <!--a class="h6 text-danger text-uppercase text-decoration-none mt-auto" href="/solutions/virtual-care/features/medical-teleconsultations">
                          View<i class="fe fe-arrow-right"></i>
                        </a-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Preventive Care Card -->
            <div class="card-stack-item mb-9">
              <div
                class="card card-lg rounded overflow-hidden"
                :style="{ transform: setTransformVal() ? 'translateY(calc(-1rem)) scale(0.97)' : 'translateY(calc(0rem)) scale(1)'}"
              >
                <div class="row no-gutters" style="opacity: 1">
                  <div class="col-md order-md-1 d-flex align-items-end">
                    <!-- Image -->
                    <a href="https://jebhealth.com/preventive-care">
                      <img
                        class="card-img-top"
                        :src="'solution/landing-preventive-deals.jpg' | img"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div
                    class="col-md-5 order-md-0 d-flex align-items-center bg-white"
                  >
                    <div class="card-body text-center">
                      <!-- Icon -->
                      <div class="icon text-danger mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path
                              d="M18.145 11.844l-.698 4.185a1 1 0 01-1.165.82L4.913 14.78a1 1 0 01-.783-.709L2.306 7.685a1 1 0 01.961-1.275h13.726l.613-2.627a1.18 1.18 0 011.15-.912h2.064a1.18 1.18 0 110 2.36h-1.128l-1.547 6.613z"
                              fill="#f2a900"
                              opacity=".3"
                            ></path>
                            <path
                              d="M6.5 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                              fill="#f2a900"
                            ></path>
                          </g>
                        </svg>
                      </div>

                      <!-- Heading -->
                      <h1 class="font-family-sans-serif mb-4 mt-auto">
                        Preventive Care
                      </h1>

                      <!-- Text -->
                      <p>
                        Book 200+ kinds of preventive services such as health screening, dental & vaccination services from one of the largest online health marketplaces.
                      </p>

                      <!-- Link -->
                      <!--a class="h6 text-danger text-uppercase text-decoration-none mt-auto" href="/solutions/preventive-care/features/preventive-deals">
                            View<i class="fe fe-arrow-right"></i>
                          </a-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Outpatient Care Card -->
            <div class="card-stack-item mb-9">
              <div
                class="card card-lg rounded overflow-hidden"
                style="transform: translateY(calc(0rem)) scale(1);"
              >
                <div class="row no-gutters" style="opacity: 1">
                  <div class="col-md order-md-1 d-flex align-items-end">
                    <!-- Image -->
                    <a href="https://jebhealth.com/outpatient-care">
                      <img
                        class="card-img-top"
                        :src="'solution/landing-outpatient-visits.jpg' | img"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div
                    class="col-md-5 order-md-0 d-flex align-items-center bg-white"
                  >
                    <div class="card-body text-center">
                      <!-- Icon -->
                      <div class="icon text-danger mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path
                              d="M12 11a4 4 0 110-8 4 4 0 010 8z"
                              fill="#f2a900"
                              opacity=".3"
                            ></path>
                            <path
                              d="M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z"
                              fill="#f2a900"
                            ></path>
                          </g>
                        </svg>
                      </div>

                      <!-- Heading -->
                      <h1 class="font-family-sans-serif mb-4 mt-auto">
                        Outpatient Care
                      </h1>

                      <!-- Text -->
                      <p>
                        Visit 300+ GPs &amp; Specialists from one of our preferred provider networks and enjoy preferential rates when you identify yourself at the desk.
                      </p>

                      <!-- Link -->
                      <!--a class="h6 text-danger text-uppercase text-decoration-none mt-auto" href="/solutions/outpatient-care/features/outpatient-visits">
                          View<i class="fe fe-arrow-right"></i>
                        </a-->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Corporate Care Card -->
            <div class="card-stack-item mb-9">
              <div
                class="card card-lg rounded overflow-hidden"
                style="transform: translateY(calc(1rem)) scale(1.03)"
              >
                <div class="row no-gutters" style="opacity: 1">
                  <div class="col-md order-md-1 d-flex align-items-end">
                    <!-- Image -->
                    <a href="https://jebhealth.com/corporate-care">
                      <img
                        class="card-img-top"
                        :src="'solution/landing-identity-management.jpg' | img"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div
                    class="col-md-5 order-md-0 d-flex align-items-center bg-white"
                  >
                    <div class="card-body text-center">
                      <!-- Icon -->
                      <div class="icon text-danger mx-auto mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h24v24H0z"></path>
                            <path
                              d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z"
                              fill="#f2a900"
                              opacity=".3"
                            ></path>
                            <path
                              d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z"
                              fill="#f2a900"
                            ></path>
                          </g>
                        </svg>
                      </div>

                      <!-- Heading -->
                      <h1 class="font-family-sans-serif mb-4 mt-auto">
                        Corporate Care
                      </h1>

                      <!-- Text -->
                      <p>
                        Assign your people into 6 pre-set user roles, track payments and get enterprise insights and training support for your organisation.
                      </p>

                      <!-- Link -->
                      <!--a class="h6 text-danger text-uppercase text-decoration-none mt-auto" href="/solutions/corporate-care/features/identity-management">
                          View<i class="fe fe-arrow-right"></i>
                        </a-->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-8 text-center">
          <!-- Preheading -->
          <h6 class="text-uppercase text-danger mb-5">Key Benefits</h6>

          <!-- Heading -->
          <h2 class="display-4 text-dark mb-9 mb-md-10">
            Enjoy much more and get a
            <span class="text-underline text-underline-warning"
              >rewarding experience</span
            >.
          </h2>
        </div>
      </div>
      <div class="row mt-n8 mt-md-n9">
        <div class="col-md-6 col-lg-4">
          <!-- Item -->
          <div class="d-flex mt-8 mt-md-9">
            <!-- Icon -->
            <div class="icon text-warning">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z"
                    fill="#335EEA"
                    opacity=".3"
                  ></path>
                  <path
                    d="M10.875 15.75a.946.946 0 01-.67-.287l-1.918-1.917a.926.926 0 010-1.342c.384-.383 1.007-.383 1.342 0l1.246 1.246 3.162-3.162a.926.926 0 011.342 0 .926.926 0 010 1.341l-3.833 3.834a.946.946 0 01-.671.287zM11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z"
                    fill="#335EEA"
                  ></path>
                </g>
              </svg>
            </div>

            <!-- Body -->
            <div class="ml-5">
              <!-- Title -->
              <p class="font-size-lg font-weight-bold text-dark mb-1">
                Cost Savings
              </p>

              <!-- Text -->
              <p class="font-size-sm text-dark-60 mb-0">
                30% lower than retail price with no hidden fees
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <!-- Item -->
          <div class="d-flex mt-8 mt-md-9">
            <!-- Icon -->
            <div class="icon text-warning">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M22 15.01l.025-.01v4.586a1 1 0 01-1.707.707L18.025 18H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v9.01zM6.168 10.555C7.678 12.819 9.646 14 12 14c2.354 0 4.322-1.18 5.832-3.445a1 1 0 10-1.664-1.11C15.01 11.181 13.646 12 12 12c-1.646 0-3.01-.82-4.168-2.555a1 1 0 00-1.664 1.11z"
                    fill="#335EEA"
                  ></path>
                </g>
              </svg>
            </div>

            <!-- Body -->
            <div class="ml-5">
              <!-- Title -->
              <p class="font-size-lg font-weight-bold text-dark mb-1">
                Convenience
              </p>

              <!-- Text -->
              <p class="font-size-sm text-dark-60 mb-0">
                Access solutions using Single Sign-On (SSO) solution
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <!-- Item -->
          <div class="d-flex mt-9">
            <!-- Icon -->
            <div class="icon text-warning">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M14.293 16.707a1 1 0 011.414-1.414l4 4a1 1 0 01-1.414 1.414l-4-4z"
                    fill="#335EEA"
                    opacity=".3"
                  ></path>
                  <path
                    d="M11 16a5 5 0 100-10 5 5 0 000 10zm0 2a7 7 0 110-14 7 7 0 010 14z"
                    fill="#335EEA"
                  ></path>
                </g>
              </svg>
            </div>

            <!-- Body -->
            <div class="ml-5">
              <!-- Title -->
              <p class="font-size-lg font-weight-bold text-dark mb-1">
                Completeness
              </p>

              <!-- Text -->
              <p class="font-size-sm text-dark-60 mb-0">
                3x more features and service offerings
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <!-- Item -->
          <div class="d-flex mt-8 mt-md-9">
            <!-- Icon -->
            <div class="icon text-warning">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M13 18.945V20h1a2 2 0 012 2H8a2 2 0 012-2h1v-1.055a8.972 8.972 0 01-5.206-2.427l-1.055 1.156a1 1 0 01-1.478-1.348l1.788-1.959a1 1 0 011.515.044 7 7 0 109.557-10.07 1 1 0 111.18-1.615 9.001 9.001 0 01-4.3 16.22z"
                    fill="#335EEA"
                  ></path>
                  <circle
                    fill="#335EEA"
                    opacity=".3"
                    cx="12"
                    cy="10"
                    r="6"
                  ></circle>
                </g>
              </svg>
            </div>

            <!-- Body -->
            <div class="ml-5">
              <!-- Title -->
              <p class="font-size-lg font-weight-bold text-dark mb-1">
                Compliance
              </p>

              <!-- Text -->
              <p class="font-size-sm text-dark-60 mb-0">
                Adhere to PDPA, GDPR, HIPAA, PCI-DSS and OAuth Protocol
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <!-- Item -->
          <div class="d-flex mt-8 mt-md-9">
            <!-- Icon -->
            <div class="icon text-warning">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M10.586 6.343l.707.707a1 1 0 001.414-1.414L12 4.929l1.414-1.414 2.122 2.121a1 1 0 001.414-1.414L14.828 2.1a2 2 0 012.829 0l4.242 4.242a2 2 0 010 2.829L9.172 21.899a2 2 0 01-2.829 0l-4.242-4.242a2 2 0 010-2.829l2.12 2.122a1 1 0 001.415-1.414l-2.121-2.122L4.929 12l.707.707a1 1 0 101.414-1.414l-.707-.707 1.414-1.414 2.122 2.12a1 1 0 001.414-1.413L9.172 7.757l1.414-1.414z"
                    fill="#335EEA"
                  ></path>
                </g>
              </svg>
            </div>

            <!-- Body -->
            <div class="ml-5">
              <!-- Title -->
              <p class="font-size-lg font-weight-bold text-dark mb-1">
                Connectivity
              </p>

              <!-- Text -->
              <p class="font-size-sm text-dark-60 mb-0">
                99% uptime and compatible with multiple devices
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <!-- Item -->
          <div class="d-flex mt-8 mt-md-9">
            <!-- Icon -->
            <div class="icon text-warning">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"></path>
                  <path
                    d="M16.374 19.939l5.849-8.773A.75.75 0 0021.599 10H17V4.477a.75.75 0 00-1.374-.416l-5.849 8.773A.75.75 0 0010.401 14H15v5.523a.75.75 0 001.374.416z"
                    fill="#335EEA"
                  ></path>
                  <path
                    d="M4.5 5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm0 12h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm-2-6h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3z"
                    fill="#335EEA"
                    opacity=".3"
                  ></path>
                </g>
              </svg>
            </div>

            <!-- Body -->
            <div class="ml-5">
              <!-- Title -->
              <p class="font-size-lg font-weight-bold text-dark mb-1">
                Cybersecurity
              </p>
              <!-- Text -->
              <p class="font-size-sm text-dark-60 mb-0">
                Enhanced with 256 encryption and backed by cyber insurance
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 text-center mt-8">
          <!-- Buttons -->
          <router-link class="btn btn-danger lift" to="./plans">
            Sign Up a Free Plan >
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Solution',
  props: {},
  methods: {
    setTransformVal () {
      if (screen.width > 991) {
        return true
      }
      return false
    }
  },
  filters: {
    img: function (value) {
      return require('@/assets/img/' + value)
    }
  },

  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
