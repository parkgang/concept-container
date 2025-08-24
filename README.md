# concept-container

`Concept` 을 제공할 수 있는 `sample` 및 `PoC` 프로젝트들이 위치하고 있습니다.

각각의 프로젝트는 의존성 없이, 독립적이며, **repo 단위**입니다. 아래의 구조로 관리됩니다.

```
/
└─[ 언어 or 생태계 or 플랫폼 ]
  └─[ 라이브러리 or 프레임워크 or 분류 가능한 도메인 ]
    └─{ 프로젝트 } // 목적에 맞는 가치를 전달하는 단위
```

## Start

### 프로젝트 시작

원하는 프로젝트 폴더를 열어 `README.md` 참고하여 실행하면 됩니다.

### 프로젝트 관리 명령어

원래 하나의 repo에서 관리되었는데 2025-08-24 이후부터 Subtree로 관리합니다.

Subtree 추가 방법

```bash
git subtree add --prefix={main repo 경로} {subtree repo 경로} {subtree repo branch 명}
git subtree add --prefix=go/gin/gin-restful-api ~/workspaces/temp/gin-restful-api main
```

Subtree 업데이트 방법: add가 pull 명령어로 바뀐 것 이외 동일

```bash
git subtree pull --prefix=go/gin/gin-restful-api ~/workspaces/temp/gin-restful-api main
```

현재 있는 경로에 대한 git log만 보기

```bash
cd go/gin/gin-restful-api/
git log -- .
```

### 프로젝트 관리 워크플로우

Subtree Repo Branch로 분리 후 worktree로 사용하여 작업 후 main repo에 반영하는 방법  
심도있는 작업을 위해 다시 repo를 분리하고 업데이트할 때 사용

```bash
# Subtree Repo만 Branch로 분리
git subtree split --prefix=go/gin/gin-restful-api -b gin-restful-api-only

# worktree로 분리
git worktree add ../gin-restful-api gin-restful-api-only

# 독립된 repo라고 생각하고 작업
cd gin-restful-api

# Subtree Repo 업데이트
cd concept-container
git subtree pull --prefix=go/gin/gin-restful-api ../gin-restful-api gin-restful-api-only
```

Subtree Repo remote push 하는 방법

```bash
gh repo create gin-restful-api --public
git subtree push --prefix=go/gin/gin-restful-api https://github.com/parkgang/gin-restful-api.git main
```

filter-repo로 분리 후 remote push 하는 방법

```bash
brew install git-filter-repo

# 분리
git filter-repo --path go/gin/gin-restful-api/ --path-rename go/gin/gin-restful-api/:

# Remote Push
gh repo create gin-restful-api --public
git remote add origin https://github.com/parkgang/gin-restful-api.git
git push -u origin main
```

## 관리 규칙

- 프로젝트들은 독립적으로 관리되기 때문에 아래의 내용을 `README.md` 에 기록하여 추적성을 보장하도록 합니다.
  - 어떤 RunTime(i.e. Node.js) 버전을 사용하는지
  - 어떤 목적의 프로젝트 인지
  - 어떻게 실행하는지
- `repo root` 에서 `git` 을 관리하기 때문에 하위의 프로젝트 레벨에서는 `.git` 을 포함하지 않도록 합니다.
- 하나의 `컨셉` 에는 여러 복합적인 `Stack` 이 사용되기 때문에 완벽한 분류를 할 수 없습니다. 때문에 `컨셉` 을 기준으로 위에서 관리되는 구조로 배치하면 됩니다.
  - e.g. `TS` + `Prisma` + `SQL Server` 를 이용해서 `트랜잭션 격리 수준` 의 `컨셉` 을 정리하려고 한다면 코드에는 `트랜잭션 격리 수준` 을 위한 `Prisma` 코드도 들어갈 것이고, `트랜잭션 격리 수준` 은 `DBMS` 에 의존적이기 때문에 `SQL Server` 에 맞게 작성될 것입니다. 크게 보면 `Prisma` 로 `트랜잭션 격리 수준` 을 핸들링하는 예제도 있지만 `SQL Server` 에서 `트랜잭션 격리 수준` 이 어떻게 동작하는가에 대해서도 나타내게 됩니다. 이런 경우 `Prisma` 로 `트랜잭션 격리 수준` 을 하는 것이 더 **목적**에 가깝기 때문에 `Prisma` 를 기준으로 분류하여 배치하게 될 것입니다.
  - e.g. `DBMS` , `Kafka` 를 예시로 본다면 이것을 어떤 `언어` 와 `환경` 으로 구성하느냐에 따라 달라질 것입니다. 순수하게 해당 플랫폼에 대해서만 서술한다면 `DBMS` , `Kafka` 를 하나의 `언어 or 생태계 or 플랫폼` 으로 분류할 수 있을 것입니다. 하지만 해당 `플랫폼` 을 어떠한 언어를 **사용**해서 만들어진 `컨셉` 은 해당 언어에 맞게 분류될 것입니다.
