import '@testing-library/jest-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DeleteBook from '../DeleteBook';


configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        status: 200,
    }),
);
describe('<DeleteBook />', () => {

    let props, component;

    if (typeof window === 'undefined') {
        global.window = {}
    }

    beforeEach(() => {
        props = {
            details: 1
        };

        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        });

        component = shallow(<DeleteBook {...props} />);

    })

    it('should check for icon element', () => {

        const event = {};
        expect(component.find('.icon').length).toBe(1);
        component
            .find('.icon')
            .at(0)
            .simulate('click', event);
    })

    it('should match snapshot', () => {
        const element = component.debug()
        expect(element).toMatchSnapshot();
    });

    it('should validate elements in delete book component', () => {
        const event = {};
        expect(component.find('.icon').length).toBe(1);
        component.find('.closeButton').at(0).simulate('click', event);
        component.find('.deleteButton').at(0).simulate('click', event);
    })
})
