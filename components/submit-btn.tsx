"use client";

import React from "react";
import { Loader2, Send } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="group w-full">
      {pending ? (
        <>
          <Loader2 className="animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </Button>
  );
}
