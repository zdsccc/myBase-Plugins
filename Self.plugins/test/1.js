// 实例化CNyfDb类为对象nyf
var nyf=new CNyfDb(-1); //-1: for the current one;
// 所有选中的条目
var selectedInfoItems = plugin.getSelectedInfoItems(-1);
var allFiles = nyf.listFiles(selectedInfoItems);
alert(allFiles);
