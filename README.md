# concept-container

`Concept` 을 제공할 수 있는 `sample` 및 `PoC` 프로젝트들이 위치하고 있습니다.

각각의 프로젝트는 의존성 없이 **독립적**이며 아래의 구조로 관리됩니다.

```
/
└─[ 언어 or 생태계 or 플랫폼 ]
  └─[ 라이브러리 or 프레임워크 or 분류 가능한 도메인 ]
    └─{ 프로젝트 } // 목적에 맞는 가치를 전달하는 단위
```

프로젝트에 포함된 `README.md` 를 참고하여 어떤 것을 다루는지, 실행 방법을 확인할 수 있습니다.

## 관리 포인트

- 프로젝트들은 독립적으로 관리되기 때문에 아래의 내용을 `README.md` 에 기록하여 추적성을 보장하도록 합니다.
  - 어떤 RunTime(i.e. Node.js) 버전을 사용하는지
  - 어떤 목적의 프로젝트 인지
  - 어떻게 실행하는지
- `repo root` 에서 `git` 을 관리하기 때문에 하위의 프로젝트 레벨에서는 `.git` 을 포함하지 않도록 합니다.
- 하나의 `컨셉` 에는 여러 복합적인 `Stack` 이 사용되기 때문에 완벽한 분류를 할 수 없습니다. 때문에 `컨셉` 을 기준으로 위에서 관리되는 구조로 배치하면 됩니다.
  - e.g. `TS` + `Prisma` + `SQL Server` 를 이용해서 `트랜잭션 격리 수준` 의 `컨셉` 을 정리하려고 한다면 코드에는 `트랜잭션 격리 수준` 을 위한 `Prisma` 코드도 들어갈 것이고, `트랜잭션 격리 수준` 은 `DBMS` 에 의존적이기 때문에 `SQL Server` 에 맞게 작성될 것입니다. 크게 보면 `Prisma` 로 `트랜잭션 격리 수준` 을 핸들링하는 예제도 있지만 `SQL Server` 에서 `트랜잭션 격리 수준` 이 어떻게 동작하는가에 대해서도 나타내게 됩니다. 이런 경우 `Prisma` 로 `트랜잭션 격리 수준` 을 하는 것이 더 **목적**에 가깝기 때문에 `Prisma` 를 기준으로 분류하여 배치하게 될 것입니다.
  - e.g. `DBMS` , `Kafka` 를 예시로 본다면 이것을 어떤 `언어` 와 `환경` 으로 구성하느냐에 따라 달라질 것입니다. 순수하게 해당 플랫폼에 대해서만 서술한다면 `DBMS` , `Kafka` 를 하나의 `언어 or 생태계 or 플랫폼` 으로 분류할 수 있을 것입니다. 하지만 해당 `플랫폼` 을 어떠한 언어를 **사용**해서 만들어진 `컨셉` 은 해당 언어에 맞게 분류될 것입니다.
