import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink}   from 'react-router-dom'; 
import { useCart } from './CartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `0px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  const {cartQuantity} = useCart()  
    return (
    <IconButton aria-label="cart" component={RouterLink} to={`/cart`}>
      <StyledBadge badgeContent={cartQuantity()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}