import React from 'react';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import NavbarTwo from '../NavbarTwo';

configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        status: 200,
    }),
);

describe('<NavbarTwo />', () => {

    let props;
    let component;

    beforeEach(() => {

        props = {
            setData : jest.fn(),
            data : ""
        }

        component = shallow(<NavbarTwo {...props} />);

    })

    it('should match snapshot', () => {
        expect(component.debug).toMatchSnapshot();
    });
})