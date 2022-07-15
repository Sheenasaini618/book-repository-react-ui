import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, render } from 'enzyme'
import { configure } from 'enzyme';
import DeleteBook from '../components/DeleteBook';


configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        status: 200,
    }),
);
describe('<DeleteBook />', () => {

    let props, wrapper;

    beforeEach(() => {
        props = {
            details: 1
        };
    })

    it('should check for icon element', () => {

        wrapper = shallow(<DeleteBook {...props} />);
        const event = {};
        expect(wrapper.find('.icon').length).toBe(1);
        wrapper
            .find('.icon')
            .at(0)
            .simulate('click', event);
    })
})

describe('<DeleteBook />', () => {

    let props, component, wrapper;

    beforeEach(() => {
        props = {
            details: []
        };

        component = shallow(<DeleteBook {...props} />);
    });

    if (typeof window === 'undefined') {
        global.window = {}
    }

    it('should match snapshot', () => {
        const element = component.debug()
        expect(element).toMatchSnapshot();
    });

    it('should validate elements in delete book component', () => {

        wrapper = shallow(<DeleteBook {...props} />);
        const event = {};
        expect(wrapper.find('.icon').length).toBe(1);
        wrapper.find('.closeButton').at(0).simulate('click', event);
        wrapper.find('.deleteButton').at(0).simulate('click', event);
    })
})