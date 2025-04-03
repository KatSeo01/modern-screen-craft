
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import BulkUpdatePage from "./pages/BulkUpdatePage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => {
  // Listen for keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Toggle dark mode with Ctrl+D
      if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        document.documentElement.classList.toggle('dark');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/bulk-update" element={<BulkUpdatePage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
