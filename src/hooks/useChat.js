import { useState, useLayoutEffect } from "react";
import chatStore from "../services/chatStore";

export function useChat() {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    let isMounted = true;
    let subscription;
    if (isMounted) {
      subscription = chatStore.subscribe(setChatState);
      chatStore.init();
    }
    return () => {
      isMounted = false;
      subscription && subscription.unsubscribe();
    };
  }, []);
  return { chatState, chatStore };
}
