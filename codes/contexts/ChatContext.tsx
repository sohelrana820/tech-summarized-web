'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextType {
  activeChatId: string | null;
  setActiveChatId: (id: string | null) => void;
  closeAllChats: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const closeAllChats = () => {
    setActiveChatId(null);
  };

  return (
    <ChatContext.Provider value={{ activeChatId, setActiveChatId, closeAllChats }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
