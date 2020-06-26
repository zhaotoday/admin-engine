import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

@Component({
  methods: mapActions({
    resetState: "resetState"
  })
})
export default class GlobalMixin extends Vue {
  get user() {
    return this.$auth.get()["user"] || {};
  }

  getSchoolId() {
    return this.user.school ? this.user.school.id : 0;
  }

  isPlatform() {
    return this.user.school && this.user.school.id === 1;
  }

  getImageUrl({ id, width, height }) {
    let sizeParams = "";

    if (width && height) {
      sizeParams = `?imageView2/1/w/${width}/h/${height}/q/100`;
    } else if (width) {
      sizeParams = `?imageView2/2/w/${width}/q/100`;
    } else if (height) {
      sizeParams = `?imageView2/2/h/${height}/q/100`;
    }

    return `${this.$consts.CdnUrl}/${id}${sizeParams}`;
  }

  page(array, size) {
    const length = array.length;
    const newArray = [];
    const i = Math.ceil(length / size);

    let j = 0;

    while (j < i) {
      const spare = length - j * size >= size ? size : length - j * size;
      const temp = array.slice(j * size, j * size + spare);

      newArray.push(temp);
      j++;
    }

    return newArray;
  }
}
