<template>
  <Modal width="730" v-model="modal" title="选择坐标点" @on-ok="select">
    <div ref="map" style="width: 700px; height: 450px;"></div>
  </Modal>
</template>

<script src="./script.js"></script>
