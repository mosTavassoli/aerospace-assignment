import { useEffect, useRef, useState } from "react";
import { config } from "@/core/config";
import { normalizeData } from "@/helpers/webSocketDataMapper";

const useWebSocket = (
  onDataReceived: (data: any) => void,
  delay: number = 0
) => {
  const [error, setError] = useState<Event | null>(null);
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

        ws.current.onmessage = (event) => {
          const data = JSON.parse(event.data);
          onDataReceived(normalizeData(data));
        };

        ws.current.onerror = (error) => {
          setError(error);
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
