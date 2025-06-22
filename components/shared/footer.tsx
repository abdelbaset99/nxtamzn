"use client";

import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 underline-link">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-4">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-1"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        <ChevronUp className="w-4 h-4 mr-2" />
                        Back to top
                    </Button>
                    <Link href="/" className="text-xl font-bold">
                        {APP_NAME}
                    </Link>
                </div>
                <div className="p-4">
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <Link href="/about" className="underline">
                            About
                        </Link>
                        <Link href="/contact" className="underline">
                            Contact
                        </Link>
                        <Link href="/privacy" className="underline">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="underline">
                            Terms of Service
                        </Link>
                    </div>
                </div>
                <div className="mt-6 text-center text-sm text-gray-400">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
                    </p>
                    <p>
                        Built with{" "}
                        <a
                            href="https://nextjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Next.js
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Tailwind CSS
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
}
