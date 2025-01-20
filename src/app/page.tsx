'use client'

import { Burger, Button, Image, NavLink, Tabs } from "@mantine/core";
import clsx from 'clsx';
import React, { useState } from "react";

import { headerConfig } from "@/config/header";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useDisclosure } from '@mantine/hooks';

export default function Home() {

  const [navItemSelect, setNavItemSelect] = useState('');
  const [opened, { toggle }] = useDisclosure();

  const { navItens } = headerConfig;



  return (
    <>
      <header className="flex w-full justify-between p-5 header fixed h-16" id="header">
        <div className="container flex mx-auto w-full">
          <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" className=" lg:hidden" />

          <div className="flex-1 flex gap-7">
            {navItens.map((item, index) => (
              <div key={index}
                className={clsx(
                  'transition-all hidden hover:border-primary/10 hover:border-b', 
                  navItemSelect === item.href ? 'border-primary border-b ' : 'border-primary/10',
                  'lg:flex'
                )}
              >
                <NavLink
                  href={item.href}
                  label={item.label}
                  onClick={() => setNavItemSelect(item.href)}
                  className="p-0 mb-4"
                />
              </div>
            ))
            }
          </div>

          <div className="w-2/4 flex justify-end gap-6">
            < FaGithub size={30} />
            < FaLinkedin size={30} />
            < FaEnvelope size={30} />
          </div>

        </div>

      </header>
      <main className="container mx-auto">


        <section className="flex  justify-between h-screen items-center" id="about-me">
          <div>
            <h1 className="text-5xl font-bold">Olá, eu sou o Alisson!</h1>
            <p className="text-xl">Desenvolvedor FullStack</p>
          </div>
          <div className="w-2/4 hidden lg:flex  items-center justify-center">
            <Image src="/mypicture.png" alt="developer" className="w-[400px]" />
          </div>
        </section>
        
      </main>
    </>
  );
}
