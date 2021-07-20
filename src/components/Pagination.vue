<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mt-5 mb-0">
        <li class="page-item" :class="{'disabled': !pages.has_pre}" >
          <a class="page-link btn-hover border-0 rounded-0" href="#" aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{'active': pages.current_page === page}">
          <a class="page-link btn-hover border-0" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pages.has_next}">
          <a class="page-link btn-hover border-0 rounded-0" href="#" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>
