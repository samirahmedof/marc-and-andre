<template>
  <footer>
    <div class="container-fluid">
      <div class="row align-items-center text-center justify-content-between">
        <div class="col-4" v-if="$store.getters.getIsLogged">
          <p>Buyers</p>
        </div>
        <div class="col-4">
          <div class="footerMenu">
            <ul>
              <li>
                <a href="#" title="Personal Data Processing Rules">Personal Data Processing Rules</a>
              </li>
              <li v-if="$store.getters.getIsLogged">
                <a href="#" title="Delivery and payment">Delivery and payment</a>
              </li>
              <li v-if="$store.getters.getIsLogged">
                <a href="#" title="About">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-4">
          <div class="phone">
            <span>+994 55 987 65 43</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>