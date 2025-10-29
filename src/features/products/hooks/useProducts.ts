import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import type { Product } from "../schemas/productSchema";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60,
    // Re-fetch automático a cada 10 segundos
    //refetchInterval: 1000 * 10,
    //refetchIntervalInBackground: true, // continua atualizando mesmo se aba estiver em segundo plano
  });
}
