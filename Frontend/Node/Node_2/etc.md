Web Server : 다른곳에서 URL을 이용해서 사용할 수 있도록 해주는 서버
Web Application Server : URL과 작업을 매핑해서 URL을 호출하면 작업을 수행하도록 해주는 서버
Applicaiton Server : 작업을 해주는 서버

forwarding과 redirect
서버에서 화면을 만들 때만 의미를 갖음, API Server를 만드는 경우에은 해당 사항 없음
Forwarding은 현재 흐름을 유지한 채 이동하는 것으로 URL이 변경되지 않음, node에서 html을 출력할 때 기본
Redirect는 현재 흐름을 끊어버리고 이동하는 것. URL이 변경됨.
Forwarding은 조회 작업에 사용하고 나머지는 Redirecting 사용

Forwarding을 하게 되면 새로고침을 했을 때 작업을 다시한다.
Redirect를 하게되면 새로고침을 할 때 결과만 새로고침 된다.

새로고침을 가지고 판단하는 것이 좋다.
대부분의 경우 조회는 Forwarding을 해야하지만 트래픽을 줄이고자 할 때는 Redirect하기도 한다.
CRUD는 반드시 Redirect해야한다

프로젝트를 만들게 되면 프로젝트 내의 파일은 2개로 분류됨
하나는 소스 코드, 다른 하나는 자원들
자원을 읽어서 사용하는 것이 소스 코드 실행을 위한 코드이다.

소스가 실행되는 과정
소스코드 -> 컴파일해서 OS나 VM이 이해할 수 있는 코드로 변경(에러가 발생하면 문법 오류) -> 컴파일이 끝나고나면 번역된 파일들을 실행할 수 있도록 작업 (빌드, 에러가 발생하면 구조가 잘못됨) -> 실행

실제 배포할 때에는 빌드한 내용을 배포함
소스코드를 되도록 수정하지 않고 업데이트를 하거나 환경을 변경하는 것이 가능하도록 프로그램을 제작하는 것이 바람직함.
이 때문에 DevOps나 CI / CD를 공부하는 것

공통 관심사항 (Common Concern)

템플릿 엔진 - 서버가 처리한 결과를 html에 출력하도록 해주는 것 - 서버 렌더링
https://velog.io/@hi_potato/Template-Engine-Template-Engine