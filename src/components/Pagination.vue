<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': pages.current_page === 1}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePageEvent(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-for="(page, index) in pages.total_pages" :key="index" class="page-item" :class="{ 'active':page === pages.current_page}">
        <a class="page-link" href="#" @click.prevent="changePageEvent(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="changePageEvent(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    changePageEvent: function (page) {
      this.$emit('changepage', page)
      console.log(page)
    }
  }
}
</script>
