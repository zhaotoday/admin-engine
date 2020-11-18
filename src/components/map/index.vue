<template>
  <Modal width="730" v-model="modal" title="选择坐标点" @on-ok="select">
    <div ref="map" style="width: 700px; height: 450px;"></div>
  </Modal>
</template>

<script>
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class Map extends Vue {
  modal = false;

  latLng = {
    lat: 0,
    lng: 0
  };

  show() {
    this.modal = true;
  }

  create({ lat = 25.86391945270875, lng = 118.93867492675781 } = {}) {
    this.latLng = { lat, lng };

    const center = new qq.maps.LatLng(lat, lng);
    const map = new qq.maps.Map(this.$refs.map, {
      center: center,
      zoom: lat === 26.08 ? 13 : 18
    });

    let initMarker = new qq.maps.Marker({
      position: new qq.maps.LatLng(lat, lng),
      draggable: true,
      map
    });

    qq.maps.event.addListener(initMarker, "dragend", event => {
      this.latLng = event.latLng;
    });

    qq.maps.event.addListener(map, "click", event => {
      this.latLng = event.latLng;

      initMarker.setMap(null);

      let marker = new qq.maps.Marker({
        position: event.latLng,
        draggable: true,
        map
      });

      qq.maps.event.addListener(map, "click", () => {
        marker.setMap(null);
      });

      qq.maps.event.addListener(marker, "dragend", event => {
        this.latLng = event.latLng;
      });
    });
  }

  @Emit()
  select() {
    return this.latLng;
  }
}
</script>
