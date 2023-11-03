import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs'); // simulamos el llamado a useFetchGifs

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({ // simulamos el llamado a useFetchGifs
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Cargando...') ); // comprobamos que el texto Cargando... este en el documento
        expect( screen.getByText( category ) ); 
     })

     test('debe de mostrar items cuando se carga las imagenes useFetchGifs', () => { 

        const gifs = [//simulamos las imagenes que nos devuelve useFetchGifs
            { 
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/cualquier/cosa.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/cualquier/goku.jpg',
            }        
        ];

        useFetchGifs.mockReturnValue({ // Cuando ya tenemos imagenes
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length).toBe(2);// comprobamos que existan 2 elementos con el rol img
        

      })

 })