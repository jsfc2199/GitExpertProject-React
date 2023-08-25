/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import GiftGrid from "../../src/components/GiftGrid";
import useFetchGifts from "../../src/hooks/useFetchGifts";

jest.mock("../../src/hooks/useFetchGifts");

describe("Pruebas en giftGrid", () => {
  const category = "one punch";

  test("should show loading", () => {
    useFetchGifts.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GiftGrid category={category} />);

    expect(screen.getByText("Cargando"));
    expect(screen.getByText(category));
  });

  test("should show items using useFetchGifts", () => {

    //creamos info falsa pero con la estructura esperada
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https: //localhost/saitama. jpg",
      },
      {
        id: "1234",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifts.mockReturnValue({
      images: gifs,
      isLoading: false, //si ya hay imagenes esto debe ir en false
    });

    render(<GiftGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
