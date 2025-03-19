'use client';

import Link from 'next/link';
import { CustomImage } from '../Components/image'

const Footer = () => {
  return (
    <footer className="bg-gray-400 p-4 text-center">
      <p className="pb-3 text-black text-sm bg-gray-400">© 2025 ultrafitness.com</p>
      <div className="flex justify-center gap-4 bg-gray-400">
        <Link 
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="footerLogo"
        >
          <CustomImage src="/insta.png" className='bg-gray-400' alt="Instagram" width={32} height={32} />
        </Link>

        <Link
          href="mailto:princejbygf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomImage className='bg-gray-400' src="/gmail.png" alt="Gmail" width={32} height={32} />
        </Link>

        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomImage className='bg-gray-400' src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
        </Link>

        <Link href="#" target="_blank" rel="noopener noreferrer">
          <CustomImage className='bg-gray-400' src="/twitter.png" alt="Twitter" width={32} height={32} />
        </Link>
      </div>
      <p className="mt-4 mb-1 text-sm text-black bg-gray-400">
        <Link className='bg-gray-400' href="/privacy">Privacy Policy</Link>
      </p>
      <p className="max-w-xl mx-auto text-[0.7rem] text-black bg-gray-400">
        Your privacy is our priority. We are committed to protecting your personal data and
        ensuring that your experience with us is safe and secure. Read our detailed privacy
        policy to understand how we manage your information.
      </p>
    </footer>
  );
};

export default Footer;
