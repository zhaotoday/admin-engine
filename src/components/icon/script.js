import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop({
    type: String,
    default: ""
  })
  type;
}
