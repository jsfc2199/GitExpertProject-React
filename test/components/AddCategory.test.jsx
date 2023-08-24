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
  
})
