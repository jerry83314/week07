<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <td>下單時間</td>
          <td>購買款項</td>
          <td>付款方式</td>
          <td>應付金額</td>
          <td>是否付款</td>
          <td>客戶資料</td>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr v-for="(item, key) in orders" :key="key" :class="{'text-secondary': !item.is_paid}">
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.payment }}</td>
          <td class="text-right">{{ item.amount }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item)"
              />
              <label class="custom-control-label" :for="item.id">
                <strong v-if="item.paid" class="text-success">已付款</strong>
                <span v-else class="text-muted">尚未付款</span>
              </label>
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-primary" @click="getUserInfo(item.id)">客戶資料</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 客戶資料 Modal -->
    <div
      class="modal fade"
      id="userModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title w-100 text-white text-center" id="exampleModalLabel">客戶資料</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>姓名: {{ userInfo.name }}</p>
            <p>地址: {{ userInfo.address }}</p>
            <p>電話: {{ userInfo.tel }}</p>
            <p>信箱: {{ userInfo.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Loading from 'vue-loading-overlay'

export default {
  components: {
    Loading
  },
  props: ['token'],
  data () {
    return {
      orders: [],
      userInfo: {},
      isLoading: false
    }
  },
  created () {
    const vm = this
    vm.getOrders()
  },
  methods: {
    // 取得所有訂單資料
    getOrders () {
      // GET api/{uuid}/admin/ec/orders
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders`

      vm.isLoading = true

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      vm.axios
        .get(url)
        .then(res => {
          vm.orders = res.data.data
          vm.isLoading = false
        })
        .catch(err => {
          console.log(err.response)
          vm.isLoading = false
        })
    },
    // 取得單一筆訂單客戶資料
    getUserInfo (id) {
      // GET api/{uuid}/admin/ec/orders/{id}
      const vm = this
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`

      vm.isLoading = true

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      vm.axios.get(url)
        .then((res) => {
          vm.isLoading = false
          vm.userInfo = res.data.data.user
          $('#userModal').modal('show')
        })
        .catch((err) => {
          vm.isLoading = false
          console.log(err)
        })
    },
    // 修改付款狀態
    setOrderPaid (item) {
      // PATCH api/{uuid}/admin/ec/orders/{id}/paid
      const vm = this
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`

      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`
      }

      vm.isLoading = true

      vm.axios.patch(url, item.id)
        .then((res) => {
          vm.isLoading = false
          vm.getOrders()
        })
        .catch((err) => {
          vm.isLoading = false
          console.log(err)
        })
    }
  }
}
</script>
