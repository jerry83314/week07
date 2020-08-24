<template>
  <div class="about">
    <h2>產品列表</h2>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/products">Products</router-link>|
      <router-link to="/cart">Cart</router-link>|
      <router-link to="/admin">後台登入</router-link>
    </div>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>
          <router-link :to="`/product/${ item.id }`">連結</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  created () {
    const vm = this

    vm.axios
      .get(
        `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`
      )
      .then(function (res) {
        vm.products = res.data.data
      })
  }

}
</script>
