# city_selector

## 中国省市区选择器

### 引入JS

```
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="data.js"></script>
<script type="text/javascript" src="selector.js"></script>
```

### 配置JS

```
//自定义配置
var config = {
    province: '#province',
    city: '#city',
    area: '#area'
};
//使用城市选择器方法
selector(config);
//初始化
$(function () {
    selector();
});
```

### 使用HTML

```
省：<select id="province"></select>
市：<select id="city"></select>
区：<select id="area"></select>
```