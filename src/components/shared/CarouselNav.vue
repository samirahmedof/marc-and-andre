<template>
  <div class="col-4" ref="col">
    <div class="imgContainer" :class="{'active': activeIndex==index}" @click="clickedImage">
      <img :src="item.src" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "index", "activeIndex"],
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    clickedImage() {
      this.$emit("clickedImageIndex", this.index);
    },
  },
};
</script>
