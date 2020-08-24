<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" style="color: #5B5B5B;">
        <img
          width="40px"
          src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/DnwtumpOJ2m85hqBW4qNAMtnWtX4pCVh0OulvDC9B1TvKVdJnwKtR29rWQuYeMI67z6FVt8rZWgwfEN3LWoBPBPyArYp0D2Y0tTfhGIYgs2yP67tds3u3gzQudbc1EgQ.jpg"
          alt
        />
        CursiveFancy
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">優惠券列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/images">圖片列表</router-link>
          </li>
        </ul>
        <button type="button" class="btn btn-outline-primary ml-auto" @click="signout">登出</button>
      </div>
    </nav>
    <router-view :token="token" v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    const vm = this
    vm.checkLogin()
  },
  methods: {
    checkLogin () {
      const vm = this
      // 取得 token
      vm.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      const url = `${process.env.VUE_APP_APIPATH}/api/auth/check`
      // POST api/auth/check
      vm.axios
        .post(url, {
          api_token: vm.token
        })
        .then(res => {
          console.log(res)
          vm.checkSuccess = true
        })
        .catch(err => {
          console.log(err)
          vm.$router.push('/login')
        })
    },
    // 登出
    signout () {
      const vm = this
      document.cookie = 'myToken=; expires=;'
      vm.$router.push('/login')
    }
  }
}
</script>
