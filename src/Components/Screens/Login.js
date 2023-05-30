/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import "../../App.css";
import sologo from'../../assets/sollogo.png';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { user_login } from "./user_login";


function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [loginType,setLoginType]=useState("Admin");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    
    function PostLogin(){
      console.warn(loginType,email,password)
      let item={loginType:"password", email,password};
    fetch('http://52.1.46.82:3001/api/customer/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // add any other headers you need here
        "Accept":'application/json'
      },
      body: JSON.stringify(item),
    }).then ((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
       // handle the response data here
      { if(data.statusCode===200){
        handleLogin()
        navigate('about')
      setEmail('')
    setPassword('')}
        if(data.statusCode===401){
          // eslint-disable-next-line no-lone-blocks
          {alert("password incorrect")}
        // eslint-disable-next-line no-unused-expressions
        }else ( null)
      }
      
    })
    .catch((error) => {
      // handle any errors here
    });
    
    }
      const handleCheckEmail = text => {
        let re = (/\S+@\S+\.\S+\./);
        let regex =( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.s]?[0-9]{4,6}$/im);
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
          setCheckValidEmail(false);
        } else {
          setCheckValidEmail(true);
        }
      };
    
      const checkPasswordValidity = value => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
          return 'Password must not contain Whitespaces.';
        }
    
        /*const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
          return 'Password must have at least one Uppercase Character.';
        }
    
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
          return 'Password must have at least one Lowercase Character.';
        }
    
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
          return 'Password must contain at least one Digit.';
        }
    
        // const isContainsSymbol =
        //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        // if (!isContainsSymbol.test(value)) {
        //   return 'Password must contain at least one Special Symbol.';
        // }*/
    
        return null;
      };
    
      const handleLogin = () => {
        const checkPassowrd = checkPasswordValidity(password);
        if (!checkPassowrd) {
          user_login({
            email: email,
            password: password,
          })
           .then(result => {
              console.log(result);
              if (result.status === 200) {
                //AsyncStorage.setItem('AccessToken', result.data.token);
               navigate('About')
      
              }
            })
            .catch(err => {
              console.error(err);
            });
        } else {
          alert(checkPassowrd);
        }
       
    
      
      };


  return (



    <div className="App">
      <div
        className="Division"
        style={{
          backgroundColor: "#263a96",
          display: "grid",
          alignItems: "center",
        }}
      >
        {/* Content for the first division */}
        <div style={{ display: "grid", placeItems: "center" }}>
          <img
            src={sologo}
            style={{ height: 311.48, width: 300 }}
            alt="logo img"
          />
          <text style={{ fontSize: 16, fontWeight: 700, color: "#ffffff" }}>
            An IT Troubleshooting Service
          </text>
        </div>
      </div>
      <div
        className="Division"
        style={{
          backgroundColor: "#fafafa",
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {/* Content for the second division */}
        <div style={{}}>
          <h1>Login</h1>
          <h6 style={{ marginBottom: 50 }}>
            Please enter your login details to sign in.
          </h6>
          <div>
            <Form.Floating
              className="mb-3"
              style={{ color: "rgba(15, 23, 30, 0.9)", width: 434, height: 60 }}
            >
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
              <span className="icon-span" onClick={togglePasswordVisibility}>
        {passwordVisible ? <RiEyeLine/> : <RiEyeOffLine />}
      </span>
            </Form.Floating>
          </div>

          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <Form.Check aria-label="option 1" />
              <text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#818181",
                  marginLeft: 5,
                }}
              >
                Keep me logged in
              </text>
            </div>
            <a
              href="next"
              style={{
                textDecoration: "none",
                color: "rgba(15, 23, 30, 0.9)",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Forgetpassword?
            </a>
          </div>
          <div>
            {/* <Link to="/Home"> */}
            <Button onClick={()=>PostLogin()}
              style={{
                height: 60,
                width: 434,
                backgroundColor: "#263a96",
                marginTop: 36,
              }}
            >
              <text style={{ fontSize: 20, fontWeight: 700, color: "#ffffff" }}>
                Log In
              </text>
            </Button>
            {/* </Link> */}
          </div>
          <div style={{marginTop:34}}>
          <text
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "rgba(129, 129, 129, 1)",
            }}
          >
            {" "}
            Don’t have an account?{" "}
            <a
              href="nexts"
              style={{
                color: "rgba(38, 58, 150, 1)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 400,
              }}
            >
              {" "}
              Sign Up
            </a>{" "}
          </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;