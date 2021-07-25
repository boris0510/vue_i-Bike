<template>
  <footer class="footer bg-dark mt-3 py-4 mt-md-5">
    <div class="container">
      <ul class="list-inline text-center">
        <li class="list-inline-item text-light">
          © Copyright 2021 i-Bike
        </li>
      </ul>
      <ul class="list-inline text-center">
        <li class="list-inline-item text-light">
          個人練習作品，非商業用途
        </li>
      </ul>
      <ul class="list-inline text-center mb-0">
        <li class="list-inline-item">
          <a class="text-light" href="#" @click.prevent="">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="list-inline-item ms-2">
          <a class="text-light" href="#" @click.prevent="">
            <i class="fab fa-facebook-messenger"></i>
          </a>
        </li>
        <li class="list-inline-item ms-2">
          <a class="text-light" href="#" @click.prevent="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="list-inline-item ms-2">
          <a
            class="text-light"
            href="https://github.com/boris0510"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scope>
.footer {
  position: sticky;
  top: 100%;
}
</style>
