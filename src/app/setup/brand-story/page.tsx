"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalData } from "../GlobalDataContext";
import { furtherKeywords, getKeywordsByType } from "@/data/domain";
import QuestionCard from "@/components/pagesComponent/cardComponent/QuestionCard";

const BrandStory = () => {
  const navigate = useRouter();
  const { pageData, setPageData } = useGlobalData();
  const [keywords, setKeywords] = useState<string[]>([]);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [brandDescription, setBrandDescription] = useState("");
  const [customKeyword, setCustomKeyword] = useState("");
  const [showInput, setShowInput] = useState(false);

  // Fetch data from global state on mount
  useEffect(() => {
    const type = pageData?.DomainPicker?.selectedDomain;

    if (!type) {
      navigate.push("/setup/domain");
      return;
    }

    // Get keywords & add "Others" only once
    let fetchedKeywords = getKeywordsByType(type);
    if (!fetchedKeywords.includes("Others")) {
      fetchedKeywords = [...fetchedKeywords, "Others"];
    }

    setKeywords(fetchedKeywords);

    const savedData = pageData.BrandStory || {};
    setSelectedBadges(savedData.keywords || []);
    setBrandDescription(savedData.description || "");
  }, [pageData, navigate]);

  // Update global context when keywords or description change
  const updateGlobalContext = (keywords: string[], description: string) => {
    setPageData("BrandStory", { keywords, description });
  };

  // Handle badge removal
  const handleRemoveBadge = (index: number) => {
    const updatedBadges = selectedBadges.filter((_, i) => i !== index);
    setSelectedBadges(updatedBadges);
    updateGlobalContext(updatedBadges, brandDescription);
  };

  // Handle badge addition
  const handleBadgeClick = (badge: string) => {
    if (badge === "Others") {
      // If "Others" isn't already selected, add it & show input box
      if (!selectedBadges.includes("Others")) {
        setSelectedBadges([...selectedBadges, "Others"]);
      }
      setShowInput(true);
    } else if (!selectedBadges.includes(badge)) {
      const updatedBadges = [...selectedBadges, badge];
      setSelectedBadges(updatedBadges);
      updateGlobalContext(updatedBadges, brandDescription);
    }
  };

  // Handle brand description updates
  const handleBrandDescription = (description: string) => {
    setBrandDescription(description);
    updateGlobalContext(selectedBadges, description);
  };

  // Handle custom keyword addition (replaces "Others")
  const handleCustomKeyword = () => {
    const trimmedKeyword = customKeyword.trim();
    if (trimmedKeyword) {
      let updatedBadges = selectedBadges.filter((badge) => badge !== "Others");
      updatedBadges = [...updatedBadges, trimmedKeyword];

      setSelectedBadges(updatedBadges);
      updateGlobalContext(updatedBadges, brandDescription);
    }
    setCustomKeyword(""); // Reset input field
    setShowInput(false); // Hide input field after adding
  };

  // Handle Enter key press for custom keyword
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCustomKeyword();
    }
  };

  return (
    <div className="max-w-maxContent w-11/12 mx-auto">
      <div className="py-8 flex flex-col gap-6 border-b-0">
        <QuestionCard
          question="Tell us a bit about your brand or what you want to represent."
          className="h-20"
          setdata={(name: string, value: string) => handleBrandDescription(value)}
          description="description"
        />

        {/* Keyword Section */}
        <div>
          <Label className="text-2xl">What Keywords would you like to associate with your website?</Label>
          <div className="flex flex-wrap gap-2">
            {selectedBadges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-2 text-black text-center">
                {badge}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 text-black"
                  onClick={() => handleRemoveBadge(index)}
                >
                  ✕
                </Button>
              </Badge>
            ))}
          </div>
        </div>

        {/* Suggested Keywords & Custom Input */}
        <div className="p-3 bg-[#F2F2F2] border rounded-sm flex flex-wrap gap-2">
          {keywords.map((badge) => (
            <Badge
              key={badge}
              variant="secondary"
              className={`text-md flex px-5 rounded-md py-2 items-center gap-2 cursor-pointer border-primary ${
                selectedBadges.includes(badge) ? "bg-darkGray text-white" : "bg-white text-black"
              }`}
              onClick={() => handleBadgeClick(badge)}
            >
              {badge}
              <Plus size={15} />
            </Badge>
          ))}

          {/* Show custom keyword input if "Others" is selected */}
          {showInput && (
            <div className="flex items-center gap-2">
              <Input
                value={customKeyword}
                onChange={(e) => setCustomKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter custom keyword"
                className="border-b-2 border-gray-500 focus:border-black"
              />
              <Button onClick={handleCustomKeyword} className="bg-primary text-white">
                Add
              </Button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 justify-end">
          <Button asChild variant="secondary" className="bg-white text-primary border-2 border-primary">
            <Link href="/setup/domain">Back</Link>
          </Button>
          <Button variant="secondary" className="bg-primary text-white hover:bg-accent hover:border-2" asChild>
            <Link href={"/setup/choose-color"}>Next</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
