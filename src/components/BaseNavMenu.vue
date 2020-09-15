<template>
<div id="ele_div">
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="1" unique-opened="true" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1">选项1</el-menu-item>
          <el-menu-item index="2">选项2</el-menu-item>
          <el-menu-item index="3">选项3</el-menu-item>
          <el-menu-item index="4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>导航二</span>
          </template>
          <el-menu-item index="1">选项1</el-menu-item>
          <el-menu-item index="2">选项2</el-menu-item>
          <el-menu-item index="3">选项3</el-menu-item>
          <el-menu-item index="4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>导航三</span>
          </template>
          <el-menu-item index="3">选项1</el-menu-item>
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

<style scoped>
#ele_div {
  width: 100%;
  height: 100%;
  position: absolute;
  background: green;
  text-align: left;
}


</style>
