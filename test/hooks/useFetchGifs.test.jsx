import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en hook < useFetchGifs />', () => { 

    test('debe de regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs('One Punch') ) // renderizamos el hook
        const { images, isLoading } = result.current // desestructuramos el resultado de la renderizacion del hook
        expect( images ).toEqual([]) // comprobamos que el estado inicial de images sea un arreglo vacio
        expect( isLoading ).toBeTruthy() // comprobamos que el estado inicial de isLoading sea true
    })


    test('debe de retornar un arreglo de imagenes y el isLoading el false', async() => { 

        const { result } = renderHook( () => useFetchGifs('One Punch') ) // renderizamos el hook

        await waitFor( // esperamos a que se resuelva la promesa
            () => expect( result.current.images.length ).toBeGreaterThan(0) // sea mas grande que 0
        );

        const { images, isLoading } = result.current // desestructuramos el resultado de la renderizacion del hook

        expect( images.length ).toBeGreaterThan(0) // comprobamos que el estado inicial de images sea un arreglo vacio
        expect( isLoading ).toBeFalsy() 
    })

 })