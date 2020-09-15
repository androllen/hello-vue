<template>
<div id="ele_div">
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="1" unique-opened="true" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>信息收集</span>
          </template>
          <el-menu-item index="1">Cdn 检测</el-menu-item>
          <el-menu-item index="2">有些地址收集</el-menu-item>
          <el-menu-item index="3">端口扫描</el-menu-item>
          <el-menu-item index="4">子域名爆破</el-menu-item>
          <el-menu-item index="5">Waf 检测</el-menu-item>
          <el-menu-item index="6">Web 路径扫描</el-menu-item>
          <el-menu-item index="7">WhoIs 反差</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>专用漏洞</span>
          </template>
          <el-menu-item index="1">Struts2 扫描</el-menu-item>
          <el-menu-item index="2">JBoss 检测</el-menu-item>
          <el-menu-item index="3">网站后台爆破</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>辅助工具</span>
          </template>
          <el-menu-item index="1">字典生成</el-menu-item>
          <el-menu-item index="2">URL 收集</el-menu-item>
          <el-menu-item index="3">MD5 查询</el-menu-item>
          <el-menu-item index="4">密码生成器</el-menu-item>
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
  height: auto;
  position: absolute;
  background: green;
  text-align: left;
}


</style>
