import Link from 'next/link';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>

      <header className='bg-gray-900 text-white mb-8 py-4'>
        <Navbar />
      </header>

      <main className='container mx-auto flex-1'>{children}</main>

      <footer className='bg-gray-900 text-white mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 <Link href="https://ilosrim.uz" target="_blank"><span className='text-white px-2 font-mono font-bold cursor-pointer'>ilosrim</span></Link>
        </div>
      </footer>
      
    </div>
  );
}