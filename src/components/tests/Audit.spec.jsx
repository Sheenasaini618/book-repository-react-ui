import React from 'react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Audit from '../Audit'

configure({ adapter: new Adapter() });

describe('<Audit />', () => {

    let component;

    beforeEach(() => {

        component = shallow(<Audit />);

    })

    it('should match snapshot', () => {
        expect(component.debug).toMatchSnapshot();
    });
})