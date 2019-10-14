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


  }
