import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import MainBanner from "@modules/home/components/Main_banner"
import Categories from "@modules/home/components/categories"
import Discount from "@modules/home/components/Discount"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Arrival from "@modules/home/components/Arrival"
import Card from "@modules/home/components/cards"
import OurService from "@modules/home/components/ourServices"



export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
    <MainBanner />
      {/* <Hero />  */}
    <div className=" flex mt-[100px] justify-center">
      <Categories />
    </div>
    <div className=" w-full md:mt-[80px] mt-[50px] flex justify-center">
      <Arrival />
    </div>
    <div className=" w-full  mt-[50px] flex justify-center">
      <Discount />
    </div>
    <div className=" w-full  mt-[50px] flex justify-center">
      <Card />
    </div>
    <div className=" w-full  mt-[50px] flex justify-center">
      <OurService />
    </div>
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
