
var _lc=function(sTag, sDef){return plugin.getLocaleMsg(sTag, sDef);};
var _lc2=function(sTag, sDef){return _lc(plugin.getLocaleID()+'.'+sTag, sDef);};

var _trim=function(s){return (s||'').replace(/^\s+|\s+$/g, '');};
var _trim_cr=function(s){return (s||'').replace(/\r+$/g, '');};

try{
    // 实例化CNyfDb类为对象nyf
    var nyf=new CNyfDb(-1); //-1: for the current one;
    // 对象nyf是否已mount数据库
    if(nyf.isOpen())
    {
        // 数据库是否以只读方式打开的
        if(!nyf.isReadonly())
        {
            // 所有选中的条目
            var selectedInfoItems = plugin.getSelectedInfoItems(-1);
            // 所有选中的条目的数量
            var selectedInfoItems_len = selectedInfoItems.length;
            // 当前数据库中的html内容是否可编辑
            if(plugin.isContentEditable(-1))
            {
                // key
                var sCfgKey='gzhaha.SetFontSize';
                // 字号输入
                var sSiz = prompt('Input Font Size (5-40):', localStorage.getItem(sCfgKey) || '16', 'SetSelectedItemsFontSize...');
                // 字号存在的情况
                if (sSiz)
                {
                    // 字号必须大于等于5并且小于等于40
                    if (sSiz >= 5 && sSiz <= 40)
                    {
                        // 所有选中的条目遍历
                        for(var i=0;i<selectedInfoItems_len;i++)
                        {
                            // 条目下的所有文件，包括附件，数组格式，不包括子文件夹下的文件
                            var allFiles = nyf.listFiles(selectedInfoItems[i]);
                            // _~_~_~notes.html文件的ssg路径
                            var curFilePath = selectedInfoItems[i] + allFiles[0];
                            alert(curFilePath);
                            alert(sSiz);
                            // 获取_~_~_~notes.html文件为html内容
                            var sCon = plugin.getTextContent(curFilePath, true);
                            // 设置的字体size保存到ini文件
                            localStorage.setItem(sCfgKey, sSiz);
                            //match px, pt, %
                            var regx = /font-size:( |)\d{0,1,2}(|\.\d+)(| )pt|font-size:( |)\d{0,1,2}(|\.\d+)(| )px|font-size:( |)\d{1,3}(| )%/g;
                            var html = sCon.replace(regx, 'font-size: ' + sSiz + 'pt');
                            // 替换条目的文本内容
                            plugin.setTextContent(curFilePath, html, true);
                            // 为当前html标记dirty flag
                            // plugin.setDomDirty(-1, true);
                        }
                        // 如果当前数据库中当前html内容有dirty标记，提交改变
                        plugin.commitCurrentChanges(-1);
                    }
                    else {
                        alert("Font Size should be 5-40!");
                    }
                }
            }else{
                alert(_lc('Prompt.Warn.ReadonlyContent', 'Cannot modify the content opened as Readonly.'));
            }
        }else{
            alert('Database is open as Readonly.');
        }
    }else{
        alert('Database is not open.');
    }
}catch(e){
    alert(e);
}
