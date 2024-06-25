import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { WithdrawAction } from "../Redux/Action";
import axios from "axios";

const Withdraw = () => {
  const dispatch = useDispatch();
  const reduxBankData = useSelector((state) => state.BankData.Money);
  const Money = 10;

  const [AccountNumber, setAccountNumber] = useState("");
  const [WithdrawAmount, setWithdrawAmount] = useState();
  const [userData, setUserData] = useState(null);
  console.log("userData: ", userData);

  const handleDeposit = async (e) => {
    e.preventDefault();
    // dispatch(DepositAction(Money));
    await axios
      .post("http://localhost:5000/withdraw", {
        AccountNumber,
        WithdrawAmount
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="py-5">
      <div className=" mb-3">
        <h3>Name: {userData?.name}</h3>
        <h3>Balance: {userData?.balance}</h3>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            onChange={(e) => setAccountNumber(e.target.value)}
            type="text"
            placeholder="Enter Account No..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount to Withdraw</Form.Label>
          <Form.Control
            onChange={(e) => setWithdrawAmount(e.target.value)}
            type="text"
            placeholder="Enter Amount..."
          />
        </Form.Group>
        <Button onClick={handleDeposit} variant="primary" type="submit">
          Withdraw
        </Button>
      </Form>
    </Container>
  );
};

export default Withdraw;
