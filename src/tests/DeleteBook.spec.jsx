import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, render } from 'enzyme'
import { configure } from 'enzyme';
import DeleteBook from '../components/DeleteBook';


configure({ adapter: new Adapter() });
describe('<Book />', () => {

    let props, component, wrapper;

    beforeEach(() => {
        // charAt: jest.fn()
        // toUpperCase: jest.fn()
        props = {
            details: 1
        };
    })
  
  it('should call keyPress onChange of fullName with error message', () => {

        wrapper = shallow(<DeleteBook {...props} />);
        const event = {};
        expect(wrapper.find('.icon').length).toBe(1);
        wrapper
            .find('.icon')
            .at(0)
            .simulate('click', event);
    })
})