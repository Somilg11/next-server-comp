import React from 'react'
import HyperText from "@/components/ui/hyper-text";
import { Coffee, Github, Linkedin, Mail } from 'lucide-react';
function Footer() {
  return (
    <div>
        <footer className="border-t-2 mt-5 p-4 text-center relative bottom-0 w-full flex justify-between items-center">
        <HyperText
      className="text-sm md:text-xl font-bold text-black dark:text-white"
      text="© 2024 Blop. All rights reserved."
    />
    <div className='flex gap-2 md:gap-4 items-center'>
      <a href="https://github.com/Somilg11" target="_blank" rel="noopener noreferrer"><Github/></a>
      <a href="https://www.linkedin.com/in/somil-1101s/" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
      <a href="mailto:gsomil93@gmail.com" target="_blank" rel="noopener noreferrer"><Mail/></a>
      <a href="https://buymeacoffee.com/gsomil93q" target="_blank" rel="noopener noreferrer"><Coffee/></a>
    </div>
        </footer>
    </div>
  )
}

export default Footer