<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openCouponModal('created')">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.deadline.datetime }}</td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary" @click="openCouponModal('edit', item)">編輯</button>
              <button class="btn btn-outline-danger" @click="openCouponModal('del', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- modal -->
    <div
      id="couponModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">建立優惠券</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                id="title"
                v-model="copyCoupon.title"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input
                id="coupon_code"
                v-model="copyCoupon.code"
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input id="due_date" v-model="due_date" type="date" class="form-control" />
            </div>
            <div class="form-group">
              <label for="due_time">到期時間</label>
              <input id="due_time" v-model="due_time" type="time" step="1" class="form-control" />
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input
                id="price"
                v-model="copyCoupon.percent"
                type="number"
                class="form-control"
                placeholder="請輸入折扣數量"
              />
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  id="enabled"
                  v-model="copyCoupon.enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- del modal -->
    <div
      id="delCouponModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>刪除優惠卷</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ copyCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>

            <button
              type="button"
              class="btn btn-danger"
              @click="delCoupon"
            >
              確認刪除
            </button>
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
      coupons: [],
      copyCoupon: {
        title: '',
        code: '',
        percent: '',
        enabled: false,
        deadline_at: ''
      },
      due_date: '',
      due_time: '',
      status: '',
      isLoading: false
    }
  },
  created () {
    const vm = this
    vm.getCoupons()
  },
  methods: {
    openCouponModal (status, item) {
      const vm = this

      switch (status) {
        case 'created':
          vm.copyCoupon = {}
          vm.status = 'created'
          $('#couponModal').modal('show')
          break
        case 'edit': {
          vm.copyCoupon = { ...item }
          const dedlineAt = vm.copyCoupon.deadline.datetime.split(' ')
          vm.due_date = dedlineAt[0]
          vm.due_time = dedlineAt[1]
          $('#couponModal').modal('show')
          break
        }
        case 'del':
          $('#delCouponModal').modal('show')
          vm.copyCoupon = item
          console.log(item)
          break
      }
    },
    getCoupons () {
      // GET api/{uuid}/admin/ec/coupons
      const vm = this
      vm.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons`

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      vm.axios.get(url)
        .then((res) => {
          console.log(res)
          vm.coupons = res.data.data
          vm.isLoading = false
        })
    },
    updateCoupon () {
      const vm = this

      vm.isLoading = true

      // POST api/{uuid}/admin/ec/coupon
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`

      vm.copyCoupon.deadline_at = `${vm.due_date} ${vm.due_time}`

      if (vm.status === 'created') {
        vm.axios.post(url, vm.copyCoupon)
          .then((res) => {
            console.log(res)
            $('#couponModal').modal('hide')
            vm.getCoupons()
            vm.isLoading = false
          })
          .catch((err) => {
            console.log(err)
            vm.isLoading = false
          })
      } else {
        // PATCH api/{uuid}/admin/ec/coupon/{id}
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${vm.copyCoupon.id}`
        vm.isLoading = true
        vm.axios.patch(url, vm.copyCoupon)
          .then((res) => {
            console.log(res)
            $('#couponModal').modal('hide')
            vm.getCoupons()
          })
          .catch((err) => {
            console.log(err)
            vm.isLoading = false
          })
      }
    },
    delCoupon () {
      const vm = this
      vm.isLoading = true
      // DELETE api/{uuid}/admin/ec/coupon/{id}
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${vm.copyCoupon.id}`

      vm.axios.delete(url)
        .then((res) => {
          console.log(res)
          vm.isLoading = false
          $('#delCouponModal').modal('hide')
          vm.getCoupons()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
