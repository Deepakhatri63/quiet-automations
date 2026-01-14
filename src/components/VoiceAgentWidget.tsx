import { useState } from "react";
import { Mic, MicOff, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceAgentWidgetProps {
  isConnected?: boolean;
}

export function VoiceAgentWidget({ isConnected = false }: VoiceAgentWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected" | "speaking">("idle");

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setStatus("idle");
    } else {
      setIsOpen(false);
      setIsListening(false);
      setStatus("idle");
    }
  };

  const handleStartConversation = () => {
    setStatus("connecting");
    // Simulate connection - will be replaced with real ElevenLabs integration
    setTimeout(() => {
      setStatus("connected");
      setIsListening(true);
    }, 1500);
  };

  const handleEndConversation = () => {
    setIsListening(false);
    setStatus("idle");
  };

  return (
    <>
      {/* Floating button */}
      {/* <button
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? "bg-destructive text-destructive-foreground"
            : "bg-primary text-primary-foreground hover:scale-105 glow"
        }`}
        aria-label={isOpen ? "Close voice agent" : "Open voice agent"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button> */}

      {/* Widget panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 border-b border-border bg-secondary/30">
            <h3 className="font-semibold">Talk to an AI Voice Agent</h3>
            <p className="text-sm text-muted-foreground">
              Experience a live demo of my work
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Status indicator */}
            <div className="flex items-center justify-center mb-6">
              <div
                className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                  status === "connected" || status === "speaking"
                    ? "bg-primary/20"
                    : "bg-secondary"
                }`}
              >
                {/* Pulsing ring when active */}
                {(status === "connected" || status === "speaking") && (
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                )}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                    status === "connected" || status === "speaking"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isListening ? (
                    <Mic className="h-8 w-8" />
                  ) : (
                    <MicOff className="h-8 w-8" />
                  )}
                </div>
              </div>
            </div>

            {/* Status text */}
            <p className="text-center text-sm text-muted-foreground mb-6">
              {status === "idle" && "Click below to start a conversation"}
              {status === "connecting" && "Connecting to agent..."}
              {status === "connected" && "Listening... speak now"}
              {status === "speaking" && "Agent is responding..."}
            </p>

            {/* Action button */}
            {status === "idle" || status === "connecting" ? (
              <Button
                onClick={handleStartConversation}
                disabled={status === "connecting"}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {status === "connecting" ? "Connecting..." : "Start Conversation"}
              </Button>
            ) : (
              <Button
                onClick={handleEndConversation}
                variant="outline"
                className="w-full"
              >
                End Conversation
              </Button>
            )}

            {/* Note about demo */}
            {!isConnected && (
              <p className="text-xs text-muted-foreground text-center mt-4">
                Demo mode — Connect ElevenLabs to enable live voice
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
