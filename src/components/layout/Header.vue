<template>
  <header>
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-2">
          <div class="logo">
            <img src="src/assets/img/logo.png" alt="logo" />
          </div>
        </div>
        <div class="offset-1 col-4" v-if="$store.getters.getIsLogged">
          <div class="searching">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  <button class="btn btn-input">Search</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="offset-1 col-4" v-if="$store.getters.getIsLogged">
          <div class="row">
            <div class="col-6">
              <div class="cart text-center">
                <div class="icon">
                  <a href="#" title="cart">
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </div>
                <p>Sum 13$</p>
                <p>Total 20</p>
              </div>
            </div>
            <div class="col-6">
              <div class="user">
                <div class="profile">
                  <img src="src/assets/img/empty.png" alt="user" />
                  <div class="userPopup">
                    <ul>
                      <li>
                        <a href="#">Profile</a>
                      </li>
                      <li>
                        <a href="#" title="exit" @click.prevent="getLogout">Exit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    getLogout() {
      this.$store.commit("changeLogged");
      this.$router.push("/login");
    },
  },
};
</script>