import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Login from '../../client/src/components/Auth/Login';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {

};
