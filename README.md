# 일정 관리 웹 애플리케이션 만들기

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## UI 구성하기

### `TodoTemplate`
- 화면 가운데 정렬, 앱 타이틀을 보여줌
- children으로 내부 JSX를 props로 받아 와서 렌더링함

### `TodoInsert`
- 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
- state를 통해 input의 상태를 관리함

### `TodoListItem`
- 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
- todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여줌

### `TodoList`
- todos 배열을 props로 받아 와서 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌


## 기능 구현하기

### 1. 항목 추가 기능 구현
- TodoInsert value 상태 관리
- todos 배열에 새 객체 추가
- TodoInsert에서 onSubmit 이벤트 설정

### 2. 지우기 기능 구현
- todos 배열에서 id로 항목 지우기
- TodoListItem에서 삭제 함수 호출

### 3. 수정 기능
- onToggle 구현
- TodoListItem에서 토글 함수 호출
