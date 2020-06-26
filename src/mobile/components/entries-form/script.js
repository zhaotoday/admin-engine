import { Vue, Component } from "vue-property-decorator";
import ListForm from "@/views/entries/list/form";

@Component({
  props: {
    data: {
      required: true
    }
  },
  components: {
    "c-list-form": ListForm
  }
})
export default class EntriesForm extends Vue {
  list = {
    items: []
  };

  handleGetList(data) {
    this.data.items.unshift(data);
  }

  async showListSelect() {
    if (!this.list.items[0]) {
      this.list = await this.getList();
    }
    this.$refs.listSelect.show();
  }

  handleSelect(items) {
    if (items[0]) {
      this.data.items = [...items, ...this.data.items];
    }
  }

  getList() {
    return this.$store.dispatch(`entries/getList`, {
      query: {
        order: [["order", "DESC"]]
      }
    });
  }
}