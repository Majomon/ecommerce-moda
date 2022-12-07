import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from './CartContext';
import ItemCount from './ItemCount';
import { Box } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ItemDetail({ item }) {
  const [cant, setCant] = useState(1);
  const { id, title, pictureUrl, price, description, alt, stock, initial } =
    item;
  const { addItem } = useCart();

  const onAdd = (cant) => {
    toast.success(`Agregaste al carrito ${cant} 👌 `, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    let purchase = {
      id,
      title,
      price,
      stock,
      pictureUrl,
      quantity: cant,
    };
    addItem(purchase);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <div className="prod-div-celular">
          <img src={pictureUrl} alt={alt} className="prod-img-celular" />
          <div
            className="prod-div_description"
            style={{
              width: '100%',
            }}
          >
            <h2>{title}</h2>
            <h4 style={{ color: '#EAA730' }}>${price}</h4>
            <h5>{description}</h5>
            <ItemCount
              stock={stock}
              initial={initial}
              onAdd={onAdd}
              count={cant}
              setCount={setCant}
            />
          </div>
          <div className="item-detail-compartir_celular">
            <h4>Compartir</h4>
            <div className="caja_botones_compartir">
              <a
                href="https://www.facebook.com/"
                className="btn__facebok btn__compartir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/"
                className="btn__twitter btn__compartir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=1138612819&text=Buenos%20dias.%20Necesito%20ayuda%20"
                className="btn__whatapp btn__compartir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://ar.pinterest.com/"
                className="btn__pinterest btn__compartir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        <div className="prod-div-md">
          <img src={pictureUrl} alt={alt} className="prod-img-md" />
          <div className="prod-div-div-md">
            <div className="prod-div_nombre_precio_pago">
              <h4>{title}</h4>
              <h4 style={{ color: '#EAA730' }}>${price}</h4>
              <p>Por el momento el pago se realiza por Transferencia</p>
            </div>

            <ItemCount
              stock={stock}
              initial={initial}
              onAdd={onAdd}
              count={cant}
              setCount={setCant}
            />
            <div className="ico-sociales_itemDetail">
              {/*               <a href="https://twitter.com/intent/tweet?text=http%3A//localhost%3A3002/product/id">
                <i className="bi bi-twitter"></i>
              </a> */}

              <div className="d-flex item-detail-ico_Whatapp">
                <a
                  href="https://api.whatsapp.com/send?phone=1138612819&text=Buenos%20dias.%20Necesito%20ayuda%20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
                <p>¿Tienes dudas? Escribinos y con gusto te asesoramos.</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
}
