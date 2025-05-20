'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import LogoLink from "../components/LogoLink";
import DesktopNavLinks from "../components/DesktopNavLinks";
import MobileMenuButton from "../components/MobileMenuButton";
import MobileDrawer from "../components/MobileDrawer";
import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
};
<>
<div className="hidden relative py-6 sm:flex flex-col justify-center">
  {/* Logo and Desktop Navigation Links */}
  <LogoLink />
  <DesktopNavLinks />
</div>

<div className="sm:hidden relative flex flex-row my-4">
  {/* Logo, Mobile Menu Button, Mobile Drawer */}
  <LogoLink />
  <MobileMenuButton />
  <MobileDrawer />
</div>
</>

return (
    <>
      <div className="hidden relative py-6 sm:flex flex-col justify-center border-b">
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
}