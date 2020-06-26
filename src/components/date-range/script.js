import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
})
export default class DateRange extends Vue {
  options = {
    shortcuts: [
      {
        text: "1周",
        value() {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          return [start, end];
        }
      },
      {
        text: "1个月",
        value() {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          return [start, end];
        }
      },
      {
        text: "3个月",
        value() {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          return [start, end];
        }
      }
    ]
  };
}
