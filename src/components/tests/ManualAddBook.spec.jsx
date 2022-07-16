import React from 'react'
import Book from '../Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import ManualAddBook from '../ManualAddBook';


configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        status: 200,
    }),
);

describe('<SearchInventory />', () => {

    let component

    if (typeof window === 'undefined') {
        global.window = {}
    }

    beforeEach(() => {

        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
        });

        component = shallow(<ManualAddBook />);

    });

    it('should call keyPress onChange of fullName with error message', () => {

        const event = {};
        expect(component.find('.clickButton').length).toBe(1);
    })

    it('should match snapshot', () => {
        const element = component.debug()
        expect(element).toMatchSnapshot();
    });

    it('should validate elements in manual add book component', () => {

        const event = {};
        expect(component.find('.clickButton').length).toBe(1);
        component.find('.closeButton').at(0).simulate('click', event);
        component.find('.addBookButton').at(0).simulate('click', event);
    })

})
