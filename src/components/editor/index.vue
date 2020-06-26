<template>
  <div class="c-editor">
    <div ref="editorToolbar" class="c-editor__toolbar"></div>
    <div ref="editorText" class="c-editor__text"></div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import WangEditor from "lr-editor";

@Component({
  props: {
    html: {
      type: String,
      default: ""
    }
  }
})
export default class Editor extends Vue {
  @Watch("html")
  onHtmlChange(newVal, oldVal) {
    if (newVal && !oldVal) {
      this.editor.txt.html(newVal);
    }
  }

  mounted() {
    this.editor = new WangEditor(
      this.$refs.editorToolbar,
      this.$refs.editorText
    );

    this.editor.customConfig.menus = [
      "head",
      "bold",
      "fontSize",
      "italic",
      "underline",
      "strikeThrough",
      "foreColor",
      "backColor",
      "link",
      "list",
      "justify",
      "quote",
      "image",
      "video",
      "table"
    ];

    this.editor.customConfig.zIndex = 0;

    this.editor.customConfig.uploadImgServer = `${this.$consts.ApiUrl}/files/actions/upload`;

    this.editor.customConfig.uploadImgHeaders = this.$auth.getHeaders();

    this.editor.customConfig.uploadFileName = "file";

    this.editor.customConfig.uploadImgHooks = {
      customInsert: (insertImg, result) => {
        const url = this.$helpers.getFileUrlById(result.data.id);
        insertImg(url);
      }
    };

    this.editor.customConfig.onchange = html => {
      this.$emit("change", html);
    };

    this.editor.create();

    this.editor.txt.html(this.html);
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
