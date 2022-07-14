import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, render } from 'enzyme'
import { configure } from 'enzyme';
import GoogleBook from '../components/GoogleBook';


configure({ adapter: new Adapter() });
describe('<GoogleBook />', () => {

    let props, component, wrapper;

    beforeEach(() => {
        // charAt: jest.fn()
        // toUpperCase: jest.fn()

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

        component = shallow(<GoogleBook {...props} />);
    })
    
    it('should render book ', () => {
        const element = component.debug()
        expect(element).toMatchSnapshot();
    });
})