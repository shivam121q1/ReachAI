"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { GlobalDataProvider } from "./GlobalDataContext";
import { ImageAndText } from "@/data/ImageAndText";
import Timeline from "./TimeLine"; // Import the Timeline component
import { Card } from "@/components/ui/card"; // Assuming shadcn card component

// Mapping subroutes to their corresponding indices
const routeToIndexMap: { [key: string]: number } = {
  "person-picker": 0,
  domain: 1,
  "brand-story": 2,
  "choose-color": 3,
  contact: 4,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Global state for all pages
  const [pageData, setPageData] = useState<{ [key: string]: any }>({});

  // Extract the current route name (subroute under `setup`)
  const pathname = usePathname(); // Capture the current path
  const currentPage = pathname?.split("/").pop();

  let index = routeToIndexMap[`${currentPage}`];
  console.log("index", index);

  // Function to update global state
  const updatePageData = (page: string, data: any) => {
    setPageData((prevData) => ({ ...prevData, [page]: data }));
  };

  return (
    <>
        <Timeline currentStep={index+1} />
      <div className="flex flex-col max-w-maxContent w-11/12 mx-auto gap-2">

        <div className="grid grid-cols-2 w-full">
          {/* Image Section - Takes 50% of the width */}
          <div className="flex flex-col justify-center items-center gap-8 mt-9">
            <Image
              src={ImageAndText[index]?.Image || ImageAndText[index].Image}
              alt="slide1"
              className="w-[300px] h-auto m-4"
            />
            <p className="text-md">{ImageAndText[index]?.text || ""}</p>
          </div>

          {/* Card Section - Takes the remaining space */}
          <div className="flex  overflow-hidden w-full h-full mt-9">
            <GlobalDataProvider>
              {/* Render children */}
              {children}
            </GlobalDataProvider>
          </div>
        </div>
      </div>
    </>
  );
}
