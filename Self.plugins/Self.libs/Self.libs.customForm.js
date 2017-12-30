/*
* 初版开始时间：2017/12/30
* 初版完成时间：2018/01/
* 最新更新时间：2018/01/
* 本插件属个人开发，如有任何问题，概不负责。
* 联系邮箱：hiyesman@163.com
*/

// 定制form表单项
function customForm()
{
    alert("begin");
    var combolist_vItems = [
        "普通输入框",
        "日期选择框",
        "时间选择框",
        "多选框",
        "下拉列表",
        "可编辑的下拉列表",
        "",

    ];
    var vFields = [
        {sField: "combolist", sLabel: '输入框类型选择', vItems: combolist_vItems, sInit: 0}

    ];
    var vRes=input(plugin.getScriptTitle(), vFields, {nMinSize: 500, nSpacing: 6, bVerticalLayout: false});
    alert("end");
}
customForm();

