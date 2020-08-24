<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="text-right mt-4" style="padding-right: 15px;">
      <button type="button" class="btn btn-primary" @click="createImg">新增圖片</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <td>#</td>
          <td>圖片縮圖</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in storages" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>
            <img :src="item.path" alt width="100px" class="img-fluid" />
          </td>
          <td>
            <button class="btn btn-outline-danger" @click="openModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- del modal -->
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
          <div class="modal-body">是否刪除該筆資料(刪除後將無法恢復)。</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delImg">確認刪除</button>
          </div>
        </div>
      </div>
    </div>

    <!-- upload Modal -->
    <div
      class="modal fade"
      id="uploadModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title w-100 text-center" id="uploadModal">圖片上傳</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="img-fluid" alt :src="filePath">
            <div class="form-group">
              <label for="customFile">或 上傳圖片</label>
              <input type="file" id="file" class="form-control" @change="uploadFile">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="doneUpload">確認</button>
          </div>
        </div>
      </div>
    </div>

    <page-component :pages="pagination" @changepage="getImgStorage"></page-component>
  </div>
</template>

<script>
/* global $ */
import pageComponent from '@/components/Pagination.vue'
import Loading from 'vue-loading-overlay'

export default {
  components: {
    pageComponent,
    Loading
  },
  props: ['token'],
  data () {
    return {
      storages: [],
      pagination: {},
      isLoading: true,
      copyPrdouct: {},
      filePath: ''
    }
  },
  created () {
    const vm = this
    vm.getImgStorage()
  },
  methods: {
    getImgStorage (page = 1) {
      // GET api/{uuid}/admin/storage
      const vm = this

      // token 處理
      vm.axios.defaults.headers.common.Authorization = `Bearer ${vm.token}`

      // 取得 api
      vm.axios
        .get(
          `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage?page=${page}`
        )
        .then(res => {
          console.log(res)
          vm.storages = res.data.data
          vm.pagination = res.data.meta.pagination
          console.log(vm.pagination)
          vm.isLoading = false
        })
        .catch(err => {
          console.log(err.response)
          vm.isLoading = false
        })
    },
    openModal (item) {
      const vm = this

      $('#delProductModal').modal('show')

      vm.copyPrdouct = { ...item }
    },
    // 打開圖片上傳 modal
    createImg () {
      $('#uploadModal').modal('show')
    },
    // 新增圖片 圖片上傳
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
          vm.filePath = res.data.data.path
          // vm.copyProduct.imageUrl.push(res.data.data.path)
        })
    },
    // 完成上傳
    doneUpload () {
      const vm = this
      vm.filePath = ''
      vm.getImgStorage()
    },
    // 刪除圖片
    delImg () {
      const vm = this
      console.log(vm.copyPrdouct.id)
      vm.isLoading = true
      // DELETE api/{uuid}/admin/storage/{id}

      vm.axios
        .delete(
          `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${vm.copyPrdouct.id}`
        )
        .then(res => {
          console.log(res)
          vm.isLoading = false
          $('#delProductModal').modal('hide')
          vm.getImgStorage()
        })
        .catch(err => {
          vm.isLoading = false
          console.log(err)
        })
    }
  }
}
</script>
