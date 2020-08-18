<template>
  <th>
    <div class="tableFilter d-flex align-items-center">
      <select class="form-control">
        <option value="1">asc</option>
        <option value="2">desc</option>
      </select>
      <div class="search ml-2" v-if="thead.hasSearch">
        <i class="fas fa-search" @click="showSearch=true"></i>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
        mode="out-in"
      >
        <div class="searchInput" v-if="thead.hasSearch" v-show="showSearch">
          <input type="text" class="form-control" />
          <i class="fas fa-times" @click="showSearch=false"></i>
        </div>
      </transition>
    </div>
  </th>
</template>
<script>
export default {
  props: ["thead"],
  data() {
    return {
      showSearch: false,
    };
  },
};
</script>