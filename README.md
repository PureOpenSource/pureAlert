# Pure Alert
Bootstrap의 Model을 사용하여 alert, confirm 유형으로 출력 할 수 있습니다.

## PureAlert 사용하기
Alert을 생성합니다. `object`를 이용하여 옵션을 넣을 수 있습니다.
```javascript
$.pureAlert(options); // default alert type

$.pureAlert.alert(options); // ok button
$.pureAlert.confirm(options); // cancel, ok button
```

## Options
PureAlert을 생성 할 시 전달할 수 있다.

옵션명|유형|기본값|설명
----|----|----|----
title|string|'알림'|Alert의 해더단의 제목으로 출력됩니다.
content|string| |Alert의 바디단의 내용으로 출력됩니다.
okBtn|string|'확인'|ok 버튼의 이름으로 사용합니다.
cancelBtn|string|'취소'|cancel 버튼의 이름으로 사용합니다.
autoShow|boolean|true|초기화 할 때 Alert을 보여줍니다.
closeButton|boolean|false|Alert의 해더단의 닫기 버튼([x])을 표시합니다.

## Method

+ __.pureAlert('show')__

수동적으로 Alert을 표시합니다. (option의 `autoShow`를 false로 한 경우 화면에 표시할때 사용한다.)
```javascript
var pureAlert = $.pureAlert({autoShow: false});
pureAlert.pureAlert('show');
```

+ __.pureAlert('hide')__

수동적으로 Alert을 닫습니다. (Alert의 버튼을 클릭하지 않고 닫을때 사용한다.  DOM의 Element가 제거 되지 않는다.)
```javascript
var pureAlert = $.pureAlert({content: 'content'});
pureAlert.pureAlert('hide');
```

+ __.pureAlert('destroy')__

수동적으로 Alert을 제거합니다. (DOM의 Element를 제거합니다.)
```javascript
var pureAlert = $.pureAlert({content: 'content'});
pureAlert.pureAlert('destroy');
```


## Event
PureAlert은 버튼 클릭에 대한 이벤트를 제공합니다.

이벤트|설명
-----|-----
ok.pure-alert|이 이벤트는 확인('ok') 버튼 클릭 시 발생합니다.
cancel.pure-alert|이 이벤트는 취소('cancel') 버튼 클릭 시 발생합니다.

Alert 생성 후 리턴되는 객체에 이벤트를 추가합니다.
```javascript
var pureAlert = $.pureAlert('Content');
pureAlert.on('ok.pure-alert', function(e){
  // do something...
});
```

## Default Name 변경
Title 및 버튼 이름의 기본값은 한글로 되어 있으며, 아래와 같이 변경 가능하다.
```javascript
$.extend($.pureAlert.defaultName, {
  title: 'Notifications',
  okBtn: 'OK',
  cancelBtn: 'Cancel'
}); 
```
