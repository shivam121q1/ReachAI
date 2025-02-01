"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

interface QuestionCardProps {
  question: string;
  description?: string; // Used to differentiate between 'name' or 'reference'
  placeholder?: string;
  className?:string;
  setdata: (name: string, value: string) => void; // Function to update the state in the parent
}

const QuestionCard = ({ question, description,className, setdata, placeholder }: QuestionCardProps) => {
  const [brandName, setBrandName] = useState(''); // Managing local state for the input field

  // Handle input change and update parent state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setBrandName(value); // Update the local input state
    if (description) {
      setdata(description, value); // Update the parent state with the description (name/reference) and the value
    }
  };

  return (
    <div>
      <Label htmlFor="datafield" className="text-2xl">
        {question}
      </Label>
      <Input
        id="datafield"
        value={brandName}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`mt-2 ${className} border-b-2 bg-[#F2F2F2] border-t-0 border-x-0 border-b-gray-500 focus-visible:border-black`}
      />
    </div>
  );
};

export default QuestionCard;
