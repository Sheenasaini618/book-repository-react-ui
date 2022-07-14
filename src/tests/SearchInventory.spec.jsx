import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import SearchInventory from '../components/SearchInventory';


configure({ adapter: new Adapter() });

let component

beforeEach(() => {
    component = shallow(<SearchInventory />);
});

describe('<SearchInventory />', () => {

    let wrapper;

    it('should validate placeholder in search Book Inventory component', () => {

        wrapper = shallow(<SearchInventory />);
        const event = {};
        expect(wrapper.find('.placeholder').length).toBe(1);
    })

    it('should render book ', () => {
        const element = component.debug()
        expect(element).toMatchSnapshot();
    });

})
