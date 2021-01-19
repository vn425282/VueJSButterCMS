<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-lg">

        <!-- Brand -->
        <router-link class="navbar-brand d-lg-none" to="/">JEBHEALTH
        </router-link>

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Navigation -->
            <ul class="navbar-nav justify-content-end w-100">
            <!-- Solutions Navigation -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="landingsDropdown" href="/solutions" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Solutions
                </a>
                <div class="dropdown-positioner">
                <div class="dropdown-menu dropdown-menu-xl dropdown-menu-flush" aria-labelledby="landingsDropdown">
                    <div class="row align-items-center no-gutters">
                    <div class="col-md-6 order-1 dropdown-menu-col rounded-top-left-0 bg-gray-900 pt-4 py-lg-5">
                        <div class="dropdown-menu-body">

                        <!-- Heading -->
                        <h6 class="dropdown-header text-uppercase text-primary-light d-none d-lg-block">
                            Success Stories
                        </h6>

                        <!-- Links -->
                        <router-link class="d-flex text-decoration-none" to="./success-stories">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.133 2.036c6.945 3.876 9.445 8.206 7.5 12.99-4.97-.79-7.47-5.12-7.5-12.99z" fill="#f2a900" opacity=".3"></path><path d="M18.742 2.036c-6.945 3.876-9.445 8.206-7.5 12.99 4.97-.79 7.47-5.12 7.5-12.99z" fill="#f2a900" opacity=".3"></path><path d="M12 1c-4.076 6.83-4.076 11.83 0 15 3.91-3.17 3.91-8.17 0-15z" fill="#f2a900" opacity=".3"></path><path d="M6.344 13h11.312a1 1 0 01.958 1.287l-2.186 7.288A2 2 0 0114.512 23H9.488a2 2 0 01-1.916-1.425l-2.186-7.288A1 1 0 016.344 13z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold text-white mb-0">
                                For Manufacturing
                            </p>

                            <!-- Text -->
                            <span class="text-gray-500">
                                Electrical Engineering, Lifting, Chemicals and Pharmaceuticals
                            </span>

                            </div>

                        </router-link>
                        <router-link class="d-flex text-decoration-none mt-4" to="./success-stories">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 11a4 4 0 110-8 4 4 0 010 8z" fill="#f2a900" opacity=".3"></path><path d="M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold text-white mb-0">
                                For Tertiary Education
                            </p>

                            <!-- Text -->
                            <span class="text-gray-500">
                                Universities and Institutes of Higher Learning
                            </span>

                            </div>

                        </router-link>
                        <router-link class="d-flex text-decoration-none mt-4" to="./success-stories">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm-.5 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm0 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" fill="#f2a900" opacity=".3"></path><path d="M11.352 14.572l2.605-1.78a.5.5 0 00.001-.825l-2.605-1.792a.5.5 0 00-.783.412v3.572a.5.5 0 00.782.413z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold text-white mb-0">
                                For Financial Institutions
                            </p>

                            <!-- Text -->
                            <span class="text-gray-500">
                                Banks, Insurance and Financial Services
                            </span>

                            </div>

                        </router-link>
                        <router-link class="d-flex text-decoration-none mt-4" to="./success-stories">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M8 7a1 1 0 110-2h8a4 4 0 110 8H8a2 2 0 100 4h9a1 1 0 010 2H8a4 4 0 110-8h8a2 2 0 100-4H8z" fill="#f2a900" opacity=".3"></path><path d="M9.707 8.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L7.414 6l2.293 2.293zM14.293 20.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L16.586 18l-2.293 2.293z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold text-white mb-0">
                                For Small & Medium Enterprises
                            </p>

                            <!-- Text -->
                            <span class="text-gray-500">
                                F&B, Transport, Startups, Household Employers and Others
                            </span>

                            </div>

                        </router-link>
                        </div>
                    </div>
                    <div class="col-md-6 order-0 dropdown-menu-col">
                        <div class="dropdown-menu-body">

                        <!-- Heading -->
                        <h6 class="dropdown-header text-uppercase d-none d-lg-block">
                            Solutions
                        </h6>

                        <!-- Links -->
                        <a class="d-flex text-decoration-none text-reset" href="https://jebhealth.com/workplace-care">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#f2a900" opacity=".3"></path><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold mb-0">
                                Workplace Care
                            </p>

                            <!-- Text -->
                            <span class="text-muted">
                                Statutory Medical Examination, Occupational Health Assessment, Back-to-Work COVID-19 Screening
                            </span>

                            </div>

                        </a>
                        <a class="d-flex text-decoration-none text-reset mt-4" href="https://jebhealth.com/virtual-care">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#f2a900" opacity=".3"></path><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold mb-0">
                                Virtual Care
                            </p>

                            <!-- Text -->
                            <span class="text-muted">
                                Medical Teleconsultation, Digital Health Risk Assessment
                            </span>

                            </div>

                        </a>
                        <a class="d-flex text-decoration-none text-reset mt-4" href="https://jebhealth.com/outpatient-care">
                            
                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z" fill="#f2a900" opacity=".3"></path><path d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold mb-0">
                                Outpatient Care
                            </p>

                            <!-- Text -->
                            <span class="text-muted">
                                GPs, Family Medicine Doctors and Specialists
                            </span>

                            </div>

                        </a>
                        <a class="d-flex text-decoration-none text-reset mt-4" href="https://jebhealth.com/preventive-care">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M18.145 11.844l-.698 4.185a1 1 0 01-1.165.82L4.913 14.78a1 1 0 01-.783-.709L2.306 7.685a1 1 0 01.961-1.275h13.726l.613-2.627a1.18 1.18 0 011.15-.912h2.064a1.18 1.18 0 110 2.36h-1.128l-1.547 6.613z" fill="#f2a900" opacity=".3"></path><path d="M6.5 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#f2a900"></path></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold mb-0">
                                Preventive Care
                            </p>

                            <!-- Text -->
                            <span class="text-muted">
                                Annual Health Screening, Dental and Vaccination Services
                            </span>

                            </div>

                        </a>
                        <a class="d-flex text-decoration-none text-reset mt-4" href="https://jebhealth.com/corporate-care">

                            <!-- Icon -->
                            <div class="icon icon-sm text-primary-light">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7.139 4v15h9.722V4H7.14zm.694-3h8.334c1.406 0 2.083.981 2.083 2.5v17c0 1.519-.677 2.5-2.083 2.5H7.833c-1.406 0-2.083-.981-2.083-2.5v-17c0-1.519.677-2.5 2.083-2.5z" fill="#f2a900"></path><path fill="#f2a900" opacity=".3" d="M7 4v15h10V4z"></path><circle fill="#f2a900" cx="12" cy="21" r="1"></circle></g></svg>
                            </div>

                            <div class="ml-3">

                            <!-- Heading -->
                            <p class="font-weight-bold mb-0">
                                Corporate Care
                            </p>

                            <!-- Text -->
                            <span class="text-muted">
                                Identity Management, Virtual Payments, Analytics and Enterprise Support
                            </span>

                            </div>

                        </a>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            <!-- Plans & Pricing Navigation -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="docsDropdown" href="./plans" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Plans &amp; Pricing
                </a>
                <div class="dropdown-positioner">
                    <div class="dropdown-menu dropdown-menu-lg" aria-labelledby="docsDropdown">
                    <router-link class="d-flex align-items-center text-reset text-decoration-none" to="./plans">

                        <!-- Icon -->
                        <div class="icon text-primary-light">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z" fill="#f2a900" opacity=".3"></path><path d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z" fill="#f2a900"></path><rect fill="#f2a900" opacity=".3" x="7" y="10" width="5" height="2" rx="1"></rect><rect fill="#f2a900" opacity=".3" x="7" y="14" width="9" height="2" rx="1"></rect></g></svg>
                        </div>

                        <div class="ml-3">

                        <!-- Heading -->
                        <h6 class="text-uppercase text-primary mb-0">
                            Free Plan >
                        </h6>

                        <!-- Text -->
                        <span>Sign up for free, pay as you go. Recommended for SMEs.</span>

                        </div>

                    </router-link>
                    <router-link class="d-flex align-items-center text-reset text-decoration-none mt-5" to="./plans">

                        <!-- Icon -->
                        <div class="icon text-primary-light">
                        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#f2a900"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#f2a900" opacity=".3"></path></g></svg>
                        </div>

                        <div class="ml-3">

                        <!-- Heading -->
                        <h6 class="text-uppercase text-primary mb-0">
                            Custom Plan >
                        </h6>

                        <!-- Text -->
                        <span>Build a plan with us that best meets your organisational needs. Recommended for MNCs.</span>

                        </div>

                    </router-link>
                    </div>

                </div>
                </li>
                </ul>

        <!-- Brand -->
        <router-link class="navbar-brand d-none d-lg-block px-lg-6" to="./">JEBHEALTH</router-link>
            <!-- Navigation -->
            <ul class="navbar-nav justify-content-start w-100">
            <!-- Company Navigation -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="pagesDropdown" href="./about-us" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Company
                </a>
                <div class="dropdown-positioner">
                    <div class="dropdown-menu dropdown-menu-lg" aria-labelledby="pagesDropdown">
                    <div class="row no-gutters">
                        <div class="col">
                        <!-- Company Sub-Heading 1-->
                        <h6 class="dropdown-header text-uppercase mb-3">
                            About Us
                        </h6>
                        <!-- Links -->
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Our Mission
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Our Commitment
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Our Giveback
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Our Products
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/privacy-policy">
                            Our Policies
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/announcements">
                            Announcements
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/careers">
                            Careers
                        </a>
                        </div>
                        <div class="col">
                        <!-- Company Sub-Heading 2-->
                        <h6 class="dropdown-header text-uppercase mb-3">
                            Our Ecosystem
                        </h6>
                        <!-- Links -->
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Healthcare Providers
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Non-healthcare Partners
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Developers
                        </a>
                        <!-- Company Sub-Heading 2-->
                        <h6 class="dropdown-header text-uppercase mb-3">
                            Help Centre
                        </h6>
                        <!-- Links -->
                        <a class="dropdown-item" href="https://jebhealth.com/">
                            Documentation
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com/contact-us">
                            Contact Us
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </li>
            <!-- Account Navigation -->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="pagesDropdown" href="https://jebhealth.com/about-us" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Account
                </a>
                <div class="dropdown-positioner">
                    <div class="dropdown-menu dropdown-menu-lg" aria-labelledby="pagesDropdown">
                    <div class="row no-gutters">
                        <div class="col">
                        <!-- Links -->
                        <a id="log-in-url" class="dropdown-item" :href="coporateURL">
                            Login
                        </a>
                        <a class="dropdown-item" href="https://jebhealth.com">
                            For Individuals
                        </a>
                        <a class="dropdown-item" href="https://doctor.jebhealth.com/">
                            For HCPs
                        </a>
                        </div>
                    </div>
                    </div>

                </div>
                </li>
            </ul>

        </div>
        </div>
  </nav>
</template>

<script>
import { CORPORATE_LOGIN_URL } from '../.env'

export default {
  name: 'HeaderSubSecond',
  data: () => {
    return {
      coporateURL: CORPORATE_LOGIN_URL
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
