import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('tegoCart'));
        localData && setCart(localData)
    }, []);

    useEffect(() => {
        localStorage.setItem('tegoCart', JSON.stringify(cart))
    }, [cart]);

    const addItem = (item) => {
        const existsInCart = cart.find((prod) => prod.id === item.id)
        if (existsInCart) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    if (prod.quantity + item.quantity <= prod.stock) {
                        return { ...prod, quantity: prod.quantity + item.quantity }
                    } else {
                        toast.error(`No tenemos tanto stock de este producto. Maximo ${prod.stock}`, {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })
                        return { ...prod, quantity: prod.stock }
                    }

                } else {
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, item])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        //setCart lo uso porque voy a modificar el array
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        //Devuelve la primer coincidencia
        return cart.some((prod) => prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity * prod.price, 0)
    };

    return (
        <CartContext.Provider value={{ cart, clear, isInCart, removeItem, addItem, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)

