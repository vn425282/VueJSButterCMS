<template>
<section class="pt-10 pt-md-12">
      <div class="container-lg">
        <div class="row mt-n6">
          <div class="col-md-4"
            v-for="(post, index) in posts"
            :key="post.slug + '_' + index">
            <router-link :to="'/blog/' + post.slug">
            <!-- Card -->
            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">

              <!-- Image -->
              <img class="card-img-top rounded-top-left" :src="post.featured_image" alt="...">

              <!-- Body -->
              <div class="card-body">

                <!-- Heading -->
                <h2 class="mb-2">
                  {{ post.title }}
                </h2>

                <!-- Text -->
                <p class="font-size-sm mb-4">
                  {{ post.summary }}
                </p>

                <!-- Footer -->
                <div class="d-flex align-items-center">

                  <!-- Avatar -->
                  <div class="avatar avatar-xs">
                    <img class="avatar-img rounded-circle" src="https://lh3.googleusercontent.com/-mGV3LBq4iCY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmHTM2A6QKZBfGrx4BR-4ATw-OUxw/s96-c/photo.jpg" alt="...">
                  </div>

                  <!-- Body -->
                  <div class="ml-4 text-left">

                    <!-- Title -->
                    <p class="small mb-0">
                     {{ post.author.last_name }}
                    </p>

                    <!-- Position -->
                    <p class="small text-muted mt-n1 mb-0">
                      {{ new Date(post.published).toISOString().slice(0, 10) }}
                    </p>

                  </div>

                </div>

                <!-- Link -->
              </div>
            </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import butter from '../../plugins/buttercms'

export default {
  name: 'Welcome',
  props: {

  },
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    getPosts () {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then(res => {
        this.posts = res.data.data
      })
    }
  },
  filters: {
    img: function (value) {
      return require('@/assets/img/' + value)
    }
  },
  mounted: function () {
    this.getPosts()
  }
}
</script>

<style lang="scss" scoped>
</style>
