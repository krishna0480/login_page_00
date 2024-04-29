"use client"
import { Button, Flex, IconButton, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHamburger, FaTimes } from 'react-icons/fa'

function Nav() {
  const [display,changeDisplay] = useState('none')

  return (
<>
    <Flex h={"70px"} my={"10px"} bg={"#fff"} maxW={"1240px"} mx={"auto"}>
      <Flex >
      <Image src='https://assets-global.website-files.com/661cf9dc0c2f6d196e3413df/661e47d1d651560773633d0f_Logo.svg' boxSize={"70px"}/>
      <Flex position={'fixed'} right={"2rem"} top={"1rem"}>
        <Flex display={["none","none","flex","flex"]}>
          <Link href={"#"}>
          <Button colorScheme='blue'mr={"5px"}>Home</Button>
          </Link>
          <Link href={"#"}>
          <Button colorScheme='blue' mr={"5px"}>Home</Button>
          </Link>
          <Link href={"#"}>
          <Button colorScheme='blue' mr={"5px"}>Home</Button>
          </Link>
        </Flex>
        <Flex display={["flex","flex","none","none"]}>
          <IconButton icon={<FaHamburger />} colorScheme={"blue"}  display={["flex","flex","none","none"]} aria-label={'Open Menu'} onClick={()=> changeDisplay('display')}/>
        </Flex>
      </Flex>
      </Flex>
     
    </Flex>
    <Flex 
    w={"100vw"}
    bgColor={"gray.50"}
    zIndex={10}
    h={"100vh"}
    pos={"fixed"}
    top={"0"}
    left={"0"}
    overflowY={"auto"}
    flexDir={"column"}
    display={display}
    >
      <Flex justify={"flex-end"}>
        <IconButton icon={<FaTimes />} colorScheme={"blue"}  display={["flex","flex","none","none"]} aria-label={'Open Menu'} onClick={() => changeDisplay('none')}/>
      </Flex>
    <Flex flexDir={"column"} align={"center"}>
      <Link href={"#"}>
          <Button colorScheme='blue'mr={"5px"}>Home</Button>
          </Link>
          <Link href={"#"}>
          <Button colorScheme='blue' mr={"5px"}>Home</Button>
          </Link>
          <Link href={"#"}>
          <Button colorScheme='blue' mr={"5px"}>Home</Button>
          </Link>
      </Flex>
      </Flex>
</>
  )
}

export default Nav