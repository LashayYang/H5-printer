var provices = [
  ["南昌市", "抚州市", "赣州市", "吉安市"],
  ["广州市", "深圳市", "汕头市", "惠州市"],
  ["杭州市", "苏州市", "宁波市", "温州市"],
  ["福州市", "龙岩市", "厦门市", "泉州市"]
];

var data;
var productor_list = [];
var production_num_list = [];
// var data = $.getJSON('./save.json');

// 读取json数据
$.getJSON("./json/save.json", function(json){
  				// console.log(json);
				data=json;
				// console.log(data);
				//调用获取所有厂家信息函数
				getProductor(data);
});

//获取所有厂家信息函数
function getProductor(data){
	$.each(data, function (infoIndex, info){
			// console.log(info.厂商名称);
			var productor = info.厂商名称;
			var production_num = info.产品型号;
			productor_list.push(productor);
			// console.log(productor + production_num);
	})
	//调用数组去重函数
	productor_list = removeDuplicatedItem3(productor_list);
	//输出所有厂家名称列表
	// console.log(productor_list);
	for (var i = 0, j = productor_list.length; i < j; i++) {
		$("#productor_list").append("<option>" + productor_list[i] + "</option>");
	}
}

// 数组去重函数
function removeDuplicatedItem3(ar) {
    var ret = [];
    ar.forEach(function(e, i, ar) {
        if (ar.indexOf(e) === i) {
            ret.push(e);
        }
    });
    return ret;
}

//产品型号更新函数
changePr = function (value) {
	debugger
	$("#production_num_list").empty();
		$.each(data, function (infoIndex, info){
			if(value == info.厂商名称){
				$("#production_num_list").append("<option>" + info.产品型号 + "</option>");
			}
			// console.log(productor + production_num);
		})
};

//结果查询函数
function search(){
	var productor_value = $("#productor").val();
	var production_num_value = $("#production_num").val();
	console.log(productor_value + production_num_value);
	// console.log(structure.value + result.value);
	$.each(data, function (infoIndex, info){
		if((productor_value == info.厂商名称) && (production_num_value == info.产品型号)){
			$("#structure").attr('value',info.已解决架构);
			$("#result").val(info.解决方案);
			// console.log(info.已解决架构 + info.解决方案);
		}
		
	})
}

