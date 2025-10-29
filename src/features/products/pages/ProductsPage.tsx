import { Suspense } from "react";
import { ProductList } from "../components/ProductList";
import { useProducts } from "../hooks/useProducts";
import LoadingState from "../../../components/loading-state";
import ErrorState from "../../../components/error-state";


export function ProductsPage() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message={error.message} />

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <ProductList products={data} />
    </Suspense>
  );
}
