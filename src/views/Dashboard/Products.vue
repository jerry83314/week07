<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal('new')">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <span v-if="item.enabled" class="text-primary">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openModal('update', item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div v-for="i in 5" :key="i + 'img'" class="form-group">
                  <label :for="'img' + i">輸入圖片網址</label>
                  <input
                    :id="'img' + i"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="copyProduct.imageUrl[i - 1]"
                  />
                </div>
                <img class="img-fluid" alt :src="copyProduct.imageUrl[0]" />
                <div class="form-group">
                  <label for="customFile">或 上傳圖片</label>
                  <input type="file" id="file" class="form-control" @change="uploadFile" />
                </div>
                <!-- <img class="img-fluid" :src="copyProduct.imageUrl[0]" alt /> -->
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    v-model="copyProduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      id="category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      v-model="copyProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      id="unit"
                      type="unit"
                      class="form-control"
                      placeholder="請輸入單位"
                      v-model="copyProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                      v-model="copyProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                      v-model="copyProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品描述"
                    v-model="copyProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    id="description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入說明內容"
                    v-model="copyProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      v-model="copyProduct.enabled"
                    />
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- 圖片上傳功能-->
            <!-- <div class="row">
                                <div class="col-md-4">
                                    <img :src="filePath" alt="" class="img-fluid">
                                </div>
                                <div class="col-md-8">
                                    <input type="file" id="file" class="form-control" @change="uploadFile">
                                </div>
            </div>-->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="delProductModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ copyProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 分頁元件 -->
    <page-component :pages="pagination" @changepage="getProduct"></page-component>
  </div>
</template>

<script>
/* global $ */
import Loading from 'vue-loading-overlay'
import pageComponent from '@/components/Pagination.vue'

export default {
  components: {
    Loading,
    pageComponent
  },
  props: ['token'],
  data () {
    return {
      products: [],
      copyProduct: {
        imageUrl: []
      },
      pagination: {},
      filePath: '',
      isLoading: false
    }
  },
  created () {
    const vm = this
    // 取得 token 的 cookies（注意取得的時間點）
    // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    // vm.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    vm.getProduct()
  },
  methods: {
    // 決定需要開的 modal
    openModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.copyProduct = {
            imageUrl: []
          }
          $('#productModal').modal('show')
          break
        case 'update':
          this.copyProduct = Object.assign({}, item)
          $('#productModal').modal('show')
          break
        case 'delete':
          $('#delProductModal').modal('show')
          this.copyProduct = Object.assign({}, item)
          break
      }
    },
    // 取得產品資料
    getProduct (page = 1) {
      const vm = this
      vm.isLoading = true
      // api 路徑
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      // 連接 api
      vm.axios
        .get(url)
        .then(function (response) {
          // 把 api 的 pagination 的資料帶回來
          vm.pagination = response.data.meta.pagination
          // 把所有產品撈取回來
          vm.products = response.data.data
          vm.isLoading = false
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    // 更新品項
    updateProduct () {
      const vm = this
      vm.isLoading = true

      // 判斷當前品項是否已經存在
      if (vm.copyProduct.id) {
        // 若有存在，則找出在 products 陣列內的位置
        vm.products.forEach(function (item, i) {
          if (item.id === vm.copyProduct.id) {
            vm.products[i] = vm.copyProduct
          }
        })

        // token 處理
        vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

        // api url , id 使用 copyProduct 的 id
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${vm.copyProduct.id}`

        // 使用 patch 更新產品資訊
        vm.axios.patch(url, vm.copyProduct)
          .then(function (response) {
            console.log(response)
            vm.isLoading = false
          })
          .catch(function (err) {
            console.log(err)
          })
      } else {
        // 若沒有存在，則給它一個新的 id 並 push 到 products 內
        vm.copyProduct.id = new Date().getTime()

        // token 處理
        vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

        // api url
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product`

        // 使用 post 方法新增品項
        vm.axios.post(url, vm.copyProduct)
          .then(function (res) {
            console.log(res)
            // push 到 products 內
            vm.products.push(vm.copyProduct)
            // 清空 copyProduct
            vm.copyProduct = {
              imageUrl: []
            }
            vm.isLoading = false
            vm.getProduct()
          })
          .catch(function (err) {
            console.log(err)
          })
      }

      // modal 關掉
      $('#productModal').modal('hide')
    },
    // 刪除品項
    delProduct () {
      const vm = this

      // 找出要刪除的品項在 products 陣列內的索引位置
      let key = ''
      vm.products.forEach(function (item, index) {
        if (vm.copyProduct.id === item.id) {
          key = index
        }
      })

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      // api url , id 使用 copyProduct 的 id
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${vm.copyProduct.id}`

      vm.axios.delete(url).then(function (res) {
        console.log(res)
      })

      // products 陣列內刪除
      vm.products.splice(key, 1)

      // 清空 copyProduct
      vm.copyProduct = {
        imageUrl: []
      }

      // modal 關掉
      $('#delProductModal').modal('hide')
    },
    // 圖片上傳測試
    uploadFile () {
      const vm = this

      // api 路徑
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`

      // 取得 DOM 元素
      const fileImg = document.querySelector('#file').files[0]
      // console.dir(file);

      // 轉成 formData
      const formData = new FormData()
      formData.append('file', fileImg)

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      // ajax 處理，使用 post，並宣告使用 formData 格式
      vm.axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function (res) {
          console.log(res)
          // vm.filePath = res.data.data.path;
          vm.copyProduct.imageUrl.push(res.data.data.path)
        })
    }
  }
}
</script>
