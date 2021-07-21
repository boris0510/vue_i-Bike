<template>
  <div class="dashboard">
    <header
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fw-bold" href="#/admin/product">
        <i class="fas fa-desktop pe-2"></i>
        後台管理
      </a>
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav px-3 d-none d-md-block">
        <li class="nav-item text-nowrap">
          <button type="button" class="btn btn-dark btn-hover rounded-0 fw-bold" @click="signout">登出</button>
        </li>
      </ul>
    </header>

    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
        >
          <div class="position-sticky pt-4">
            <ul class="nav flex-column">
              <li class="nav-item ps-4 text-primary fw-bold fs-4">
                <i class="fas fa-users pe-2"></i>
                管理員
              </li>
              <li class="nav-item ps-5 pt-2">
                <a class="nav-link text-light fw-bold a-hover" href="#/admin/product">
                  <i class="fas fa-gift pe-2"></i>
                  產品列表
                </a>
              </li>
              <li class="nav-item ps-5 pt-2">
                <a class="nav-link text-light fw-bold a-hover" href="#/admin/orders">
                  <i class="fas fa-list-alt pe-2"></i>
                  訂單列表
                </a>
              </li>
              <li class="nav-item ps-5 pt-2">
                <a class="nav-link text-light fw-bold a-hover" href="#/admin/coupons">
                  <i class="fas fa-balance-scale-left pe-2"></i>
                  優惠碼
                </a>
              </li>
              <li class="nav-item ps-5 pt-2">
                <a class="nav-link text-light fw-bold a-hover" href="#/">
                  <i class="fas fa-home pe-2"></i>
                  回首頁
                </a>
              </li>
            </ul>
            <ul class="navbar-nav px-4 mt-2 mb-3 d-md-none d-md-block">
              <li class="nav-item text-nowrap">
                <a class="nav-link text-light fw-bold a-hover fs-4" href="#" @click="signout">登出</a>
              </li>
            </ul>
          </div>
        </nav>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <RouterView/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    signout () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api, this.user).then((response) => {
        if (response.data.success) {
          this.emitter.emit('message:push', { message: response.data.message, status: 'danger' })
          this.$router.push('/')
        }
      })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
  }
}
</script>
