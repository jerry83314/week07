<template>
  <div>
    <div class="container py-3" style="height: 100%;">
      <div class="row h-100 align-items-center">
        <div class="col-md-6 mx-auto">
          <img class="img-fluid" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/jD9ziga8DND7umdJDXNi6js77CvCv1YEJr2934t6OzLSLa3x3cfk1DJxCEfqRyQRfpA00y3tqNdsjSzuq4QQuRwoBczMzwmgg3u6bwgPux67hvWvEzCQDFDlKpGYIQx2.jpg" alt="">
          <form class="form-signin">
            <h1 class="h3 my-3 font-weight-normal">遇扇坊</h1>
            <div class="form-group">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                id="inputEmail"
                type="email"
                v-model="user.email"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
              />
            </div>
            <div class="form-group">
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                id="inputPassword"
                v-model="user.password"
                type="password"
                class="form-control"
                placeholder="Password"
                required
              />
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="button" @click="signin">登入</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      expired: '',
      uuid: '87c11b32-8e80-4b1b-aaaa-2c44664c537e'
    }
  },
  methods: {
    // 登入
    signin () {
      console.log(this.user)
      // POST api/auth/login
      const vm = this

      const url = `${process.env.VUE_APP_APIPATH}/api/auth/login`

      vm.axios.post(url, vm.user)
        .then((res) => {
          console.log(res.data.message)
          vm.token = res.data.token
          vm.expired = res.data.expired

          document.cookie = `myToken=${vm.token}; expires=${new Date(
            vm.expired * 1000
          )};`

          vm.$router.push('admin/products')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
