<template>
  <div class="product mt-4">
    <Loading v-model:active="isLoading"/>
    <div class="text-end">
      <button type="button" class="btn btn-dark btn-hover rounded-0" @click="openModal(true)">建立新產品</button>
    </div>
    <div class="table-responsive-lg mt-4">
      <table class="table table-striped lh-lg">
        <thead class="table-dark">
          <tr class="table-nowrap">
            <th width="200" class="text-center">分類</th>
            <th class="text-center text-md-start">產品名稱</th>
            <th width="150" class="text-end">原價</th>
            <th width="150" class="text-end">售價</th>
            <th width="140" class="text-center">是否啟用</th>
            <th width="200" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-nowrap" v-for="(item, key) in products" :key="key">
            <td class="text-center">{{ item.category }}</td>
            <td class="text-center text-md-start">{{ item.title }}</td>
            <td class="text-end">
              NT$ {{ $filters.currency(item.origin_price) }} 元
            </td>
            <td class="text-end">
              NT$ {{ $filters.currency(item.price) }} 元
            </td>
            <td class="text-center">
              <span v-if="item.is_enabled" class="text-strong">啟用</span>
              <span v-else class="text-muted">未啟用</span>
            </td>
            <td class="text-center">
              <button
                type="button"
                class="btn btn-dark btn-hover rounded-0 me-2"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-dark btn-hover rounded-0"
                @click="openDelModal(item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 分頁 -->
      <Pagination :pages="pagination" @emit-pages="getProducts"/>
    </div>
    <!-- Modal -->
    <!-- 新增、修改 -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="productModal">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                </div>
                <div class="form-group mt-3 mb-3">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img class="img-fluid" alt="商品照片" :src="tempProduct.imageUrl" v-if="tempProduct.imageUrl">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題" v-model="tempProduct.title">
                </div>
                <div class="row mt-3">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model="tempProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model="tempProduct.unit">
                  </div>
                </div>
                <div class="row mt-3 mb-4">
                  <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price"
                      placeholder="請輸入原價" v-model.number="tempProduct.origin_price">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price"
                      placeholder="請輸入售價" v-model.number="tempProduct.price">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group mt-3">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group mt-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1"
                      :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark btn-hover rounded-0" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- DelProductModal -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="delModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-strong">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark btn-hover rounded-0" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark btn-hover rounded-0" @click="delProdict">確認刪除</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import Modal from 'bootstrap/js/dist/modal.js'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      },
      productModal: '',
      delModal: ''
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.products = response.data.products
          this.pagination = response.data.pagination
          this.isLoading = false
        }
      })
    },
    updateProduct () {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'success' })
          this.productModal.hide()
          this.getProducts(this.pagination.current_page)
        } else {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
        }
      })
    },
    uploadFile () {
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`
      this.status.fileUploading = true
      this.$http.post(api, formData).then((response) => {
        if (response.data.success) {
          this.status.fileUploading = false
          this.tempProduct.imageUrl = response.data.imageUrl
        } else {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
        }
      })
    },
    delProdict () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
          this.delModal.hide()
          this.getProducts()
        }
      })
      this.tempProduct = {}
    },
    openModal (isNew, item) {
      if (isNew) {
        this.isNew = true
        this.tempProduct = {}
      } else {
        this.isNew = false
        this.tempProduct = { ...item }
      }
      this.productModal.show()
    },
    openDelModal (item) {
      this.tempProduct = item
      this.delModal.show()
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    this.productModal = new Modal(this.$refs.productModal)
    this.delModal = new Modal(this.$refs.delModal)
  }
}
</script>
