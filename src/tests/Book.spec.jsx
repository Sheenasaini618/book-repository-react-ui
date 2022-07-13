import React from 'react'
import Book from '../components/Book'
import '@testing-library/jest-dom'
import {data} from '../mockData/allBooks.json'
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, render } from 'enzyme'
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
describe('<Book />', () => {

    let props;

beforeEach(() => {
    charAt: jest.fn()
    toUpperCase: jest.fn()
    props = {
      details: [
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
        }],
    };
    // const book = props.details[0];
  });

  const setup = props => {
    const componentDebug =  render(<Book {...props} />);
    console.log(componentDebug.debug())
  };

  it('should render Book when data is available', () => {
    const { container } = setup(props);
    console.log("@@@@",props.details.authors[0]);
    // expect(container).toMatchSnapshot();
  });

//   it('should call fetch Audit on mount', () => {
//     setup(props);
//     expect(props.fetchAudit).toHaveBeenCalled();
//   });

//   it('should render Audit report when NO audit report is available', () => {
//     props.audit = [];
//     const { container } = setup(props);
//     expect(container).toMatchSnapshot();
//   });


})