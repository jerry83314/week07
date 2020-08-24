<template>
  <div>
    <h3>這是單一產品細節頁面</h3>
    <h2>產品名稱:{{ product.title }}</h2>
    <div class="img">
      <img :src="`${ product.imageUrl }`" alt />
    </div>
    <br />
    <span>價格:${{ product.price }}元</span>
    <p>描述:{{ product.content }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    const vm = this
    // console.log(vm.$route.params.id)
    const id = vm.$route.params.id

    vm.axios
      .get(
        `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`
      )
      .then(function (res) {
        vm.product = res.data.data
        console.log(vm.product)
      })
  }
}
</script>

<style lang="scss">
  .img {
    width: 50%;
    text-align: center;
    margin: auto;
  }
  img {
    max-width: 100%;
  }
</style>
