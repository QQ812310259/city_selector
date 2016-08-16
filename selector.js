/**
 * Created by qiaoweizhen on 2016/8/16.
 */

var CONFIG = {
    province: '#province',
    city: "#city",
    area: "#area"
};

function selector(userConfig) {

    //加载用户配置
    if (userConfig) {
        CONFIG = userConfig;
    }

    // 获取省市区对象
    var province_container = $(CONFIG.province);
    var city_container = $(CONFIG.city);
    var area_container = $(CONFIG.area);

    // 初始化省市区
    province_container.html('').append('<option value="">-- 请选择 --</option>');
    city_container.html('').append('<option value="">-- 请选择 --</option>');
    area_container.html('').append('<option value="">-- 请选择 --</option>');

    // 初始化省份列表
    for (province in DATA) {
        province_container.append('<option value="' + province + '">' + province + '</option>');
    }

    // 省份切换事件
    $(CONFIG.province).on('change', function () {
        var cur_province = $(this).val();
        var cities = DATA[cur_province];
        // 将市、区初始化
        city_container.html('').append('<option value="">-- 请选择 --</option>');
        area_container.html('').append('<option value="">-- 请选择 --</option>');
        for (city in cities) {
            city_container.append('<option value="' + city + '">' + city + '</option>');
        }
    });

    // 城市切换事件
    $(CONFIG.city).on('change', function () {
        var cur_province = $(CONFIG.province).val();
        var cur_city = $(this).val();
        var areas = DATA[cur_province][cur_city];
        // 将区初始化
        area_container.html('').append('<option value="">-- 请选择 --</option>');
        for (var i in areas) {
            area_container.append('<option value="' + areas[i] + '">' + areas[i] + '</option>');
        }
    });
}