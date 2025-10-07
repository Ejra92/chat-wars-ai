"use client";

import type { ReactNode } from "react";

import { useState } from "react";
import { GiLightSabers } from "react-icons/gi";
import { GiDeathStar } from "react-icons/gi";

import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToggleChatProps {
  children: (show: boolean) => ReactNode
};

export const ToggleChat = ({ children }: ToggleChatProps) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(prev => !prev);
  };

  return (
    <>
      {children(show)}

      <Tooltip defaultOpen>
        <TooltipTrigger>
          <Toggle
            size="lg"
            variant="secondary"
            onClick={handleToggle}
            className="cursor-pointer"
            asChild
          >
            {show ? <GiLightSabers /> : <GiDeathStar />}
          </Toggle>
        </TooltipTrigger>


        <TooltipContent
          hidden={show}
          side="left"
        >
          ChatWars - AI
        </TooltipContent>
      </Tooltip>
    </>
  );
};
