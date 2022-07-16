import React from 'react'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import AddGoogleBook from '../AddGoogleBook';

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

        component = shallow(<AddGoogleBook {...props} />);

    })

    it('should match snapshot', () => {
        expect(component.debug).toMatchSnapshot();
    });

    it('should validate elements in search Book Inventory component', () => {

        const event = {};
        expect(component.find('.dialogTitle').length).toBe(1);
        component.find('.closeButton').at(0).simulate('click', event);
        component.find('.approveButton').at(0).simulate('click', event);
    })
})