import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MobileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-7 top-4 p-3" onClick={onClose}>
          <FontAwesomeIcon className="text-5xl" icon={faXmark} />
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="flex flex-col justify-center items-center space-y-4">
            <Link href="/about">About</Link>
          </li>
          <li className="flex flex-col justify-center items-center space-y-4">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="flex flex-col justify-center items-center space-y-4">
            <Link href="/partners">Our Partners</Link>
          </li>
        </ul>
      </div>
    );
  }