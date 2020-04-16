import React, { FC } from 'react';
import {
  useRouteMatch, Switch, Route,
} from 'react-router-dom';
import SpecificOverview from './SpecificOverview';
import Graph from './Graph';

export interface PropTypes {
  previousUrl: string;
}

const SpecificAnalytics: FC<PropTypes> = ({ previousUrl }) => {
  const { path } = useRouteMatch();
  return (
    <div className="specificanalytics">
      <Switch>
<<<<<<< HEAD
        <Route path={`${path}/:instanceID`}>
=======
        <Route path={`${path}/Graph`}>
>>>>>>> dev
          <Graph previousUrl={path} />
        </Route>
        <Route path={path} exact>
          <SpecificOverview previousUrl={previousUrl} />
        </Route>
      </Switch>
    </div>
  );
};

export default SpecificAnalytics;
