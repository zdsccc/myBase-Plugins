/*
*
*
*/

var _lc=function(sTag, sDef){return plugin.getLocaleMsg(sTag, sDef);};
var _lc2=function(sTag, sDef){return _lc(plugin.getLocaleID()+'.'+sTag, sDef);};

var _trim=function(s){return (s||'').replace(/^\s+|\s+$/g, '');};
var _trim_cr=function(s){return (s||'').replace(/\r+$/g, '');};

try{
    // 实例化CNyfDb类为对象nyf
    var nyf=new CNyfDb(-1); //-1: for the current one;
    // 对象nyf是否已mount数据库
    if(nyf.isOpen()){
        // 数据库是否以只读方式打开的
        if(!nyf.isReadonly()){
            // 选中的分支
            var selectedInfoItems = plugin.getSelectedInfoItems(-1);
            var selectedInfoItems_len = selectedInfoItems.length;

            if(plugin.isContentEditable()){
                // font size prompt
                var sCfgKey='gzhaha.SetFontSize';
                var sSiz = prompt('Input Font Size (5-40):', localStorage.getItem(sCfgKey) || '16', 'Input Font Size');
                if (sSiz) {
                    if (sSiz >= 5 && sSiz <= 40) {
                        for(var i=0;i<selectedInfoItems_len;i++) {
                            // 获取条目文本
                            alert(selectedInfoItems[i]+nyf.listFiles(selectedInfoItems[i]));
                            var sCon = plugin.getTextContent(nyf.listFiles(selectedInfoItems[i]), true);
                            // 设置的字体size保存到条目的ini文件
                            localStorage.setItem(sCfgKey, sSiz);
                            //match px, pt, %
                            var regx = /font-size:( |)\d{1,2}(|\.\d+)(| )pt|font-size:( |)\d{1,2}(|\.\d+)(| )px|font-size:( |)\d{1,3}(| )%/g;
                            var html = sCon.replace(regx, 'font-size: ' + sSiz + 'pt');
                            //2015.6.12 'setHTML' clears DOM entirely including UNDO stack, so it'd be worth to first save current modifications as a history revision for UNDOable;
                            plugin.commitCurrentChanges();
                            // 替换条目的文本内容
                            plugin.setTextContent(selectedInfoItems[i]+nyf.listFiles(selectedInfoItems[i]), html, true);
                            plugin.setDomDirty(selectedInfoItems[i]+nyf.listFiles(selectedInfoItems[i]), true);
                        }
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
