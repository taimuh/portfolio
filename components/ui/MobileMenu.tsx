"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { NAVIGATION, UI_TEXT } from "@/lib/constants";

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{UI_TEXT.buttons.openMenu}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {NAVIGATION.items.map((item) => (
          <DropdownMenuItem key={item.href}>
            <a
              href={item.href}
              {...(item.label === "Source" && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {item.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
