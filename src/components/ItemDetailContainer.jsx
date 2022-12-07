import { CircularProgress } from "@mui/material";
import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { idproduct } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Le digo a mi base de datos en que coleccion esta
    const productsCollection=collection(db,"products")
    //Hacer una referencia que traiga el ID
    const referenciaDoc=doc(productsCollection,idproduct)

    //Traer el documento
    getDoc(referenciaDoc)

    .then((result)=>{
      setItem({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
  }, [idproduct]);

return(
  <div>
  {loading ? <CircularProgress/> : <ItemDetail item={item} />}
  </div>
)
}