import {
  Communication,
  TCommunicationProps,
  CommunicationOptions,
} from "@fluentui/react-teams";

export default function Welcome() {
  const props: TCommunicationProps = {
    option: CommunicationOptions.Welcome,
  };

  return (
    <>
      <Communication {...props} />
    </>
  );
}
