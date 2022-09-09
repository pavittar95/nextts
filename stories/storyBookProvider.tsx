import React from "react";
import "../styles/globals.scss";
// import { Store, AnyAction } from 'redux';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';

// import createStore from 'store/store';

// import 'designSystem/typography.scss';
// import 'scss/_common.scss';
// import './styles.scss';

// type Props = {
//   store: Store<any, AnyAction>;
// };

// const StorybookProviderImpl: React.FC<Props> = ({ store, children }) => (
//   <Provider store={store}>{children}</Provider>
// );

// export const StorybookProvider: React.FC = withRedux(createStore)(
//   StorybookProviderImpl
// ) as any;

export const StorybookProvider: React.FC<any> = ({ children }) => (
  <>{children}</>
);
