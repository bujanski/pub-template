"use client";
import ChannelSelector from "../components/ChannelSelector";

export default function RootLayout({ children }) {
    return (
        <div>
        <ChannelSelector />
        {children}
        </div>
    );
}