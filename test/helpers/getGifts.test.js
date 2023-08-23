/* eslint-disable no-undef */
import { getGifts } from "../../src/helpers/getGifts"

describe('Testing in getGifts helper', () => {
  test('should return a gifts array', async() => {
    const gifts = await getGifts('One Punch')
    expect(gifts.length).toBeGreaterThan(0)

    //test in order to test a git with the structure we are expecting
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
  
})
