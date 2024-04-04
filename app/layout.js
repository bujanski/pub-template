import "./globals.css";
import Header from "./components/Header";



export const metadata = {
    title: "Publishing",
    description: "Channel templates and content preview",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Header />
                </header>
                
                {children}

            </body>
        </html>
    );
}
