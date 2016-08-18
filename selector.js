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
    for (i in DATA) {
        if (DATA[i].pid == 0) {
            province_container.append('<option value="' + DATA[i].id + '">' + DATA[i].name + '</option>');
        }
    }

    // 省份切换事件
    $(CONFIG.province).on('change', function () {
        var province_id = $(this).val();
        // 将市、区初始化
        city_container.html('').append('<option value="">-- 请选择 --</option>');
        area_container.html('').append('<option value="">-- 请选择 --</option>');
        for (i in DATA) {
            if (DATA[i].pid == province_id) {
                city_container.append('<option value="' + DATA[i].id + '">' + DATA[i].name + '</option>');
            }
        }
    });

    // 城市切换事件
    $(CONFIG.city).on('change', function () {
        var city_id = $(this).val();
        // 将区初始化
        area_container.html('').append('<option value="">-- 请选择 --</option>');
        for (i in DATA) {
            if (DATA[i].pid == city_id) {
                area_container.append('<option value="' + DATA[i].id + '">' + DATA[i].name + '</option>');
            }
        }
    });
}