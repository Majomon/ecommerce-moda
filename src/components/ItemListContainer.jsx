import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const { idcategory } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const products = idcategory
      ? query(collection(db, 'products'), where('idcategory', '==', idcategory))
      : collection(db, 'products');
    getDocs(products)
      .then((result) => {
        const list = result.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setItems(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idcategory]);

  return (
    <div className="cargando">
      <div>{loading ? <CircularProgress /> : <ItemList items={items} />}</div>
    </div>
  );
}
