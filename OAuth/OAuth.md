# OAuth 2.0
![](https://velog.velcdn.com/images/miniso/post/f893387b-42f6-4629-951b-743ed323bde6/image.png)<br/>
구글과 같은 플랫폼의 특정한 사용자 데이터에 접근하기 위해 제3자 클라이언트(우리의 서비스)가 사용자의 접근 권한을 위임(Delegated Authorization)받을 수 있는 표준 프로토콜

<br/>
<br/>

## 1. OAuth 2.0 주체
![](https://velog.velcdn.com/images/miniso/post/eb740ede-74e6-4cb4-b9b4-70716f5fc737/image.jpg)

### 1-1. Resource Owner
- 우리의 서비스를 이용하면서 구글과 같은 플랫폼의 리소스(ex. 캘린더 정보)를 소유하고 있는 유저.

### 1-2. Client
- Resource Owner의 권한으로 Resource Server의 자원을 이용하고자 하는 서비스.
- 우리의 서비스

### 1-3. Authorization Server 
- Resource Owner의 인증 및 권한 부여 후, Client에게 액세스 토큰을 발급하는 서버.
- 인증과 관련된 처리를 전담하는 서버

### 1-4. Resource Server
- Client의 요청에 따라 보호된 리소스에 대한 액세스 권한을 검증하고 응답하는 서버

<br/>
<br/>

> 이후 본문에선 '리소스 소유자', '클라이언트', '인가 서버', '리소스 서버' 라고 칭함.

## 2. Client 등록 
OAuth를 이용하기 전 클라이언트를 리소스 서버에 등록해야한다.

### 2-1. redirect uri 등록 
- 클라이언트 등록 과정에서 리소스 서버에게 redirect uri를 등록. 
- 후에 리소스 서버가 권한을 부여하는 과정에서 authorization code를 전달해주는데 그 코드를 등록한 redirect uri로 전달. 
- 사용자가 OAuth 2.0 서비스에서 인증을 마치고 (예를 들어 구글 로그인 페이지에서 로그인을 마쳤을 때) 사용자를 리디렉션시킬 위치

### 2-2. client_id, client_secret 발급
#### - client_id 
	- 애플리케이션 식별하는 고유 id
    - 외부에 노출되어도 괜찮음.

#### - client_secret
	- id에 대한 비밀번호
    - 외부에 노출되어선 안됨.

<br/>
<br/>

## 3. OAuth 2.0의 권한 부여 방식
### 3-1. authorization code
#### 3-1-1. access token 발급 위한 HTTP 요청 예시
```
POST /token HTTP/1.1
grant_type=authorization_code
		&code=xxxxxxxxxxxxxxx
        &redirect_uri=https%ajldfwf
```

#### 3-1-2. 동작 매커니즘
1. 클라이언트가 리소스 소유자에게 권한을 얻기 위해 인가 서버로 리소스 소유자를 리디렉션함.
2. 리소스 소유자는 인가 서버를 통해 클라이언트에 대한 권한 부여 여부 결정.
3. 리소스 소유자가 권한 부여를 승인하면, 인가 서버가 **authorization code**를 생성하고 이 코드를 클라이언트에게 제공.
4. 클라이언트는 authorization code를 사용하여 인가 서버에 액세스 토큰발급을 요청함. 
(이 때 클라이언트는 client id, client secret을 함께 전달하여 자신을 인증함)
5. 인가 서버는 클라이언트의 인증 정보를 확인하고, 유효한 authorization code인 경우 액세스 토큰을 발급.
6. 이렇게 발급받은 액세스 토큰을 사용하여 클라이언트는 리소스 서버에 요청을 보내고 보호된 리소스에 접근 가능.

<br/>

### 3-2. implicit 
```
GET /authorize HTTP/1.1
		?response_type=token
		&client_id=sdffjq1235alkd
        &redirect_uri=https%ajldfwf
```
#### 3-2-1. 코드로 확인할 수 있는 implicit 방식 특징
- **POST가 아닌 GET 요청**
일반적으로 OAuth 2.0 인증 프로토콜에서는 액세스 토큰을 요청하는데 POST 요청을 사용하는 경우가 많지만, implicit 플로우는 액세스 토큰을 요청할 때 특별한 인증 코드(authorization code)를 받아올 필요가 없으며, 단지 액세스 토큰만 받으면 되기 때문에 GET 요청 사용

- **grant_type이 없다**
grant_type 매개변수는 클라이언트가 사용하는 권한 부여 방식을 식별하는 역할
implicit 플로우는 이미 클라이언트가 인가되었다고 간주하고, grant_type 파라미터를 생략하고 액세스 토큰을 바로 요청

#### 3-2-2. 동작 매커니즘
(1) 리소스 서버는 클라이언트가 이미 리소스 소유자에게 인가를 받은 상태라고 가정하고 등록된 클라이언트인지 확인 (client_id, redirect_uri 일치 확인)
(2) 등록된 클라이언트라면 액세스 토큰을 redirect_uri로 보냄

#### 3-2-3. implicit의 특징
- authorization code 없이 바로 액세스 토큰을 발급
	- 클라이언트가 인가 코드를 요청하지 않는다는 것.

- 클라이언트 인증 이루어지지 않음. 
	- 클라이언트가 누구인지 확인하지 않고 액세스 토큰을 발급한다는 의미.


> ### ✦ 등록된 클라이언트인지 확인하는 것과 클라이언트 인증은 다른 것
>#### ► 등록된 클라이언트 확인 
>- 리소스 서버가 클라이언트로부터 authorization code 또는 액세스 토큰 발급을 요청받았을 때
해당 클라이언트가 등록된 클라이언트인지를 확인하는 것을 의미. 
>- 리소스 서버에 클라이언트를 등록할 때 발급받은 
클라이언트 아이디(client_id)와 클라이언트 비밀번호(client_secret)가 올바른지 확인
>
>
>#### ► 클라이언트 인증
>- 클라이언트가 가지고 있는 authorization code나 액세스 토큰이 유효한지, 
리소스 서버에 접근 권한이 있는지를 확인하는 것을 의미.

<br/>

### 3-3. resource owner password credentials
```
POST /token HTTP/1.1
grant_type=password
		&username=resource_owner_name
        &password_uri=resource_owner_password
```
- 클라이언트가 리소스 오너에게 직접 username과 password를 받아 액세스 토큰을 요청
- 이 때 인가코드나 리디렉션은 사용하지 않으며 액세스 토큰을 바로 받아옴.

#### 3-3-1. 주의사항
* username과 password를 직접 받아오기때문에 보안적으로 주의가 필요. 
* 클라이언트는 정보 보호를 위해 HTTPS와 같은 보안 프로토콜을 사용하여 통신해야함. 
* 유저가 가지고 있는 기기의 os와 같은 굉장히 믿을 수 있는 안전한 환경에서만 사용할 수 있는 플로우.

<br/>

### 3-4. client credentials
클라이언트가 자체 리소스를 사용하거나, 또는 이미 리소스 서버와 신뢰 관계를 가지고 있을 때 주로 사용. 
이 방식에서는 클라이언트 자체가 리소스 서버에 접근하는 경우(예: API 서버에 접근하는 서비스) 자신의 신원을 인증하고 액세스 토큰을 발급받는 방식
사실상 리소스 오너와 oauth 클라이언트가 동일한 개체일때 복잡한 플로우를 가져가기보단 직접적으로 API호출을 통해 토큰을 발급받는 것
```
POST /token HTTP/1.1
grant_type=client_credentials
        &client_id=your_client_id
        &client_secret=your_client_secret
```
#### 3-4-1. 동작 매커니즘
(1) 클라이언트는 자신의 자격증명(client_id, client_secret)을 사용하여 인증
(2) 클라이언트는 authorization code나 리디렉션없이 client_id와 client_secret을 리소스 서버로 보내 액세스 토큰을 요청. 
(3) 리소스 서버는 클라이언트로부터 받은 client_id와 client_secret을 확인하여 클라이언트에게 액세스 토큰 발급

<br/>
<br/>

## 4. access token은 bearer token
**✦ bearer token**
- 다른 암호학적 보호나 클라이언트에 바인딩 되는 장치들을 모두 배제한채 
***해당 토큰을 소유하고 있는 것 만으로도 토큰에 대한 사용 권한이 있음을 인정***해주는 토큰
- 토큰이 노출되면 누구나 해당 리소스에 접근할 수 있게 되므로, 
HTTPS와 같은 안전한 통신을 사용하고, 토큰의 유효 기간을 짧게 설정하여 보안을 강화하는 것이 중요

```
POST /token HTTP/1.1
     Host: server.example.com
     Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
     Content-Type: application/x-www-form-urlencoded

     grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA
     &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb
```
OAuth 2.0에서 클라이언트가 리소스 서버에 요청을 보낼 때, 
HTTP 헤더에 Bearer Token을 포함하여 액세스 토큰을 전달. 
리소스 서버는 이 Bearer Token을 검증하여 클라이언트의 요청이 유효한지 확인하고, 
해당 액세스 토큰이 리소스에 접근할 권한이 있는지 확인.

<br/>
<br/>

## 5. refresh token
![](https://velog.velcdn.com/images/miniso/post/22d0d90e-049d-461b-8c49-fa10c4f660ca/image.jpg)


> 일반적으로 access token은 만료기간이 있으며, 만료되면 더 이상 사용할 수 없다.
refresh token는 access token보다 더 오래 유효하며 이를 이용하여 access token이 만료되었을 때 refresh token으로 새로운 access token과 새로운 refresh token을 받을 수 있다.

6. access token의 기간이 만료
7. 클라이언트는 refresh token을 인가 서버 에게 전달
8. 인가 서버는 클라이언트가 보낸 refresh token를 확인 후 
새로운 access token과 새로운 refresh token을 발급
클라이언트는 새로 발급받은 access token을 사용하여 리소스 서버의 보호된 리소스에 접근 가능

<br/>
<br/>

## 6. OAuth 1.0과 달라진 점
- scope를 통해 해당 토큰이 접근할 수 있는 유저 리소스 범위 제한 가능
- bearer token + TLS 사용으로 client 복잡성 간소화
- 서버 역할을 authorization, resource 으로 나눔
- refresh token으로 토큰 탈취 문제 개선
  - 액세스 토큰 탈취되더라도 액세스 토큰이 살아있는 짧은 기간만 *어뷰징할 수 있기 때문.
   - refresh token으로 새로운 액세스 토큰 발급받아 리소스 접근 가능
- grant 개념 추가로 제한적인 사용환경이 아닌 여러 사용환경에 대한 플로우 나타낼 수 있음

>* 어뷰징(abusing) 이란 부정한 목적을 가지고 시스템을 이용하거나, 시스템의 취약점을 악용하여 불법적인 행위를 하는 것.

<br/>
<br/>

## 7. OAuth 2.1
더 보안적으로 민감한 사용처들의 프로토콜 채택 (금융권 등)
여러 rfc 보안책들을 하나로 모아 스펙화 시키고 현재 구현에 모범 적용 사례들을 스펙화 시킴

### OAuth 2.0 보안과 BCP

### OAuth 2.1의 Grant 
- 토큰 탈취에 취약한 implicit 배제
- 유저에게 직접 아이디, 비밀번호 받는 resource owner password credentials 배제 

- Device Authorization Grant 추가
	- IoT와 관련된 여러 스마트 기기에 적합 사용하는 해당 기기가 아닌 다른 기기를 통해 인증을 받는 플로우 
  ```
  POST /token HTTP/1.1
  grant_type=urn%3Aietf%3AParams%3Aoauth%3Agrant-type%3Adevice_code
          &device_code=QdlkfwodfkSwldkfRkdmwdf
          &client_id=143205482
  ```
  
<br/>
<br/>


[ 참고 자료 ]
생활코딩 - OAuth 2.0
https://ko.wikipedia.org/wiki/OAuth
https://datatracker.ietf.org/doc/html/rfc6749#section-1.2
https://hudi.blog/oauth-2.0/
https://www.youtube.com/watch?v=DQFv0AxTEgM