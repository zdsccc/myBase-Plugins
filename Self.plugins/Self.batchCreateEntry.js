/*
* 初版开始时间：2018/01/09
* 初版完成时间：2018/01/
* 最新更新时间：2018/01/
* 本插件属个人开发，如有任何问题，概不负责。
* 联系邮箱：hiyesman@163.com
*/
// 哪个数据库
//-1: for the current one;
var nyf = new CNyfDb(-1);

// 在哪个分支下创建子分支，选中这个根分支
var CurDocPath = plugin.getCurDocPath();
var CurFolderHint = nyf.getFolderHint(CurDocPath);

// 判断是否要在当前分支下创建子分支
var bYes=confirm('确定要在当前分支“'+CurFolderHint+'”下创建子分支吗？');

// 确定要在该根分支下创建子分支
if(bYes)
{
    // 获取选中的内容
    var SelectedText = plugin.getSelectedText(-1, false);
    alert(SelectedText);

    // 创建分支
    var bSucc = nyf.createFolder('/Organizer/data/0/1/2\\');
    if (bSucc) {
        alert('Folder created.');
    }

    var bSucc = nyf.listFolders('/Organizer/data/0/1/');
    if (bSucc) {
        alert(bSucc);
    }
}else{
    alert("您取消了操作！");
}

