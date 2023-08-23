import { render } from "@testing-library/react";
import GiftItem from "../../src/components/GiftItem";

/* eslint-disable no-undef */
describe('Testing in GiftItem', () => {
  test('should match with snapshot', () => {

    const title= 'This is a title';
    const url = 'https://url.com';

    const {container} = render(<GiftItem title={title} url={url}/>)

    expect(container).toMatchSnapshot()
    
  })
  
})
