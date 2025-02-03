import { furtherKeywords } from "@/data/domain";

export function getFurtherKeys(domainName:string):number {
    const index = furtherKeywords.findIndex(item => item.type === domainName);
    return index
  }

 export  function formatText(text: string): string {
    return text.startsWith('"') && text.endsWith('"') ? text.slice(1, -1) : text;
}

const inputText = '"Elevate Your Insights, Empower Your Business!"';
console.log(formatText(inputText)); // Output: Elevate Your Insights, Empower Your Business!

const normalText = 'No quotes here';
console.log(formatText(normalText)); // Output: No quotes here
