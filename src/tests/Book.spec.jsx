import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme'
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe('<Book />', () => {

  let props, component;
  let wrapper;

  beforeEach(() => {
    props = {
      details:
      {
        'id': '1',
        'title': 'Probability Basics',
        'imageLinks': {
          'smallThumbnail': 'http://books.google.com/books/content?id=3yq_oQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          'thumbnail': 'http://books.google.com/books/content?id=3yq_oQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
        },
        'authors': ['Michael Biden'],
        'description': 'This book is all about Probability Basics, This book is all about Probability Basics,This book is all about Probability Basics.',
        'price': 1000,
        'quantity': 8
      }
    };
    component = shallow(<Book {...props} />);
  });

  it('should match snapshot', () => {
    const element = component.debug()
    expect(element).toMatchSnapshot();
  });
})