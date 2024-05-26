# 일정 관리 웹 애플리케이션 만들기

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br/><br/><br/>

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
<br/><br/><br/>

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
<br/><br/><br/>

## 컴포넌트 성능 최적화

### 1. 많은 데이터 렌더링하기
- 데이터 2,500개가 담긴 createBulkTodos 함수 생성

### 2. 크롬 개발자 도구를 통한 성능 모니터링
- React DevTools의 Profiler 탭

### 3. React.memo를 통한 컴포넌트 리렌더링 성능 최적화
- 컴포넌트의 props가 바뀌지 않았다면 리렌더링하지 않도록 설정

### 4. onToggle과 onRemove가 새로워지는 현상 방지하기
- useState의 함수형 업데이트 또는 useReducer 사용
- useReducer를 사용하는 방법은 기존 코드를 많이 고쳐야 한다는 단점이 있지만, 상태를 업데이트 하는 로직을 모아서 컴포넌트 바깥에 둘 수 있다는 장점이 있음
- 성능상으로는 두 가지 방법이 비슷하기 때문에 개인취향에 따라 사용하기

### 5. react-virtualized를 사용한 렌더링 최적화
- 리스트에 관련된 컴포넌트 최적화(리스트 내부에서 사용하는 컴포넌트 + 리스트로 사용되는 컴포넌트)
- TodoList와 TodoListItem 컴포넌트 최적화
<br/><br/><br/>

리액트 컴포넌트의 렌더링은 기본적으로 빠르기 때문에, 리스트와 관련된 컴포넌트를 만들 때 보여 줄 항목이 100개 이상이고 업데이트가 자주 발생하는 경우에만 최적화하기
