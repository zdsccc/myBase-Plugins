/*
* 初版开始时间：2018/01/09
* 初版完成时间：2018/01/
* 最新更新时间：2018/01/
* 本插件属个人开发，如有任何问题，概不负责。
* 联系邮箱：hiyesman@163.com
*/

var nyf=new CNyfDb(-1); //-1: for the current one;
var bSucc=nyf.listFolders('/Organizer/data/0/1/2');
if(bSucc){
    alert(bSucc);
}

