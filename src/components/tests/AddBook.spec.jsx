import React from 'react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import AddBook from '../../pages/AddBook'

configure({ adapter: new Adapter() });

describe('<AddBook />', () => {

    let component;

    beforeEach(() => {

        component = shallow(<AddBook />);

    })

    it('should match snapshot', () => {
        expect(component.debug).toMatchSnapshot();
    });
})