/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifts from './../../src/hooks/useFetchGifts';

describe('Pruebas en el hook useFethGifts', () => {

  test('should return the initial state', () => {

    const {result} = renderHook(() => useFetchGifts('one punch'))
    const {images, isLoading} = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy  
  })

  test('should return an images array and the isLoading in false', async() => {

    const {result} = renderHook(() => useFetchGifts('one punch'))
    
    //esperamos que se carguen las imagenes
    await waitFor(
      //el expect es un booleano, y estamos esperando hasta que esto sea verdad
      () => expect(result.current.images.length).toBeGreaterThan(0) , 
      {
        timeout: 2000
      }

      //si lo anterior nunca se ejecuta o se demora mucho pomodes usar un segundo argumento
    )


    const {images, isLoading} = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
  
})

