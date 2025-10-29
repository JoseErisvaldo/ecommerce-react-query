import { useState, useMemo } from "react"
import type { Product } from "../schemas/productSchema"

interface ProductListProps {
  products?: Product[]
}

export function ProductList({ products = [] }: ProductListProps) {
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
  }, [search, products])

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-balance">Nossos Produtos</h1>
            <p className="text-slate-600 text-lg">Encontre os melhores produtos com os melhores preços</p>
          </div>

          <div className="relative max-w-md">
            <input
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-slate-900 placeholder:text-slate-400"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600">
            {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 p-6 overflow-hidden">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-base font-semibold text-slate-900 line-clamp-2 leading-snug min-h-[2.5rem] text-pretty">
                  {p.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-emerald-600">R$ {p.price}</span>
                </div>

                <button className="w-full py-2.5 px-4 bg-slate-900! text-white font-medium rounded-lg transition-colors duration-200 active:scale-95">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Nenhum produto encontrado</h3>
            <p className="text-slate-600">Tente buscar com outros termos</p>
          </div>
        )}
      </div>
    </div>
  )
}
