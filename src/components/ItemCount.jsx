import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import { Stack } from '@mui/system';

function ItemCount({ stock, initial, onAdd }) {
  const [showButton, setShowButton] = useState(false);
  const [count, setCount] = useState(initial);
  return (
    <div className="item-div">
      <div className="item-qty">
        <Button
          style={{
            fontSize: '2rem  ',
            borderRadius: '50%',
            backgroundColor: 'rgb(255, 238, 0)',
            height: '4rem',
            width: '30px',
            color: 'white',
          }}
          variant="text"
          onClick={() => {
            if (count > initial) {
              setCount(count - 1);
            }
          }}
        >
          -
        </Button>
        <p>{count}</p>
        <Button
          style={{
            fontSize: '2rem  ',
            borderRadius: '50%',
            backgroundColor: 'rgb(255, 238, 0)',
            height: '4rem',
            width: '5px',
            color: 'white',
          }}
          variant="text"
          onClick={() => {
            if (count < stock) {
              setCount(count + 1);
            }
          }}
        >
          +
        </Button>
      </div>
      {!showButton ? (
        <Button
          className="btnItemCount"
          onClick={() => {
            if (count > 0) {
              onAdd(count);
              setShowButton(true);
            }
          }}
          startIcon={<AddShoppingCartIcon />}
        >
          Agregar al Carrito
        </Button>
      ) : (
        <Stack className="seguirComprando">
          <Button
            className="btnPostCompra"
            component={RouterLink}
            to={`/`}
            variant="text"
            color="secondary"
          >
            Seguir comprando
          </Button>
          <Button
            className="btnPostCompra"
            component={RouterLink}
            to={`/cart`}
            variant="contained"
          >
            Ir al Carrito
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default ItemCount;
