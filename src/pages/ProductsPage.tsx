
import React from 'react';
import Layout from '../components/Layout';
import ProductListView from '../components/ProductListView';

const ProductsPage: React.FC = () => {
  return (
    <Layout>
      <ProductListView />
    </Layout>
  );
};

export default ProductsPage;
