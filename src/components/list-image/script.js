import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ListImage extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  src;
}
