"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Category } from '@/src/generated/prisma/client';



type CategoryIconProps ={
    category: Category
}

export default function CategoryIcon({category}: CategoryIconProps) {
    const params = useParams<{category: string}>()
     const selectedCategory = params.category
  return (
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${category.slug === selectedCategory ? "bg-amber-400" : ""}`}>
        <div className=' relative size-16'>
            <Image
                src={`/icon_${category.slug}.svg`}
                alt={`Imagen de la Categoria: ${category.name}`}
                fill
            />
        </div>
        <Link className=' text-lg font-bold'
              href={`/order/${category.slug}`}
        >{category.name}
        
        

        </Link>

    </div>
  )
}
