import {
  Communication,
  TCommunicationProps,
  CommunicationOptions,
} from "@fluentui/react-teams";

export default function Welcome() {
  function handleInteraction(target: string) {
    console.log(target);
  }

  const props: TCommunicationProps = {
    option: CommunicationOptions.Welcome,
    fields: {
      title: "처음이신가요?",
      desc: "앱 사용이 처음인 경우, 최초 1회 사용 동의가 필요합니다.",
      actions: {
        primary: { label: "사용 동의", target: "consent" },
        secondary: undefined,
        tertiary: { label: "도움말", target: "help" },
      },
    },
    onInteraction: ({ target }) => handleInteraction(target),
  };

  return (
    <>
      <Communication {...props} />
    </>
  );
}
