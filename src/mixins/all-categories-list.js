import { Component, Vue } from "vue-property-decorator";
import Model from "../models/admin/categories";

@Component
export default class AllCategoriesListMixin extends Vue {
  allCategoriesList = {};

  async created() {
    this.allCategoriesList = await this.getAllCategoriesList();
  }

  async getAllCategoriesList() {
    const { data } = await new Model().GET({
      query: { offset: 0 }
    });

    return data;
  }

  getCategoryNameById(id, hasParent = false) {
    const item = this.$helpers.getItemById(this.allCategoriesList.items, id);

    return item && item.name
      ? hasParent
        ? `${this.getCategoryNameById(item.parentId)} - ${item.name}`
        : item.name
      : "";
  }
}
