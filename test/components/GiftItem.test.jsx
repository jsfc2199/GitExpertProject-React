import { render, screen } from "@testing-library/react";
import GiftItem from "../../src/components/GiftItem";

/* eslint-disable no-undef */
describe("Testing in GiftItem", () => {
  const title = "This is a title";
  const url = "https://url.com/";

  test("should match with snapshot", () => {
    const { container } = render(<GiftItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("should show the image with the url and ALT indicated", () => {
    render(<GiftItem title={title} url={url} />);

    //forma 1
    expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title);

    //forma 2 evitando repedicion de codigo
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title as a text in the component", () => {
    render(<GiftItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
