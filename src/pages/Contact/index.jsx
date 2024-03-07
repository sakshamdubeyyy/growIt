import React from 'react'
import Header from 'components/Header'
import { Text, Input, Button } from 'components'

export default function ContactPage() {
  return (
    <div className='"bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full'>
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className='flex md:flex-1 flex-col items-start justify-start rounded-md w-[49%] md:w-full'>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                    className="leading-[58.00px] sm:text-[38px] md:text-[44px] text-[52px] text-gray-900 w-full"
                    size="txtChivoBold52"
                >
                    We help any business to get analytics and sales marketing
                </Text>
                <Text
                    className="leading-[28.00px] text-bluegray-600 text-lg w-[83%] sm:w-full"
                    size="txtChivoRegular18Bluegray600"
                >
                    The fastest and simple way to generate growing business
                    solutions with our products
                </Text>
            </div>
            <div className='flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1112px] mt-10 mx-auto p-0.5 md:px-5 w-full'>
                <Text
                    className="text-black-900 text-lg"
                    size="txtChivoRegular18"
                >
                    Email Address:
                </Text>
                <Input
                      name="FormInput"
                      placeholder="Email Address"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                      wrapClassName="border border-bluegray-200 border-solid w-[700px]"
                      type="email"
                    //   onChange={handleUserChange}
                ></Input>
            </div>
            <div className='flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1112px] mt-10 mx-auto p-0.5 md:px-5 w-full'>
                <Text
                    className="text-black-900 text-lg"
                    size="txtChivoRegular18"
                >
                    Your Full Name:
                </Text>
                <Input
                      name="FormInput"
                      placeholder="Name"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full"
                      wrapClassName="border border-bluegray-200 border-solid w-[700px]"
                      type="email"
                ></Input>
            </div>
            <div className='flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1112px] mt-10 mx-auto p-0.5 md:px-5 w-full'>
                <Text
                    className="text-black-900 text-lg"
                    size="txtChivoRegular18"
                >
                    Your Message for us:
                </Text>
                <Input
                      name="FormInput"
                      placeholder="Message"
                      className="p-0 placeholder:text-bluegray-200 text-base text-left w-full h-24"
                      wrapClassName="border border-bluegray-200 border-solid w-[900px]"
                      type="text"
                    //   onChange={handleUserChange}
                ></Input>
            </div>
            <Button
                  className="cursor-pointer min-w-[456px] sm:min-w-full text-base text-center mt-10 w-full"
                  shape="round"
                  color="teal_400"
                  size="xs"
                  variant="fill"
            >
                  Send
            </Button>
        </div>
    </div>
  )
}
