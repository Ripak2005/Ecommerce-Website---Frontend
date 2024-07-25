/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CartData } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import { Button, Container, Image } from "react-bootstrap";
import { RiSecurePaymentLine } from "react-icons/ri";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const Payment = () => {
  const { cart, subTotal, fetchCart } = CartData();
  const [address, setAddress] = useState(null);
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const params = useParams();

  async function fetchAddress() {
    try {
      const { data } = await axios.get(`${server}/api/address/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setAddress(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAddress();
  }, []);

  const paymentCod = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/order/new/cod`,
        {
          method,
          phone: address.phone,
          address: address.address,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
      navigate("/ordersuccess");
      fetchCart();
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  const paymentOnline = () => {};
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <h2 className="mt-5">Proceed to Payment</h2>

          <h6>Products</h6>

          {cart &&
            cart.map((e, i) => (
              <div
                className="d-flex justify-content-center align-item-center"
                style={{ gap: "1rem" }}
                key={i}
              >
                <Image src={`${server}/${e.product.image}`} alt="" width={60} />
                <p>{e.product.title}</p>
                <p>₹ {e.product.price}</p>
                <p>Quantity - {e.quantity}</p>
              </div>
            ))}

          <div className="mt-3">Total price to be Paid - ₹ {subTotal}</div>

          {address && (
            <div>
              <span>Address - {address.address}</span>
              <br />
              <span>Phone - {address.phone}</span>
            </div>
          )}

          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>Choose Payment method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
          <br />
          <Button
            onClick={method === "cod" ? paymentCod : paymentOnline}
            className="mt-2"
          >
            Proceed <RiSecurePaymentLine />
          </Button>
        </Container>
      )}
    </>
  );
};

export default Payment;
