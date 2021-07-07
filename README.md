# convergence-exam
컨버전스팀 개발자 채용 과제 테스트

# 참고링크
- https://www.notion.so/Catenoid-5e7d2309d16a493a8ae672b46af943fd

<!-- ## question 1
- 사용자 리스트가 들어있는 json 파일이 있습니다.
- src/data/user.js
- 사용자 리스트의 json Array는 다음과 같습니다.
```
[
  {
    id: 'hong3333',
    name: '홍길동',
    company: '카테노이드',
    age: 50,
  },
  {
    id: 'bak2220',
    name: '백한결',
    company: '카테노이드',
    age: 20,
  },
  {
    id: 'hwang0002',
    name: '황정은',
    company: '카테노이드',
    age: 30,
  },
  {
    id: 'hong3332',
    name: '홍만세',
    company: '카테노이드',
    age: 22,
  },
  {
    id: 'sora0002',
    name: '전소라',
    company: '카테노이드',
    age: 31,
  },
  {
    id: 'ha002313',
    name: '하새벽',
    company: '오리온',
    age: 31,
  },
  {
    id: 'yang0003',
    name: '양다솜',
    company: '카테노이드',
    age: 41,
  },
  {
    id: 'yang0004',
    name: '양현종',
    company: '카테노이드',
    age: 51,
  },
];
```
- 조건 1) 사용자중 나이(age)가 30세를 초과 하는 사용자를 찾습니다.
- 조건 2) 위 1번 조건에 해당하는 id의 문자를 반대로 뒤집고 nickname 속성을 새로 추가 하여 출력합니다.
- 출력 예) GET http://172.16.148.6:3000/question1
```
[
  {
    'id': 'hong3333',
    'name': '홍길동',
    'company': '카테노이드',
    'age': 50,
    'nickname': '3333gnoh',
  },
  {
    'id': 'sora0002',
    'name': '전소라',
    'company': '카테노이드',
    'age': 31,
    'nickname': '2000aros',
  },
  {
    'id': 'ha002313',
    'name': '하새벽',
    'company': '오리온',
    'age': 31,
    'nickname': '313200ah',
  },
  {
    'id': 'yang0003',
    'name': '양다솜',
    'company': '카테노이드',
    'age': 41,
    'nickname': '3000gnay',
  },
  {
    'id': 'yang0004',
    'name': '양현종',
    'company': '카테노이드',
    'age': 51,
    'nickname': '4000gnay',
  },
];
```

## question 2
- 사용자 리스트가 들어있는 json 파일이 있습니다.
- src/data/user.js
- 사용자 리스트의 json Array는 다음과 같습니다.
```
[
  {
    id: 'hong3333',
    name: '홍길동',
    company: '카테노이드',
    age: 50,
  },
  {
    id: 'bak2220',
    name: '백한결',
    company: '카테노이드',
    age: 20,
  },
  {
    id: 'hwang0002',
    name: '황정은',
    company: '카테노이드',
    age: 30,
  },
  {
    id: 'hong3332',
    name: '홍만세',
    company: '카테노이드',
    age: 22,
  },
  {
    id: 'sora0002',
    name: '전소라',
    company: '카테노이드',
    age: 31,
  },
  {
    id: 'ha002313',
    name: '하새벽',
    company: '오리온',
    age: 31,
  },
  {
    id: 'yang0003',
    name: '양다솜',
    company: '카테노이드',
    age: 41,
  },
  {
    id: 'yang0004',
    name: '양현종',
    company: '카테노이드',
    age: 51,
  },
];
```
- 사용자중 id : yang0004에 해당하는 사용자를 찾아 리턴하는 API를 만들어야 합니다.
- API Route 규칙은 아래와 같이 정의 하고자 합니다.
- GET http://172.16.148.6:3000/question2/yang0004
- 누군가 개발을 진행 하였으나 중도에 포기 하여 나머지를 완성하면 됩니다.
- 참고 1) 기존 코드를 수정 하여 만들어 주세요.
- 참고 2) 기존 코드가 맘에 안들거나 더 좋은 생각이 있다면 새로 구현 하여도 됩니다.
- 출력 예) http://172.16.148.6:3000/question2/yang0004
```
{
  id: 'yang0004',
  name: '양현종',
  company: '카테노이드',
  age: 51,
}
``` -->