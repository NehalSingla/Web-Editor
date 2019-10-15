var code = document.getElementById("code").contentWindow.document;
  
function compile() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();

  var obj=new Object();

  function submit_data()
  {
  	//console.log(document.getElementById("code").contentWindow.document.body);
    if(html.value=='')
    {
      alert("Html fields are empty");
      return;
    }
    
    obj.htmlData=document.getElementById("code").contentWindow.document.body.outerHTML;
    console.log(obj.htmlData);

    var request=new XMLHttpRequest();
    request.open('POST',"/submitCode");
    request.setRequestHeader("Content-Type","application/json");
    request.send(JSON.stringify(obj))
    request.addEventListener("load",function()
    {
      console.log("successful");
      alert("data submit");
    });
  }
