import React, { FC } from 'react';
import { Playground, store } from 'graphql-playground-react-tracking';
import { Provider } from 'react-redux';

const playgroundSettings = {
  'editor.cursorShape': 'line',
  'editor.fontFamily': "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
  'editor.fontSize': 14,
  'editor.reuseHeaders': true,
  'editor.theme': 'dark',
  'general.betaUpdates': false,
  'prettier.printWidth': 80,
  'prettier.tabWidth': 2,
  'prettier.useTabs': true,
  'request.credentials': 'same-origin',
  'schema.polling.enable': true,
  'schema.polling.endpointFilter': '*localhost*',
  'schema.polling.interval': 2000,
  'schema.disableComments': false,
  'tracing.hideTracingResponse': true,
  'tracing.tracingSupported': true,
};

const PlaygroundDisplay: FC = () => (
  <Provider store={store}>
    <Playground
      className="playground"
      endpoint="https://gql.postql.io/graphql"
      subscriptionEndpoint="https://gql.postql.io/graphql"
      settings={playgroundSettings}
    />
  </Provider>
);
export default PlaygroundDisplay;
