import {
  Communication,
  TCommunicationProps,
  CommunicationOptions,
} from "@fluentui/react-teams";

export default function Error() {
  function handleInteraction(target: string) {
    console.log(target);
  }

  const props: TCommunicationProps = {
    option: CommunicationOptions.Error,
    fields: {
      title: "앗, 이런!",
      desc: "여기에 에러메시지가 들어갑니다.",
      actions: {
        primary: { label: "새로고침", target: "refresh" },
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
