"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { FaSearch } from "react-icons/fa";

export const SearcherButton = () => {
  const formStatus = useFormStatus();

  return (
    <Button
      className="cursor-pointer"
      variant="ghost"
      size="icon"
      disabled={formStatus.pending}
    >
      {
        formStatus.pending 
          ? <Spinner aria-label="loader-icon" />
          : <FaSearch aria-label="search-icon" />
      }
    </Button>
  );
};
