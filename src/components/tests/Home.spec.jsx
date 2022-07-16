import React from 'react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Home from '../../pages/Home'

configure({ adapter: new Adapter() });

describe('<Home />', () => {

    let component;

    beforeEach(() => {

        component = shallow(<Home />);

    })

    it('should match snapshot', () => {
        expect(component.debug).toMatchSnapshot();
    });
})