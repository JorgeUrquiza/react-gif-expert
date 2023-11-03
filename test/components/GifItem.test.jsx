import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => { 
  
      const title = 'Saitama'
      const url   = 'https://www.google.com/'

  test('hacer match con el snapshot', () => { 
    
    const { container } = render( <GifItem title={title} url={url} /> ) // renderizar el componente y obtener el container
    expect( container ).toMatchSnapshot(); // snapshot sirve para hacer una instantanea de como se ve el componente

   });

   test('Debe de mostrar la imagen con el url y el alt indicado', () => { 

    render( <GifItem title={title} url={url} /> );
    // screen.debug(); // sirve para ver el html que se renderiza en el componente en la consola
    // expect( screen.getByRole('img').src).toBe( url ) // screen.getByRole('img') sirve para buscar un elemento por su etiqueta html
    // expect( screen.getByRole('img').alt).toBe( title ) // screen.getByRole('img') sirve para buscar un elemento por su etiqueta html
    const { src, alt } = screen.getByRole('img')// Forma corta de arriba
    expect( src ).toBe( url )
    expect( alt ).toBe( title )

    })

    test('Debe de mostar el titulo en el componenete', () => { 

      render( <GifItem title={title} url={url} /> );
      expect( screen.getByText(title) ).toBeTruthy(); // Prueba de que el texto se renderizo correctamente

     })

 })

 // El container sirve para hacer match con el snapshot y ver si el componente se renderiza correctamente