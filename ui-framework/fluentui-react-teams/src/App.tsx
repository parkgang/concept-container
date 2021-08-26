import {
  Provider as RTProvider,
  themeNames,
  Communication,
  TCommunicationProps,
  CommunicationOptions,
} from "@fluentui/react-teams";

export default function App() {
  const props: TCommunicationProps = {
    option: CommunicationOptions.Welcome,
  };

  return (
    <RTProvider themeName={themeNames.Default} lang="en-US">
      <Communication {...props} />
    </RTProvider>
  );
}
