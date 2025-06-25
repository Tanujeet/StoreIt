"use client";
import Image from "next/image";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";

import { getFiles } from "@/lib/actions/file.action";
import { Models } from "node-appwrite";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const [query, setQuery] = useState("");
  const searchParam = useSearchParams();
  const searchQuery = searchParam.get("query") || "";
  const [results, setResults] = useState<Models.Document[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const fetchFiles = async () => {
      if (debouncedQuery.length === 0) {
        setResults([]);
        setOpen(false);
        return router.push(path.replace(searchParam.toString(), ""));
      }
      const files = await getFiles({ types: [], searchText: debouncedQuery });
    };
  });

  useEffect(() => {
    if (!searchQuery) {
      setQuery("");
    }
  }, [searchQuery]);

  return (
    <div className="search">
      <div className="search-input-wrapper">
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          value={query}
          placeholder="Search...."
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
