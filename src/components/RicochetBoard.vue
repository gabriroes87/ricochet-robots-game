<script>
import star_green from "@/assets/images/star_green.png";
import star_blue from "@/assets/images/star_blue.png";
import star_red from "@/assets/images/star_red.png";
import star_yellow from "@/assets/images/star_yellow.png";
export default {
  name: "RicochetBoard",
  props: {},
  data() {
    return {
      content_slots: [
        {
          img: "../../assets/images/colors.png",
          x: 4,
          y: 2,
          right: false,
          bottom: false,
          top: true,
          left: true,
        },
        {
          img: star_blue,
          x: 2,
          y: 7,
          right: true,
          bottom: true,
          top: false,
          left: false,
        },
        {
          img: star_green,
          x: 2,
          y: 2,
          right: false,
          bottom: true,
          top: false,
          left: true,
        },
        {
          img: star_red,
          x: 1,
          y: 4,
          right: true,
          bottom: false,
          top: true,
          left: false,
        },
        {
          img: star_yellow,
          x: 1,
          y: 5,
          right: false,
          bottom: false,
          top: true,
          left: true,
        },
        {
          img: "../../assets/images/star_green.png",
          x: 1,
          y: 6,
          right: true,
          bottom: true,
          top: false,
          left: false,
        },
        {
          img: "../../assets/images/mooon_blue.png",
          x: 1,
          y: 7,
          right: false,
          bottom: true,
          top: false,
          left: true,
        },
        {
          img: "../../assets/images/moon_yellow.png",
          x: 2,
          y: 1,
          right: true,
          bottom: false,
          top: true,
          left: false,
        },
        {
          img: "../../assets/images/../assets/images/moon_red.png",
          x: 2,
          y: 2,
          right: false,
          bottom: true,
          top: false,
          left: true,
        },
        {
          img: "",
          x: 4,
          y: 4,
          right: false,
          bottom: false,
          top: true,
          left: true,
        },
        {
          img: "",
          x: 4,
          y: 5,
          right: true,
          bottom: false,
          top: true,
          left: false,
        },
        {
          img: "",
          x: 5,
          y: 4,
          right: false,
          bottom: true,
          top: false,
          left: true,
        },
        {
          img: "",
          x: 5,
          y: 5,
          right: true,
          bottom: true,
          top: false,
          left: false,
        },
      ],
    };
  },
  methods: {
    showMarkers(x, y) {
      let slot = this.content_slots.filter((element) => {
        return element.x == x && element.y == y;
      });
      if (slot.length > 0) {
        return this.slotStyle(slot[0]);
      }
      return "";
    },
    slotStyle(slot) {
      let border = "";
      if (slot.right) {
        border += `border-right: 2px solid black; `;
      }
      if (slot.top) {
        border += `border-top: 2px solid black; `;
      }
      if (slot.bottom) {
        border += `border-bottom: 2px solid black; `;
      }
      if (slot.left) {
        border += `border-left: 2px solid black; `;
      }

      if (
        (slot.x == 4 && slot.y == 4) ||
        (slot.x == 4 && slot.y == 5) ||
        (slot.x == 5 && slot.y == 4) ||
        (slot.x == 5 && slot.y == 5)
      ) {
        border += `background-color: black; `;
      }
      return border;
    },
    slotImg(x, y) {
      let slot = this.content_slots.filter((element) => {
        return element.x == x && element.y == y;
      });
      if (slot.length > 0) {
        return slot[0].img;
      }
      return "";
    },
  },
};
</script>

<template>
  <div class="board">
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_1_' + i"
        :style="showMarkers(1, i)"
      >
        <img
          v-show="slotImg(1, i).length > 0"
          :src="slotImg(1, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_2_' + i"
        :style="showMarkers(2, i)"
      >
        <img
          v-show="slotImg(2, i).length > 0"
          :src="slotImg(2, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_3_' + i"
        :style="showMarkers(3, i)"
      >
        <img
          v-show="slotImg(3, i).length > 0"
          :src="slotImg(3, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_4_' + i"
        :style="showMarkers(4, i)"
      >
        <img
          v-show="slotImg(4, i).length > 0"
          :src="slotImg(4, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_5_' + i"
        :style="showMarkers(5, i)"
      >
        <img
          v-show="slotImg(5, i).length > 0"
          :src="slotImg(5, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_6_' + i"
        :style="showMarkers(6, i)"
      >
        <img
          v-show="slotImg(6, i).length > 0"
          :src="slotImg(6, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_7_' + i"
        :style="showMarkers(7, i)"
      >
        <img
          v-show="slotImg(7, i).length > 0"
          :src="slotImg(7, i)"
          alt="name"
        />
      </div>
    </div>
    <div class="colums is-flex">
      <div
        v-for="i in 8"
        class="column slot_style is-flex is-justify-content-center is-align-content-center"
        :key="'line_8_' + i"
        :style="showMarkers(8, i)"
      >
        <img
          v-show="slotImg(8, i).length > 0"
          :src="slotImg(8, i)"
          alt="name"
        />
      </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.board {
  max-width: 800px;
  width: auto;
  height: auto;
  padding: 60px;
  margin: auto;

  .slot_style {
    height: 80px;
    width: 80px;
    background: lightgray;
    border: 0.5px solid black;

    img {
      margin: auto;
    }
  }
}
</style>
