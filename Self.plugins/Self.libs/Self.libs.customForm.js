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
        "单行输入区",
        "多行输入区",
        "多选框",
        "颜色选框",
        "下拉可选菜单（不可编辑）",
        "下拉可选菜单（可编辑）",
        "单文件选框",
        "多文件选框",
        "保存文件选框",
        "文件夹选框",
        "日期选框",
        "时间选框"
    ];
    var vFields = [
        {sField: "combolist", sLabel: '输入框类型选择', vItems: combolist_vItems, sInit: 0}
        , {sField: 'lineedit', sLabel: '输入框名称', bReadonly: false, sInit: '', bRequired: true}
    ];
    var vRes=input(plugin.getScriptTitle(), vFields, {nMinSize: 500, nSpacing: 6, bVerticalLayout: false});
    alert("end");
}
customForm();

