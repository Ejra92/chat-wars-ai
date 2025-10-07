"use client";

import { ToggleChat, Chat } from "./components";

export const ChatWars = () => (
  <div className="fixed bottom-12 md:bottom-4  right-4 flex flex-col items-end">
    <ToggleChat>
      {(show) => <Chat show={show} />}
    </ToggleChat>
  </div>
);
