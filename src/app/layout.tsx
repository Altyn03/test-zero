import Header from "@/components/widgets/Header/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "Test Zero",
    description: "Test work for Zero Agency"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
