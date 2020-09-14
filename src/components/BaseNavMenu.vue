<template>
<div>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu>
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>

</div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
