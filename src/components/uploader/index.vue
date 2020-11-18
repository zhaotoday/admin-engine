<template>
  <Upload
    ref="upload"
    :format="format"
    :max-size="maxSize"
    :default-file-list="defaultFileList"
    :headers="$auth.getHeaders()"
    :action="`${$consts.ApiUrl}/files/actions/upload`"
    :on-format-error="handleFormatError"
    :on-exceeded-size="handleMaxSize"
    :on-success="handleSuccess"
    :on-remove="handleRemove"
  >
    <Button icon="ios-cloud-upload-outline">
      {{ placeholder }}
    </Button>
  </Upload>
</template>

<script src="./script.js"></script>
