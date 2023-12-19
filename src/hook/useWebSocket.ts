import { useEffect, useRef, useState } from "react";
import { config } from "@/core/config";
import { normalizeData } from "@/helpers/webSocketDataMapper";

const useWebSocket = (onDataReceived: (data: any) => void, delay = 0) => {
  const [error, setError] = useState<string | null>(null);
  const ws = useRef<WebSocket | null>(null);
  const shouldConnect = useRef<boolean>(true);

  useEffect(() => {
    let connectionTimer: NodeJS.Timeout;

    if (shouldConnect.current) {
      connectionTimer = setTimeout(() => {
        ws.current = new WebSocket(config.websocketUrl);

        ws.current.onopen = () => {
          console.log("WebSocket connected");
          setError(null);
        };

        ws.current.onmessage = (event: MessageEvent<any>) => {
          onDataReceived(normalizeData(JSON.parse(event.data)));
        };

        ws.current.onerror = () => {
          setError("Error in WebSocket connection");
        };
      }, delay);
    }

    return () => {
      clearTimeout(connectionTimer);
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [onDataReceived, delay, shouldConnect]);

  const stopWebSocket = () => {
    shouldConnect.current = false;
  };

  const reopenWebSocket = () => {
    shouldConnect.current = true;
  };

  return { stopWebSocket, reopenWebSocket, error };
};

export default useWebSocket;
