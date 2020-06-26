import time from "jt-time";
import consts from "../utils/consts";
import helpers from "../utils/helpers";
import auth from "../utils/auth";
import GlobalMixin from "admin-engine/mixins/global";
import DictsMixin from "../mixins/dicts";
import List, {
  ListHeader,
  ListNavigation,
  ListOperations,
  ListSearch
} from "../components/list";
import CategorySelect from "../components/category-select";
import Uploader from "../components/uploader";
import VideoUploader from "@/components/video-uploader";
import Delete from "../components/delete";
import BulkDelete from "../components/bulk-delete";
import WxUserInfo from "../components/wx-user-info";
import WxUserSelect from "../components/wx-user-select";
import Icon from "../components/icon";
import Dropdown from "../components/dropdown";
import ListImage from "../components/list-image";
import Editor from "../components/editor";
import ProductSelect from "../components/product-select";
import IconSelect from "../components/icon-select";
import EditableComp from "@/components/editable-module";
import Comp from "@/components/comp";
import CompForm from "@/components/comp-form";
import MiniList from "@/components/mini-list";
import ListSelect from "@/components/list-select";
import SchoolWxUserSelect from "@/components/school-wx-user-select";
import DateRange from "@/components/date-range";

// mobile components
import Global from "@/mobile/components/global";
import GlobalForm from "@/mobile/components/global-form";
import Search from "@/mobile/components/search";
import Brands from "@/mobile/components/brands";
import BrandsForm from "@/mobile/components/brands-form";
import Entries from "@/mobile/components/entries";
import Notice from "@/mobile/components/notice";
import Products from "@/mobile/components/products";
import ProductsForm from "@/mobile/components/products-form";
import Shortcuts from "@/mobile/components/shortcuts";
import ShortcutsForm from "@/mobile/components/shortcuts-form";
import Popup from "@/mobile/components/popup";
import Title from "@/mobile/components/title";
import Swiper from "@/mobile/components/swiper";
import SearchForm from "@/mobile/components/search-form";
import NoticeForm from "@/mobile/components/notice-form";
import EntriesForm from "@/mobile/components/entries-form";
import SwiperForm from "@/mobile/components/swiper-form";
import RichText from "@/mobile/components/rich-text";
import RichTextForm from "@/mobile/components/rich-text-form";
import ImageLink from "@/mobile/components/image-link";
import ImageLinkForm from "@/mobile/components/image-link-form";
import LinkSelect from "@/components/link-select";
import ConfirmButton from "@/components/confirm-button";
import OuterProducts from "@/mobile/components/outer-products";
import OuterProductsForm from "@/mobile/components/outer-products-form";
import SchoolSelect from "@/components/school-select";

export default {
  install(Vue) {
    Vue.prototype.$wx = {};
    Vue.prototype.$time = time;
    Vue.prototype.$consts = consts;
    Vue.prototype.$helpers = helpers;
    Vue.prototype.$auth = auth;

    Vue.filter("time", val => time.getTime(val));
    Vue.filter("date", val => time.getDate(val));
    Vue.filter("itemById", (items, id) => helpers.getItemById(items, id));

    Vue.mixin(GlobalMixin);
    Vue.mixin(DictsMixin);

    Vue.component("c-list", List);
    Vue.component("c-list-header", ListHeader);
    Vue.component("c-list-operations", ListOperations);
    Vue.component("c-list-search", ListSearch);
    Vue.component("c-list-navigation", ListNavigation);
    Vue.component("c-category-select", CategorySelect);
    Vue.component("c-uploader", Uploader);
    Vue.component("c-video-uploader", VideoUploader);
    Vue.component("c-delete", Delete);
    Vue.component("c-bulk-delete", BulkDelete);
    Vue.component("c-wx-user-info", WxUserInfo);
    Vue.component("c-wx-user-select", WxUserSelect);
    Vue.component("c-icon", Icon);
    Vue.component("c-dropdown", Dropdown);
    Vue.component("c-list-image", ListImage);
    Vue.component("c-editor", Editor);
    Vue.component("c-product-select", ProductSelect);
    Vue.component("c-icon-select", IconSelect);
    Vue.component("c-comp-form", CompForm);
    Vue.component("c-mini-list", MiniList);
    Vue.component("c-list-select", ListSelect);
    Vue.component("c-link-select", LinkSelect);
    Vue.component("c-confirm-button", ConfirmButton);
    Vue.component("c-school-select", SchoolSelect);
    Vue.component("c-school-wx-user-select", SchoolWxUserSelect);
    Vue.component("c-date-range", DateRange);

    // mobile components
    Vue.component("c-global", Global);
    Vue.component("c-global-form", GlobalForm);
    Vue.component("c-search", Search);
    Vue.component("c-search-form", SearchForm);
    Vue.component("c-brands", Brands);
    Vue.component("c-brands-form", BrandsForm);
    Vue.component("c-entries", Entries);
    Vue.component("c-entries-form", EntriesForm);
    Vue.component("c-notice", Notice);
    Vue.component("c-notice-form", NoticeForm);
    Vue.component("c-products", Products);
    Vue.component("c-products-form", ProductsForm);
    Vue.component("c-shortcuts", Shortcuts);
    Vue.component("c-shortcuts-form", ShortcutsForm);
    Vue.component("c-popup", Popup);
    Vue.component("c-title", Title);
    Vue.component("c-swiper", Swiper);
    Vue.component("c-swiper-form", SwiperForm);
    Vue.component("c-rich-text", RichText);
    Vue.component("c-rich-text-form", RichTextForm);
    Vue.component("c-image-link", ImageLink);
    Vue.component("c-image-link-form", ImageLinkForm);
    Vue.component("c-outer-products", OuterProducts);
    Vue.component("c-outer-products-form", OuterProductsForm);

    Vue.component("c-editable-module", EditableComp);
    Vue.component("c-comp", Comp);
  }
};
