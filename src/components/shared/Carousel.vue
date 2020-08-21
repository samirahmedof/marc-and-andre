<template>
  <div class="productCarousel">
    <div class="mainImage text-center">
      <img :src="media[activeIndex].src" />
    </div>
    <div class="carouselNav d-flex align-items-center mt-3">
      <a href="#" class="btn btn-pr mr-2" @click.prevent="slidePrev">
        <i class="fas fa-angle-left"></i>
      </a>
      <div class="navRow">
        <div class="slide" :style="{transform: translatePx}">
          <div class="row" ref="col">
            <CarouselNav
              v-for="(item,index) in media"
              :key="item.id"
              :item="item"
              :index="index"
              :activeIndex="activeIndex"
              @clickedImageIndex="clickedImageNav($event)"
            />
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-pr ml-2" @click.prevent="slideNext">
        <i class="fas fa-angle-right"></i>
      </a>
    </div>
  </div>
</template>
<script>
import CarouselNav from "./CarouselNav";
export default {
  props: ["media"],
  data() {
    return {
      px: 0,
      colWidth: 0,
      rowWidth: 0,
      position: 1,
      activeIndex: 0,
    };
  },
  computed: {
    translatePx() {
      return `translateX(${this.px}px)`;
    },
  },
  methods: {
    slidePrev() {
      if (this.position != 1) {
        this.px += this.colWidth;
        this.position--;
      }
      if (this.activeIndex != 0) {
        this.activeIndex--;
      }
    },
    slideNext() {
      if (this.media.length - this.position != 2) {
        this.px -= this.colWidth;
        this.position++;
      }
      if (this.activeIndex != this.media.length - 1) {
        this.activeIndex++;
      }
    },
    setWidths(event) {
      this.rowWidth = this.$refs.col.clientWidth;
      this.colWidth = this.rowWidth / 3;
      this.px = -((this.position - 1) * this.colWidth);
    },
    clickedImageNav(e) {
      var lng = Math.abs(e - this.activeIndex);
      if (e > this.activeIndex) {
        for (let i = 0; i < lng; i++) {
          this.slideNext();
        }
      } else {
        for (let i = 0; i < lng; i++) {
          this.slidePrev();
        }
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.setWidths);
    setTimeout(() => {
      this.setWidths();
    }, 1000);
  },
  components: {
    CarouselNav,
  },
};
</script>
