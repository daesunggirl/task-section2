/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var city=document.getElementById("aqi-city-input");
var air=document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
    var cityvalue=city.value.trim();
    var airvalue=air.value.trim();
	
	pattern1=/^[A-Za-z\u4E00-\u9FA5\s?]+$/;
	if(!pattern1.test(cityvalue)){
		alert("城市名只能为英文汉字字符，请正确输入")
			return false;
		
	   
}
   
   pattern2=/^\d+$/;
   if(!pattern2.test(airvalue)){
   	alert("空气质量必须为整数，请正确输入")
    return false;
   	
   }
  
   
  
   aqiData[cityvalue]=airvalue;
}
   
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	 var table=document.getElementById("aqi-table");
  var tr="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>"
  for(cityvalue in aqiData){
  	tr+="<tr><td>"+cityvalue+"</td><td>"+aqiData[cityvalue]+"</td><td><button onclick=delBtnHandle('"+cityvalue+"')>删除</button></td></tr>";
  }
table.innerHTML=tr;

 // var tr=document.createElement("tr");
 // var td=document.createElement("tr");
 // var btn=document.createElement("button");
 // var tcity=document.createTextNode("城市");
 // var tair=document.createTextNode("空气质量");
 // var taction=document.createTextNode("操作");
 // table.appendChild(tr);
 // tr.appendChild(td);
 // td.appendChild(tcity);


}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
var addbtn=document.getElementById("add-btn");
    addbtn.onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();