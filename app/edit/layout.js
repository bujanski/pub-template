"use client";
import ChannelSelector from "../components/ChannelSelector";
export default function EditLayout({ children }) {
    return (
        <div>
        <ChannelSelector />
        {children}
        </div>
    );
}