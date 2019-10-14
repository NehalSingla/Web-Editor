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

  function submit_data()
  {
    console.log(code);
    if(html.value=='')
    {
      alert("Html fields are empty");
      return;
    }
    var obj=new Object();
    obj.htmlData=code;
    console.log(obj);

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
