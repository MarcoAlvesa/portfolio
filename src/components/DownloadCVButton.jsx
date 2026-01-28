import { Download } from "lucide-react";

export const DownloadCVButton = () => {
    return (
        <button
            className="relative bh-transparent border border-border
                text-foreground hover:border-primary/50 transition-all
                duration-1000 focous:outline-none focous visibile:ring-2
                focous-visible:ring-primary focus-visible:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed group
                px-8 py-4 text-lg font-medium rounded-full overflow-visible"
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                <Download className="w-5 h-5"/>Download CV
            </span>
        </button>
    );
}