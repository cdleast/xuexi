<template>
  <div>
    <SystemHeader></SystemHeader>
    <div class="am-cf admin-main">
      <SystemMenu></SystemMenu>
      <router-view></router-view>
    </div>
    <SystemFooter></SystemFooter>
  </div>
</template>

<script>
import SystemHeader from './components/header.vue'
import SystemFooter from './components/footer.vue'
import SystemMenu from './components/menu.vue'
export default {
    components: { SystemHeader, SystemFooter, SystemMenu },
    name: 'app'
}
</script>
<style lang="scss">
@import "./style/style";
@import "../static/amaze/css/amazeui.css";
@import "../static/amaze/css/admin.css";
</style>