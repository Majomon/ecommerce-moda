import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useCart } from './CartContext';
import { Box } from '@mui/system';

function CartItem({ item }) {
  const { removeItem } = useCart();
  return (
    <>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <div className="cartItem">
          <div className="cartItemCuadro">
            <img src={item.pictureUrl} alt={item.title} className="thumb-img" />
            <div>
              <div>
                <p>
                  <strong>Articulo: </strong>
                  <span>{item.title}</span>
                </p>
                <p>
                  <strong>Cantidad: </strong> <span>{item.quantity}</span>
                </p>
                <p>
                  <strong>Precio por unidad: </strong>{' '}
                  <span>${item.price}</span>
                </p>
                <div className="text-center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => removeItem(item.id)}
                  >
                    <DeleteIcon fontSize="small" color="secondary" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          padding: '1rem',
        }}
      >
        <div className="cartItemMd d-flex align-items-center justify-content-between">
          <img src={item.pictureUrl} alt={item.title} className="thumb-img" />

          <div className="d-flex w-100 p-2 justify-content-around">
            <div>
              <p>
                <strong>Articulo: </strong>
                <span>{item.title}</span>
              </p>
              <p>
                <strong>Cantidad: </strong> <span>{item.quantity}</span>
              </p>
              <p>
                <strong>Precio por unidad: </strong> <span>${item.price}</span>
              </p>
            </div>
            <div className="d-flex flex-column justify-content-around">
              <p>
                <strong>Eliminar</strong>
              </p>
              <IconButton
                aria-label="delete"
                onClick={() => removeItem(item.id)}
              >
                <DeleteIcon style={{ fontSize: '2rem' }} color="secondary" />
              </IconButton>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default CartItem;
