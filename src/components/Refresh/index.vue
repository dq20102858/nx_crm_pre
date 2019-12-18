<template>
    <el-button size="small" type="warning"  style="float:right;" @click="refresh()">刷新</el-button>
</template>

<script>

export default {
  name: 'Refresh',
  inject: ['reload'],
  data() {
    return {
      left: 0
    }
  },
  methods: {
    refresh() {
        this.reload();
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
