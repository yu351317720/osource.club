//自定义添加/删除类函数
Object.prototype.addClass = function(className){
    var classArr = Array.prototype.slice.call(arguments);
    for(var i = 0;i < classArr.length;i++){
        var myClass = this.getAttribute("class");
        if(!myClass){
            this.setAttribute("class",classArr[i]);
        } else if(!eval("/\\b" + classArr[i] + "\\b/").test(myClass)){
            this.setAttribute("class",myClass + " " + classArr[i]);
        }
    }
    return this;
};
Object.prototype.removeClass = function(className){
    var classArr = Array.prototype.slice.call(arguments);
    for(var i = 0;i < classArr.length;i++){
        var myClass = this.getAttribute("class");
        if(eval("/^" + classArr[i] + "$/").test(myClass)){
            this.removeAttribute("class");
        }
        else if(eval("/" + classArr[i] + "\\s+/").test(myClass)){
            this.setAttribute("class",myClass.replace(eval("/" + classArr[i] + "\\s+/"),""));
        }else if(eval("/\\s+" + classArr[i] + "/").test(myClass)){
            this.setAttribute("class",myClass.replace(eval("/\\s+" + classArr[i] + "/"),""));
        }
    }
    return this;
};
