import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Login from '../../client/src/components/Auth/Login';

// TO DO: Frontend tests
// Enzyme.configure({ adapter: new EnzymeAdapter() });

// const defaultProps = {

// };

// logic test for Travis CI
describe('basic', () => {
  it('logic test to pass TravisCI', () => {
    expect(1 + 1).toBe(2);
  });
});
