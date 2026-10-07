"use client";

import { Fragment } from "react";
import { ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Layer {
  nodes: string[];
  /** Label on the arrow leading into the next layer. */
  link?: string;
}

const LAYERS: Layer[] = [
  { nodes: ["Energy Site"], link: "MQTT / TCP / API" },
  { nodes: ["Data Service"] },
  { nodes: ["WebSocket", "Redis", "Database"] },
  { nodes: ["Next.js / React"] },
  { nodes: ["EMS / SCADA / BI"] },
];

interface SystemArchitectureProps {
  title: string;
  caption: string;
}

export function SystemArchitecture({ title, caption }: SystemArchitectureProps) {
  return (
    <Card className="rounded-3xl border border-primary/20 bg-black/60 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-sm text-primary mb-6">{caption}</p>
        <div className="flex flex-col items-center">
          {LAYERS.map((layer, i) => (
            <Fragment key={layer.nodes.join()}>
              <div className="flex flex-wrap justify-center gap-2">
                {layer.nodes.map((node) => (
                  <div
                    key={node}
                    className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs sm:text-sm text-white"
                  >
                    {node}
                  </div>
                ))}
              </div>
              {i < LAYERS.length - 1 && (
                <div className="flex items-center gap-2 py-1.5 text-muted-foreground">
                  <ArrowDown className="h-4 w-4 text-primary/70" />
                  {layer.link && (
                    <span className="font-mono text-xs">{layer.link}</span>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
