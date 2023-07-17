```
[VERBOSE-2:dart_vm_initializer.cc(41)] Unhandled Exception: PlatformException(unregistered_view_type, A UIKitView widget is trying to create a PlatformView with an unregistered type: < plugins.flutter.io/google_maps >, If you are the author of the PlatformView, make sure `registerViewFactory` is invoked.
```

google_maps_flutter 플러그인과 geolocator 플러그인을 이용하여 구글 지도를 앱에 띄우려는데 위와 같은 에러가 발생했다.

구글 맵스 플러터 플러그인으로 플랫폼뷰를 생성하려고 한다며 PlatformView, `registerViewFactory`가 호출되었는지 확인하란다.

### 플랫폼 뷰 (Platform View)
플러터 앱에서 네이티브(플랫폼) 기능을 사용하기 위한 도구로 ios와 android와 같은 플랫폼의 기능을 플러터 앱에 통합할 수 있도록 도와준다. 지도를 표시하기 위해 사용하는 google_maps_flutter 플러그인은 네이티브 지도 뷰를 플러터 앱에 표시한다. 이렇게 플랫폼 뷰를 사용하면 플러터 앱에 네이티브 기능과 UI를 쉽게 통합할 수 있다.


### 네이티브 기능
- 네이티브 기능이란 모바일 플랫폼에서 제공되는 기능 및 서비스. 
    - 카메라
    - 위치 정보
    - 알림 (푸시 알림, 로컬 알림)
    - 파일 시스템 액세스
    - 네트워크 통신
    - 센서 데이터 (가속도계, 자이로스코프, 지문 스캐너 등)
    - 연락처 

### 이렇게 해결했다.
hot restart 를 몇번 했는데도 안되던게 앱 실행 중단하고 터미널에서 flutter clean 하고 다시 실행하니까 된다. (아주 많이 허탈하다.....)
그래도 이것 저것 찾아보면서 이해한 부분을 정리했다. 

리액트 네이티브의 경우 실제로 네이티브 컴포넌트를 생성하기 때문에 ios, android의 네이티브 ui 요소로 변환되어 앱의 외부적인 모습과 동작이 네이티브 앱과 유사하게 보여 ios와 android에서 거의 동일한 사용자 인터페이스를 제공한다.

플러터는 Dart라는 프로그래밍 언어를 사용하며, iOS와 Android용 앱을 개발하기 위해 고유한 UI 컴포넌트를 제공한다. 이 컴포넌트는 네이티브 컴포넌트와 '비슷한' 외관과 동작을 가지고 있어서 네이티브 앱과 '유사하게' 보인다. 그러나 이는 플러터가 자체적으로 UI를 렌더링하는 것을 의미한다.

즉 플랫폼 뷰는 플러터에서 네이티브 플랫폼의 기능이나 위젯을 직접 사용할 수 있도록 해준다. 내 프로젝트의 경우 google_maps_flutter 플러그인과 geolocator 플러그인을 사용하여 위치 정보에 관련된 네이티브 기능을 추가하고자 했기 때문에 플랫폼 뷰를 사용했다고 할 수 있다. 플러터는 자체적으로 제공하는 위젯과 기능이 풍부하기 때문에 모든 플러터앱이 플랫폼 뷰를 사용하는 것은 아니다. 따라서 플랫폼 뷰를 사용하는 것은 플러터 앱 개발에서 특정한 요구사항이나 네이티브 기능을 활용하고자 할 때 발생하는 경우이다. 다음부턴 실행 중단하고 restart를 하자..