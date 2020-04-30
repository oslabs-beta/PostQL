import React, { FC, useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({
  graphData: state.graph.graphData,
});

interface PropTypes {
  ids: string[];
  graphData: {[key: string]: string};
}

const Comparison: FC<PropTypes> = ({ ids, graphData }) => {
  const [primary, setPrimary] = useState({});
  const [secondary, setSecondary] = useState({});

  if (graphData[ids[0]] && JSON.stringify(graphData[ids[0]]) !== JSON.stringify(primary)) setPrimary(graphData[ids[0]]);
  else if (JSON.stringify(primary) !== '{}') setPrimary({});

  if (graphData[ids[1]] && JSON.stringify(graphData[ids[1]]) !== JSON.stringify(secondary)) setSecondary(graphData[ids[1]]);
  else if (JSON.stringify(secondary) !== '{}' && !graphData[ids[1]]) setSecondary({});

  console.log('ps');
  console.log(primary);
  console.log(secondary);
  console.log('graph data', graphData);

  return (
    <>
      <p>helo</p>
    </>
  );
};

export default connect(mapStateToProps)(Comparison);
