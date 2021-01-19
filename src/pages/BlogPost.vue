<template>
    <div>
        <!-- <AppHeader /> -->

        <!-- <div id="blog-post">
            <h1>{{ post.data.title }}</h1>
            <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
            <div v-html="post.data.body"></div>

            <router-link
            v-if="post.meta.previous_post"
            :to="/blog/ + post.meta.previous_post.slug"
            class="button"
            >
            {{ post.meta.previous_post.title }}
            </router-link>
            <router-link
            v-if="post.meta.next_post"
            :to="/blog/ + post.meta.next_post.slug"
            class="button"
            >
            {{ post.meta.next_post.title }}
            </router-link>
        </div> -->
    <section class="py-9 py-md-11" v-if="post.data">
      <div class="container-lg">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div v-if="post.meta.previous_post">
            Previous Post:
            <router-link
                v-if="post.meta.previous_post"
                :to="/blog/ + post.meta.previous_post.slug"
                class="button"
            >
              {{ post.meta.previous_post.title }}
            </router-link>
            </div>
            <div v-if="post.meta.next_post">
              Next Post:
              <router-link
                  :to="/blog/ + post.meta.next_post.slug"
                  class="button"
              >
              {{ post.meta.next_post.title }}
              </router-link>
            </div>
            <!-- Heading -->
            <h1 class="mb-4">
              {{ post.data.title }}
            </h1>
            <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
            <!-- Text -->
            <p class="mb-9">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <!-- Text -->
            <p v-html="post.data.body"></p>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
import butter from '../plugins/buttercms'

export default {
  name: 'blog-post',
  components: {

  },
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data
        })
        .catch((res) => {
          console.log(res)
        })
    }
  },
  created () {
    this.getPost()
  }
}
</script>
