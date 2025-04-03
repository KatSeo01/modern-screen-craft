
import React from 'react';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, User } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const ProfilePage: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <Layout>
      <div className={`${isMobile ? 'p-2' : 'p-4'} fade-in`}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="py-6">
          <UserProfile />
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
