import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ConfirmButton extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  disabled;

  @Prop({
    type: String,
    default: ""
  })
  buttonText;

  @Prop({
    type: String,
    default: ""
  })
  confirmText;
}
