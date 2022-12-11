import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = (props) => {

// por ahora IttemDetail recibe un unico producto harcodedado y està incluido en la app.js

    let mockingItem = 
        {
          id: 1,
          name: "Producto 1",
          price: 5.99,
          description: "Un producto muy bueno",
          pictureURL: "https://fakeimg.pl/250x100/",
          stock: 5,
        };

const [item, setItem] = useState({});
const [loading, setLoading] = useState(false);

const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(mockingItem);
      setLoading(false);
    }, 2000);
  });    

  useEffect(() => {
    setLoading(true);
    getItem
      .then((data) => {
        console.log(data)
        setItem(data);
      })
      .catch(() => {
        console.log("ha ocurrido un error al obtener detalles del producto", Error);
      });
  }, []);

  return ( 
<>
{loading 
? ( <div className="h-96">
          <br></br>
          <p className="text-gray-400 animate-bounce text-2xl items-center flex justify-center">
            {" "}
            -  -  obteniendo detalles del producto  -  -{" "}
          </p>
          <br></br>
    </div>
  ) 
: (
        <div>
            
          <ItemDetail producto={item} />

        </div>
  )}

</>
   );
;
};
export default ItemDetailContainer;