import React, { useEffect, useState } from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    let loggedInStatus = localStorage.getItem('loggedIn');
    if(loggedInStatus === 'true'){
      setIsLoggedIn(true);
    }
  },[]);

  const handleLogout = () => {
    localStorage.setItem('loggedIn','false')
  }

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center p-[15px] w-full">
          <div className="header-row my-2.5">
            <div className="flex flex-row gap-4 items-end justify-center">
              <Link to="/Homepage">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_uilchartgrowt.svg"
                alt="Group448"
              />
              </Link>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row gap-10 sm:hidden items-start justify-center md:ml-[0] ml-[78px] w-[30%] md:w-full">
            <Link to="/Pricing">
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Pricing
            </Text>
            </Link>
            <Link to="/About">
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              About
            </Text>
            </Link>
            <Link to="/About">
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Contact
            </Text>
            </Link>
          </div>
          {isLoggedIn ? (<div className="flex md:flex-1 flex-row gap-10 sm:hidden items-center justify-center md:ml-[0] ml-[290px] rounded-md w-[15%] md:w-full">
          <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Welcome {localStorage.getItem('firstName')}
            </Text>
            <Link to="/">
            <Button
              className="cursor-pointer font-bold font-chivo min-w-[122px] text-base text-center"
              shape="round"
              color="teal_400"
              size="xs"
              variant="fill"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Link>
          </div>) : (<div className="flex md:flex-1 flex-row gap-10 sm:hidden items-center justify-center md:ml-[0] ml-[290px] rounded-md w-[15%] md:w-full">
          <Link to="/">
            <Text
              className="text-base text-gray-900"
              size="txtChivoBold16Gray900"
            >
              Login
            </Text>
          </Link>
          <Link to="/SignUp">
            <Button
              className="cursor-pointer font-bold font-chivo min-w-[122px] text-base text-center"
              shape="round"
              color="teal_400"
              size="xs"
              variant="fill"
            >
              Sign Up
            </Button>
          </Link>
          </div>)}
          
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
