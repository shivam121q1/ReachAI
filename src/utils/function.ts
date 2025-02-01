import { furtherKeywords } from "@/data/domain";

export function getFurtherKeys(domainName:string):number {
    const index = furtherKeywords.findIndex(item => item.type === domainName);
    return index
  }