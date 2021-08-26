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
      title: "title",
      desc: "desc",
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
