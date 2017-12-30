/*
* 初版开始时间：2017/12/30
* 初版完成时间：2018/01/
* 最新更新时间：2018/01/
* 本插件属个人开发，如有任何问题，概不负责。
* 联系邮箱：hiyesman@163.com
*/

//date和原生js不同，应该是重新封装过的
var tDate = new Date();
//当前year
tDate.setFullYear(tDate.getFullYear());
//当前month，和原生js不同
tDate.setMonth(tDate.getMonth());
//当前day
tDate.setDate(tDate.getDate());
var vFields = [
      {sField: 'date', sLabel:'登记日期', sInit: tDate , bCalendar: true}
    , {sField: 'time', sLabel:'登记时间', sInit: new Date()}
    , {sField: "combolist", sLabel: '根分支', vItems: ['A', 'B', 'C'], sInit: 0}
    , {sField: "lineedit", sLabel: '用户名', sInit: ''}
    , {sField: "lineedit", sLabel: '密码', sInit: ''}
    , {sField: "comboedit", sLabel: '分类', vItems: ['暂不分类'], sInit: '---choose or edit---'}
    , {sField: 'date', sLabel:'注册日期', sInit: tDate, bCalendar: true}
    , {sField: "lineedit", sLabel: '备注1', sInit: ''}
    , {sField: "lineedit", sLabel: '备注2', sInit: ''}

];
var vRes=input(plugin.getScriptTitle(), vFields, {nMinSize: 500, nSpacing: 6, bVerticalLayout: false});

if(vRes && vRes.length>0){
    var x=0;
    var sLineEdit=vRes[x++];
    var iComboList=vRes[x++];
    var sComboEdit=vRes[x++];
    var sColor=vRes[x++];
    var sFile=vRes[x++];
    var sFiles=vRes[x++];
    var sSaveFile=vRes[x++];
    var sFolder=vRes[x++];
    alert(sFolder);
}

