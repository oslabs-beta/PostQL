import React, { FC } from 'react';
import { Playground, store } from 'graphql-playground-react-tracking';
import { Provider, ReactReduxContext } from 'react-redux';

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

// const EditorColours = {
//   property: 'purple',
//   comment: 'green',
//   punctuation: 'red',
//   keyword: 'blue',
//   def: 'orange',
//   number: 'purple',
//   string: 'blue',
//   variable: 'white',
//   editorBackground: 'grey',
//   resultBackground: 'lightgrey'
// }

// in your connected component
// const MyConnectedComponent: FC = () => (
//   <ReactReduxContext.Consumer>
//     {({ store }) => {
//       console.log('STORE', store.getState());
//       // do something useful with the store, like passing it to a child
//       // component where it can be used in lifecycle methods
//     }}
//   </ReactReduxContext.Consumer>
// );

const PlaygroundDisplay: FC = () => (
  <Provider store={store}>
    <Playground
      className="playground"
      endpoint="https://rickandmortyapi.com/graphql"
      subscriptionEndpoint="https://rickandmortyapi.com/graphql"
        // config=""
        // schema=""
      settings={playgroundSettings}
    />
    {/* <MyConnectedComponent /> */}
  </Provider>
);
export default PlaygroundDisplay;
