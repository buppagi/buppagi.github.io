---
title: "안드로이드 DP(DIP), PX, DPI의 개념 및 계산기"
excerpt: "안드로이드의DP, PX, DPI 단위의 개념을 알아보자."
date: 2018-10-22 14:53:30 +0900
categories: [UI 개발]
tags: [UI 개발, CSS, HTML, 안드로이드, DPI, DP, PX, 단위]
---

## 개념




아래 계산기는 해상도 별로 PX to DP와 DP to PX로 변환이 가능합니다.


다양한 픽셀 밀도의 구성 한정자

| 밀도 한 정자  | 설명                                                                    |
|--------------|-------------------------------------------------------------------------|
| ldpi         | 저밀도(ldpi)의 화면(~120dpi)에 대한 리소스입니다.                          |
| mdpi         | 중밀도(mdpi)의 화면(~160dpi)에 대한 리소스입니다. (이것이 기준 밀도입니다.)  |
| hdpi         | 고밀도(hdpi)의 화면(~240dpi)에 대한 리소스입니다.                          |
| xhdpi        | 초고밀도(xhdpi)의 화면(~320dpi)에 대한 리소스입니다.                       |
| xxhdpi       | 	초초고밀도(xxhdpi)의 화면(~480dpi)에 대한 리소스입니다.                   |
| xxxhdpi      | 초초초고밀도(xxxhdpi) 사용(~640dpi)에 대한 리소스입니다.                    |
| nodpi        | 모든 밀도에 대한 리소스입니다. 이들은 밀도 독립적 리소스입니다. 이 한정자 태그가 지정된 리소스의 경우 현재 화면의 밀도에 관계없이 시스템에서 리소스 크기를 조정하지 않습니다.  |
| tvdpi        | mdpi와 hdpi 사이의 화면(약 213dpi)에 대한 리소스입니다. 이 값은 '기본' 밀도 그룹으로 간주되지 않습니다. 대개의 경우 텔레비전용이며 앱에서는 대부분 필요하지 않습니다. 앱은 대부분 mdpi 및 hdpi 리소스를 제공하는 것으로 충분하며 시스템에서 필요에 따라 확장합니다. tvdpi 리소스를 제공해야 한다고 생각되는 경우 1.33*mdpi로 크기를 지정합니다. 예를 들어 mdpi 화면의 100px x 100px 이미지가 tvdpi에서는 133px x 133px입니다.  |

여러 밀도의 대체 비트맵 드로어블을 만들려면 6가지 기본 밀도 간에 3:4:6:8:12:16 크기 조정 비율을 따라야 합니다. 예를 들어 중밀도 화면에 대한 48x48픽셀의 비트맵 드로어블이 있는 경우 모든 다양한 크기는 다음과 같아야 합니다.

* 저밀도(ldpi)의 경우 36x36(0.75x)
* 중밀도(mdpi)의 경우 48x48(1.0x 기준)
* 고밀도(hdpi)의 경우 72x72(1.5x)
* 초고밀도(xhdpi)의 경우 96x96(2.0x)
* 초초고밀도(xxhdpi)의 경우 144x144(3.0x)
* 초초초고밀도(xxxhdpi)의 경우 192x192(4.0x)


## 계산기

<fieldset>
  <legend>Android DP / PX converter</legend>
  <p class="info">
    DP (density independent pixel) 값 또는 아래에 PX (pixel) 값을 입력하시면 됩니다. <br />픽셀을 사용하는 경우 현재 표시되는 화면 밀도를 설정할 수 있습니다.
  </p>

  <input type="text" id="value" style="width:50px" onkeyup="calc();" />

  <select id="unit" onchange="unitChange()">
    <option value="px">px</option>
    <option value="dp">dp</option>
  </select>

  <label for="density" style="display:inline-block;">@</label>
  <select id="density" onChange="calc()"></select>

  <div id="result"></div>

  출처: <a href="http://developer.android.com/guide/practices/screens_support.html" target="_blank">android api : supporting multiple screens</a>
</fieldset>

<script>
  var dpis = [
      {label:'ldpi', 			value:120, scale:0.75,	description:'Low density', 											},
      {label:'mdpi', 			value:160, scale:1, 		description:'Medium density BASELINE'						},
      {label:'hdpi', 			value:240, scale:1.5, 	description:'High density'											},
      {label:'xhdpi', 		value:320, scale:2,			description:'Extra high density'								},
      {label:'xxhdpi', 		value:480, scale:3, 		description:'Extra Extra high density', 				},
      {label:'xxxhdpi', 	value:640, scale:4, 		description:'Extra Extra Extra high density', 	}
  ];

  var BASE_DPI = 160;

  //pixel = dps * ( density / 160)
  //dps = pixel / ( density/160 )
  function calc() {
    //work out DPS at current rate

    var unit = document.getElementById("unit").value;
    var d = document.getElementById("density").value;

    if (isNaN(parseInt(document.getElementById("value").value))) {
      res = "Unit must be a number."
    } else {

      if (unit == "px") {
        var p = parseInt(document.getElementById("value").value);
        var dp = p / (d / BASE_DPI);
      } else {
        var dp = parseInt(document.getElementById("value").value);
        var p = dp * (d / BASE_DPI);
      }

      var res = "<table>";
      for(var i=0; i<dpis.length; i++) {
        var data = dpis[i];
        var val = dp * (data.value / BASE_DPI);
        res += "<tr><td width='120px'>" + data.label + " <small>("+ data.scale +"x)</small> </td><td>@ " + dp.toFixed(2) + "dp </td><td> = " + val.toFixed(2) + "px</td></tr>";
      }
      res += "</table>"
    }

    document.getElementById("result").innerHTML = res;
  }

  function unitChange() {
    var el = document.getElementById("density");
    var unit = document.getElementById("unit").value;

    if (unit == "dp") {
      el.disabled = true;
    } else {
      el.disabled = false;
    }

    calc();
  }

  function render() {
    var html="";
    for(var i=0; i<dpis.length; i++) {
      var data = dpis[i];
      var selected = BASE_DPI == data.value ? "selected" : "";
      html+="<option "+selected+" value='"+data.value+"'>"+data.description+" ("+data.value+"dpi, " +data.label+ ", "+ data.scale +"x) </i> </option>";
    }

    document.getElementById("density").innerHTML = html;
  }

  window.onload = function(){
    render();
  }
</script>


참고사이트
https://blog.cracker9.io/2018/03/13/Android_DPI/
http://blog.rightbrain.co.kr/?p=1036
https://developer.android.com/guide/practices/screens_support.html