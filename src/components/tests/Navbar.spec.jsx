import React from 'react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import NavbarTwo from '../NavbarTwo';
import Navbar from '../Navbar';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {

    let component;

    beforeEach(() => {

        component = shallow(<Navbar />);

    })

    it('should match snapshot', () => {
        expect(component.debug).toMatchSnapshot();
    });
})