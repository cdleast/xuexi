<template>
    <div class="admin-content">
        <div class="admin-content-body">
            <div class="am-cf am-padding am-padding-bottom-0">
                <div class="am-fl am-cf">
                    <strong class="am-text-primary am-text-lg">收件箱</strong> /
                    <small>Inbox</small>
                </div>
            </div>
            <hr>
            <div class="am-g">
                <div class="am-u-sm-12 am-u-md-6">
                    <div class="am-btn-toolbar">
                        <div class="am-btn-group am-btn-group-xs">
                            <button type="button" class="am-btn am-btn-default" @click="toAdd">
                                <span class="am-icon-plus"></span> 新增
                            </button>
                            <button type="button" class="am-btn am-btn-default" @click="save">
                                <span class="am-icon-save"></span> 保存
                            </button>
                            <button type="button" class="am-btn am-btn-default" @click="verify">
                                <span class="am-icon-archive"></span> 审核
                            </button>
                            <button type="button" class="am-btn am-btn-default" @click="remove">
                                <span class="am-icon-trash-o"></span> 删除
                            </button>
                        </div>
                    </div>
                </div>
                <div class="am-u-sm-12 am-u-md-3">
                    <div class="am-input-group am-input-group-sm">
                        <input type="text" class="am-form-field">
                        <span class="am-input-group-btn">
                            <button class="am-btn am-btn-default" type="button">搜索</button>
                        </span>
                    </div>
                </div>
            </div>
            <!-- admin-content-body end -->
            <div class="am-g" style="margin-top:5px;">
                <div class="am-u-sm-12">
                    <form class="am-form">
                        <table
                            class="am-table am-table-striped am-table-hover table-main am-table-bordered am-table-radius"
                        >
                            <thead>
                                <tr>
                                    <th class="table-check">
                                        <input type="checkbox">
                                    </th>
                                    <th class="table-id">ID</th>
                                    <th class="table-title">标题</th>
                                    <th class="table-type">类别</th>
                                    <th class="table-author am-hide-sm-only">作者</th>
                                    <th class="table-date am-hide-sm-only">修改日期</th>
                                    <th class="table-set">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in tableList">
                                    <td>
                                        <input type="checkbox">
                                    </td>
                                    <td>{{index + 1}}</td>
                                    <td>
                                        <router-link :to="'/Content/' + item.id">{{item.title}}</router-link>
                                    </td>
                                    <td>{{item.tab}}</td>
                                    <td class="am-hide-sm-only">{{item.author.loginname}}</td>
                                    <td class="am-hide-sm-only">{{item.create_at}}</td>
                                    <td>
                                        <div class="am-btn-toolbar">
                                            <div class="am-btn-group am-btn-group-xs">
                                                <button
                                                    class="am-btn am-btn-default am-btn-xs am-text-secondary"
                                                >
                                                    <span class="am-icon-pencil-square-o"></span> 编辑
                                                </button>
                                                <button
                                                    class="am-btn am-btn-default am-btn-xs am-hide-sm-only"
                                                >
                                                    <span class="am-icon-copy"></span> 复制
                                                </button>
                                                <button
                                                    class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"
                                                >
                                                    <span class="am-icon-trash-o"></span> 删除
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="am-cf">
                            共 15 条记录
                            <div class="am-fr">
                                <ul class="am-pagination">
                                    <li class="am-disabled">
                                        <a href="#">?</a>
                                    </li>
                                    <li class="am-active">
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">5</a>
                                    </li>
                                    <li>
                                        <a href="#">?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- am-g end -->
        </div>
    </div>
</template>
<script>
export default {
    name: "Inbox",
    data() {
        return {
            tableList: []
        };
    },
    created() {
        this.initialization();
    },
    mounted() {
        $(".admin-content").css(
            "height",
            document.documentElement.clientHeight - 36 - 50 + "px"
        );
    },
    methods: {
        initialization() {
            this.$api.get("topics", { page: 1, limit: 10 }, r => {
                console.log(r);
                if (r.success) {
                    this.tableList = r.data;
                }
            });
        },
        toAdd() {
            alert("添加");
        },
        save() {
            alert("保存");
        },
        verify() {
            alert("审核");
        },
        remove() {
            alert("删除");
        }
    }
};
</script>
