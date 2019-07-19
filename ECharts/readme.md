# Echarts 基本使用
```
1.导入ECharts脚本库
2.实例化ECharts对象并绑定图表容器
3.配置图表选项
4.显示图表
```

# 标题组件
* 显示图表的标题
* 设置标题内容和样式
* 通过title属性配置

### 标题组件-常用配置
show : 是否显示标题组件
text : 主标题文本,支持使用\n换行
subtext : 副标题文本,支持使用\n换号
link : 主标题文本超链接
testStyle : 标题文本样式
subtextStyle : 副标题文本样式
left,right,top,bottom : 标题position
borderWidth,borderRadius : 标题边框样式

# 图例组件
* 图例组件展现了不同系列的标记,颜色和名字
* 可以通过点击图例控制哪些系列不显示
* 通过legend属性配置

### 图例组件-常用配置
show : 是否显示图例
itemGao,itemWidth,itemHeight : 图例间距,宽和高
textStyle : 图例文本样式
data : 图例的数据数组
left,right,top,bottom : 图片position
borderColor,borderWidth,borderRadius : 图例边框样式

# 工具栏组件
* 对生成图表的辅助操作
* 导出图片
* 数据视图
* 动态类型切换
* 动态区域缩放
* 重置图表

### 工具栏组件-常用配置
* show : 是否显示工具栏
* feature : 工具栏配置
* saveAsImage : 保存为图片
* restore : 还原配置项
* dataView : 数据视图工具,可以展现当前图表所用的数据,编辑后可以动态更新
* dataZoom : 数据区域缩放,目前只支持直角坐标系的缩放
* magicType : 动态图表类型切换

# 提示框组件
* 提示框是根据用户操作,给出相应的提示信息,默认并不显示
### 提示框位置
* 全局,即tooltip
* 坐标系中,即grid,tooltip,polar.tooltip,single.tooltip
* 系列中,即series.data.tooltip
* 数据项中,即series.data.tooltip

### 提示框组件-常用配置
show : 是否显示提示框
trigger : 触发类型:item,axis,none
axisPointer : 坐标轴指示器配置项
showContent : 是否显示提示框浮层
showDelav和hideDelay : 浮层显示或隐藏的延迟
position : 提示框浮层的位置

# 数据源相关组件
* 数据源主要用来设置图表显示的数据
* 特定数据的标记
* 使用series属性设置
* 注:不同图表类型,设置项有所不同

### 数据源相关组件-常用配置
type : 图表类型,如bar,pie,line等
data : 数据源,通常为数组类型
markPoint : 标记点
markLine : 标记线

# 折线图常用配置
* 坐标轴配置
* 数据项配置
* 外观样式配置

### 折线图-坐标轴配置
type : 坐标轴类型
name : 坐标轴名称
nameLocation : 坐标轴名称显示位置
nameTextStyle : 坐标轴名称的文字样式
boundaryGap : 坐标轴两边留白
axisline : 坐标轴线相关设置
axisTick : 坐标轴刻度相关设置
splitLine : 坐标轴在grid区域中的分割线(在网格中竖立的线)
axisLabel : 坐标轴刻度标签的相关设置
data : 类目数据
max : 坐标轴刻度最大值
min : 坐标轴刻度最小值
interval : 强制设置坐标轴分割间隙

# 柱形图特点
* 柱形图又称条形图,直方图,是以宽度相等的条形高度或长度的差异来显示统计指标数值多少或大小的一种图形
* 柱形图用于显示一段时间内的数据直接的比较情况
* 通过设置series的type属性为bar来制作柱形图

### 展现类型
* 柱形图
* 条形图
* 堆积图

# 柱形图常用配置
* 坐标轴配置
* 数据项配置
* 外观样式配置

# 饼形图特点
* 饼形图主要用于表现不同类目的数据在总和中的占比,每个的弧度标识数据数量的比例
* 没有坐标系
* 通过设置series的type属性为pie来制作饼形图

### 饼形图常用配置项
type : 必须为pie
name : 系列名称,用于tooltip的显示
radius : 饼圆的半径,数组的第一项是内半径,第二项是外半径
center : 饼圆的中心(圆心)坐标,数组的第一项是横坐标,第二项是纵坐标
data : 系列中的数据内容数组,饼形图的结构为{name:'',value:''}








