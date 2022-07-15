import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, render } from 'enzyme'
import { configure } from 'enzyme';
import GoogleBook from '../components/GoogleBook';
import AddGoogleBook from '../components/AddGoogleBook';

const mySpecialWindowFunction = () => {
    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
};


configure({ adapter: new Adapter() });

global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        status: 200,
    }),
);

describe('<AddGoogleBook />', () => {

    let props;
    let component;
    let wrapper;
    if (typeof window === 'undefined') {
        global.window = {}
    }

    beforeEach(() => {

        Object.defineProperty(window, 'location', {
            configurable: true,
            value: { reload: jest.fn() },
          });

        props = {
            details: {
                "volumeInfo": {
                    "id": 1,
                    "title": "Introduction to Probability",
                    "imageLinks": {
                        "smallThumbnail": "http://books.google.com/books/content?id=2HxYV9lWlEcC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                        "thumbnail": "http://books.google.com/books/content?id=2HxYV9lWlEcC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                    },
                    "authors": [
                        "John E. Freund"
                    ],
                    "description": "Featured topics include permutations and factorials, probabilities and odds, frequency interpretation, mathematical expectation, decision making, postulates of probability, rule of elimination, much more. Exercises with some solutions. Summary. 1973 edition.",
                    "price": 12566,
                    "quantity": 3
                }
            }
        }

    })

    it('should match snapshot', () => {
        component = shallow(<AddGoogleBook {...props} />);
        expect(component.debug).toMatchSnapshot();
    });

    it('should validate elements in search Book Inventory component', () => {

        wrapper = shallow(<AddGoogleBook {...props} />);
        const event = {};
        expect(wrapper.find('.dialogTitle').length).toBe(1);
        wrapper.find('.closeButton').at(0).simulate('click', event);
        wrapper.find('.approveButton').at(0).simulate('click', event);
    })
})