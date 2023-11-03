import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en < AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={() => {}} />);
        // screen.debug();
        const input = screen.getByRole('textbox');// textbox es el tipo de input

        fireEvent.input( input, { target: { value: 'Hola Mundo' } } );// simulamos el evento de escribir en el input
        // screen.debug();
        expect( input.value ).toBe('Hola Mundo');
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Hola Mundo';
        const onNewCategory = jest.fn();// jest.fn() es una funcion que se puede pasar como argumento a otra funcion y que se puede evaluar si fue llamada, cuantas veces fue llamada, etc

        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');// colocamos area-label="form" en el form para que se pueda encontrar con el role

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );// simulamos el evento de submit en el form
        // screen.debug();

        expect( input.value ).toBe('');// despues de hacer submit comprobamos que el input este vacio
        // screen.debug();

        expect( onNewCategory ).toHaveBeenCalled();// comprobamos que la funcion haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1);// comprobamos que la funcion haya sido llamada 1 vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // comprobamos que la funcion haya sido llamada con el argumento que le pasamos

    })

    test('No debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);// comprobamos que la funcion no haya sido llamada ninguna vez
        




    })

 })