# 구현과제 1. Toodoo

> 이 과제는 iOS의 [미리 알림(Reminders)](https://apps.apple.com/us/app/reminders/id1108187841)를 모티브로 제작되었습니다.

## 유의사항

**읽기 좋은 코드**에 집중해주세요.

- 기능의 정상 동작 여부
- 작성하는 코드의 퀄리티
- Git 관리 수준
- PR, 코드 리뷰 방식

최소 기능 구현만 만족하면 **자유롭게 커스텀**이 가능합니다.

- 디자인 커스텀 가능 (@shadcn/ui 안 써도 됨)
- 폴더 구조 커스텀 가능
- 코드 컨벤션 커스텀 가능
- 의존성 설치 및 삭제 가능

**README 작성**은 필수입니다.

- 자신의 코드에서 강조할 부분
- 자신의 코드에서 부족한 부분
- 기타 코드를 이해하는데 도움을 주는 내용

Fork & PR 등 과제 진행과 관련된 내용은,  
 [우테코 따라잡기 노션 - 구현과제 진행 관련 유의사항](https://yopark.notion.site/08c99780759944118452d77b6927775a) 문서를 참고해주세요.

배포 이후 **배포 주소**를 말씀해주시면 해당 주소를 CORS에 추가하도록 하겠습니다.

## API

API 주소 : https://not-woowacourse-api.yopark.dev

자세한 내용은 [Swagger](https://not-woowacourse-api.yopark.dev/api-docs)를 참고해주세요.

이번 과제에서 사용할 API는 **0.x(공통), 1.x(Toodoo)** 입니다.

> 이걸 만든 사람은 백엔드 개발자가 아닙니다. 사용해보시고 오류나 빈틈이 있으면 채널톡 부탁드립니다 😭

## 구현해야 할 기능

> Toodoo 시연 링크 : https://not-woowacourse-1-toodoo-frontend-for-example.vercel.app  
> Toodoo 시연 레포 : https://github.com/yoopark/not-woowacourse-1-toodoo-frontend-for-example

할 일 조회하기

- 모든 할 일을 조회합니다.
- 완료한 할 일은 보이지 않아야 합니다.
- 완료한 할 일 함께 보기 / 완료한 할 일 숨기기 기능이 있어야 합니다.

할 일 생성하기

- 제목을 넣어 할 일을 생성합니다.

할 일 수정하기

- 제목, 내용을 수정할 수 있어야 합니다.
- 완료 여부를 수정할 수 있어야 합니다.

할 일 삭제하기

- 할 일을 삭제합니다. (완료하는 것과 삭제하는 것은 다릅니다.)

## 기술 스택 관련 제한사항

- React Query, Axios를 사용해주세요.
- 할 일 생성, 할 일 수정 시 React Hook Form을 사용하지 말아주세요. (다음 주차에 진행할 내용임)
