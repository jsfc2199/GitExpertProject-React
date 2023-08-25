/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Tests in add category component', () => {
  test('should change value on textbox ', () => {

    //sujeto de pruebas donde el onNewCategpry le pasamos una funcion "vacia" ya que de por si es una funcion lo que estamos esperado
    render(<AddCategory onNewCategory={() => {}}/>)

    //solo hay un textbox en este componente
    const input = screen.getByRole('textbox')

    //disparamos el evento y como la propiedad onChange es espera un event.target.value se lo pasamos
    fireEvent.input(input, {target: {value: 'saitama'}})

    expect(input.value).toBe('saitama')
    
  })

  test('should call onNewCategory if input has value', () => {

    //valor a evaluar
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    //cambiando valor del input
    fireEvent.input(input, {target: {value: inputValue}})

    //llamamos la ejecucion del submit
    fireEvent.submit(form)

    //luego de hacer submit tenemos configurado de que la caja de texto (input) sea vacio
    expect(input.value).toBe('')

    //evaluamos que la funcion haya sido llamada
    expect(onNewCategory).toHaveBeenCalled()

    //evaluamos que la funcion se haya llamado al menos una vez
    expect(onNewCategory).toHaveBeenCalledTimes(1)

    //evaluamos si se llamó con el valor de la caja de texto
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCategory if input has not value', () => {
 
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory}/>)
    
    const form = screen.getByRole('form')

    //llamamos la ejecucion del submit
    fireEvent.submit(form)

    //evaluamos que la funcion se haya llamado al menos una vez
    expect(onNewCategory).toHaveBeenCalledTimes(0)

    //evaluamos si se llamó con el valor de la caja de texto
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
