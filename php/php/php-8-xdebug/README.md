## 개요

`php@8` 버전에 `Docker` 환경에서 `Xdebug@3` 을 사용하는 환경입니다.

아래의 기능을 제공합니다.

- `Xdebug@3` 예제
- `Container` 환경 안에서 디버깅하는 예제와 `로컬 머신` 에서 디버깅하는 예제
  - `root` 에 있는 `.vscode/launch.json` 이 원격에서 디버깅할 때 사용되는 것이고 `src/.vscode/launch.json` 이 컨테이너 안에서 디버깅할 때 사용되는 것임
- `VSCode` 에서 `PHP` 개발할 수 있는 환경 제공 (i.e. `PHP Intelephense` )
  - **오해하면 안되는 것이 `VSCode` 에서 `PHP` 를 위해서 특별히 환경설정 할 것은 없으며 해당 프로젝트에서 기본적인 것은 되어서 확인이 쉽다는 것이지 복잡한 환경 구성을 저장한 프로젝트는 아닙니다.**

## 시작 방법

기본적으로 `docker` 를 실행하면 됩니다.

```shell
docker-compose up -d
```

이후 `root` 에서 `F5` 를 통해서 디버깅하거나 `VSCode` 의 경우 `Dev Containers` 으로 `Container` 에 들어가서도 디버깅할 수 있습니다.

참고로 `VSCode` 에 종속된 환경이 아니며 `Phpstorm` 에서도 `Xdebug` 가 잘 동작하는 환경입니다.
