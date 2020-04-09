import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPage } from '../analytics';

export default ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPage(pathname);
  }, [pathname]);
  return <>{children}</>;
};
