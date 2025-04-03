
import React from 'react';
import Layout from '../components/Layout';
import DashboardView from '../components/DashboardView';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const DashboardPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <div className={`${isMobile ? 'p-2' : 'p-4'} fade-in`}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <DashboardView />
      </div>
    </Layout>
  );
};

export default DashboardPage;
