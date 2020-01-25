import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';


test('shoud render DashboardPage correctly', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});