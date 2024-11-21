"use client";
import Navbar from "./_components/navbar/page";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {Provider} from "react-redux";
import { dataStore } from "@/lib/reduxStore/dataStore";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Provider store={dataStore}>
            <Navbar />
            {children}
            <h2>Footer</h2>
            <Toaster/>
            </Provider>
            
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
