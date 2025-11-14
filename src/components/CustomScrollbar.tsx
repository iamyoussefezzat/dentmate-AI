"use client";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";

export default function CustomScrollbar({ children }: { children: React.ReactNode }) {
  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: "scroll",
        },
      }}
      defer
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
