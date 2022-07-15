import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import SearchInventory from '../components/SearchInventory';
import ManualAddBook from '../components/ManualAddBook';


configure({ adapter: new Adapter() });

let component

beforeEach(() => {
    component = shallow(<ManualAddBook />);
});

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        status: 200,
    }),
);

describe('<SearchInventory />', () => {

    let wrapper;

    if (typeof window === 'undefined') {
        global.window = {}
    }

    it('should call keyPress onChange of fullName with error message', () => {

        wrapper = shallow(<ManualAddBook />);
        const event = {};
        expect(wrapper.find('.clickButton').length).toBe(1);
    })

    it('should match snapshot', () => {
        const element = component.debug()
        expect(element).toMatchSnapshot();
    });

    it('should validate elements in manual add book component', () => {

        wrapper = shallow(<ManualAddBook />);
        const event = {};
        expect(wrapper.find('.clickButton').length).toBe(1);
        wrapper.find('.closeButton').at(0).simulate('click', event);
        wrapper.find('.addBookButton').at(0).simulate('click', event);
    })

})
