<template>
<div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
  <div class="am-offcanvas-bar admin-offcanvas-bar">
    <ul class="am-list admin-sidebar-list">
      <li class="admin-parent" v-for="menu in menus"><router-link :to="menu.href">{{menu.name}}</router-link>
        <ul class="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">
           <li v-for="child in menu.childs" v-if="menu.childs"><router-link :to="child.href"><span class="am-icon-check"></span> {{child.name}}<span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span></router-link></li>
         </ul>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default{
    name : "Menu",
    data(){
        return {
            menus:[{
                name:"首页",
                href:"/",
                childs:[]
            },{
                name:"写信",
                href:"/",
                childs:[]
            },{
                name:"收件箱",
                href:"/Inbox",
                childs:[]
            },{
                name:"发件箱",
                href:"/Outbox",
                childs:[]
            },{
                name:"垃圾箱",
                href:"/",
                childs:[]
            },{
                name:"草稿箱",
                href:"/",
                childs:[]
            },{
                name:"其他文件夹",
                href:"/",
                childs:[{
                    name:"已发送邮件",
                    href:"/"
                },{
                    name:"已删除邮件",
                    href:"/"
                }]
            }]
        }
    }
}
</script>