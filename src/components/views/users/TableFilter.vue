<template>
  <th>
    <div class="tableFilter d-flex align-items-center">
      <select class="form-control" v-model="selectedFilter">
        <option value="0" disabled>Select</option>
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
          <input type="text" class="form-control" v-model="search" />
          <i class="fas fa-times" @click="clearSearch"></i>
        </div>
      </transition>
    </div>
  </th>
</template>
<script>
export default {
  props: ["thead", "index", "filteredIndex"],
  data() {
    return {
      showSearch: false,
      selectedFilter: "0",
      search: "",
    };
  },
  methods: {
    clearSearch() {
      this.showSearch = false;
      this.search = "";
    },
  },
  watch: {
    selectedFilter(val) {
      if (val != 0) {
        this.$emit("filtered", { index: this.index, value: val });
      }
    },
    filteredIndex(val) {
      if (val != this.index) {
        this.selectedFilter = "0";
      }
    },
    search(val) {
      this.$emit("searched", { index: this.index, value: val });
    },
  },
};
</script>