해당 코드들은 노마드 코더의 줌 클론코딩 내의 websocket을 학습하며 정리한 내용입니다.
폴더 구조는 반영하지 않았으며 주요 코드를 복습하기 위한 기록입니다.
Pug는 html 생성 템플릿 엔진으로 가독성과 유지관리 측면에서 효과적이며
무엇보다 node.js 기반 웹 프레임워크과 쉽게 통합되어 서버측 백엔드 렌더링 구현에 용이하다는 장점이 있습니다.


socket.io
publicRooms 코드는 
private, public 정보를 모두 가진 rooms와
private 정보만 가진 sids를 비교하여 계산 

rooms : private, public
sids : only private

rooms - sids = public


emit하면