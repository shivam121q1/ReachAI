"use client";
import QuestionCard from "@/components/pagesComponent/cardComponent/QuestionCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { domain, furtherKeywords } from "@/data/domain";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useGlobalData } from "../GlobalDataContext"; // Import the global context hook
import { Button } from "@/components/ui/button";
import { getFurtherKeys } from "@/utils/function";

function DomainPicker() {
  const { setPageData } = useGlobalData(); // Access the context's `setPageData` function
  const [selectedBadgeIndex, setSelectedBadgeIndex] = useState<number | null>(null);
  const [value, setValue] = useState<string>("");

  const handleBadgeClick = (index: number) => {
    setSelectedBadgeIndex(index); // Set the clicked badge as selected
    const selectedValue = domain[index];
    const i = getFurtherKeys(selectedValue);
    setValue(selectedValue); // Update local state
    setPageData("DomainPicker", { selectedDomain: selectedValue,plans: furtherKeywords[i]?.plans });
  };

  const handleCustomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const customValue = event.target.value;
    setValue(customValue); // Update local state
    setPageData("DomainPicker", { selectedDomain: customValue }); // Store value in global context
  };

  return (
    <div>
      
        <div className="py-8 flex justify-center flex-col gap-10 border-b-0">
        <div className="text-4xl font-bold">
            Website Type
          </div>
          <Label htmlFor="datafield" className="text-lg">
            Which industry or domain best describes your brand?
          </Label>
          <div className="flex flex-wrap gap-2">
            {domain.map((item, index) => (
              <Badge
                key={index}
                variant={selectedBadgeIndex === index ? "default" : "secondary"} // Change appearance of selected badge
                className={`flex items-center gap-2 cursor-pointer text-md w-[110px] text-black  p-2 ${
                  selectedBadgeIndex === index ? "bg-darkGray text-white" : ""
                }`}
                onClick={() => handleBadgeClick(index)} // Handle click
              >
                {item}
              </Badge>
            ))}
          </div>

          {/* If "Other" is selected (index 5), show input field */}
          {selectedBadgeIndex === 5 && (
            <div>
              <Input
                value={value}
                onChange={handleCustomInput}
                placeholder="Enter Domain Name"
                className="mt-2 border-b-2 border-t-0 border-x-0 border-b-gray-500 focus-visible:border-black"
              />
            </div>
          )}
          <div className="flex items-center gap-2 justify-end">
          <Button asChild variant="secondary" className="bg-white text-primary border-2 border-primary"><Link href="/setup/person-picker">Back</Link></Button>
          <Button variant="secondary" className="bg-primary text-white hover:bg-accent " asChild><Link href={"/setup/brand-story"} >Next</Link></Button>
          </div>
          
        </div>
      
    </div>
  );
}

export default DomainPicker;
