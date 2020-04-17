import React, { FC, useEffect, useState } from 'react';
import {
  Link, useParams,
} from 'react-router-dom';

interface PropTypes {
  previousUrl: string;
}

const Graph: FC<PropTypes> = ({ previousUrl }) => {
  const { queryID, instanceID } = useParams();
  const [instanceData, setInstanceData] = useState();

  function getInstanceData(): void {
    fetch(`/api/logs/display/${queryID}/${instanceID}`)
      .then((res) => res.json())
      .then((data) => setInstanceData(data));
  }

  useEffect(() => {
    getInstanceData();
  }, []);

  if (instanceData) console.log(instanceData);

  return (
    <div>
      <div className="split">
        <h2 className="Graphtitle">Graphs</h2>
        <Link to={`${previousUrl}/${queryID}`}><button type="button">Back</button></Link>
      </div>
    </div>
  );
};

export default Graph;
