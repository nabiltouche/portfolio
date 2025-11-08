

import React from "react";

interface TextInputProps {
    isDarkMode: boolean;
    value: string;
    handleInputChange: (value: string) => void;
    textarea?: boolean;
    label?: string;
}

const TextInput: React.FC<TextInputProps> = ({
    isDarkMode = false,
    value,
    handleInputChange,
    textarea = false,
    label = "",
}) => {
    const Tag: "input" | "textarea" = textarea ? "textarea" : "input";
    const commonClassName = `w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
        isDarkMode
            ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
            : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
    }`;

    return (
        <div className="relative">
            <Tag
                id="text-input"
                {...(!textarea ? { type: "text" } : {})}
                className={commonClassName}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    handleInputChange(e.target.value)
                }
            />
            <label htmlFor="text-input" className="text-sm absolute left-4 top-2 pointer-events-none origin-left">
                {label}
            </label>
        </div>
    );
};

export default TextInput;
