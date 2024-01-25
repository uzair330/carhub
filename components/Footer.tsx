import { footerLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    
  return (
   <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
    <div className="flex flex-col justify-start items-start gap-6">
        <Image src="/logo.svg" alt="logo" width={118} height={18}/>
        <p className='text-base text-gray-700'>
            Car Hub 2014 <br/>
            All right reserved &copy;
        </p>
    </div>
    <div className="footer__links">
    {
        footerLinks.map((link)=>(
            <div key={link.title} className="footer__link">
                <h3 className='font-bold'>{link.title}</h3>
                {
                    link.links.map((items)=>(
                        <Link key={items.url} href={items.url} className="text-gray-500">
                            
                                {items.title}
                            
                        
                        </Link>
                    ))
                }
            </div>
        ))
    }
    </div>
</div>
<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
<p className=''>@2024 Car Hub All right reserved</p>
<div className="">
    <Link href={'/'}  className='text-gray-500'>
    Privacy policy
    </Link>
    
</div>
<div className="">
<Link href={'/'}  className='text-gray-500'>
    Term & conditions
    </Link>
</div>
</div>
   </footer>
  )
}

export default Footer
