import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../component/AppAppBar';
import Hero from './Hero';
import Features from './Features';
import FAQ from './FAQ';
import Footer from "../../component/Footer";

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <Features />
        <FAQ />
        <Footer />
      </div>
    </AppTheme>
  );
}
