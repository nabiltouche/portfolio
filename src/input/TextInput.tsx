import React from "react";

interface TextInputProps {
  isDarkMode: boolean;
  value: string;
  handleInputChange: (value: string) => void;
  textarea?: boolean;
  label?: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  isDarkMode = false,
  value,
  handleInputChange,
  textarea = false,
  label = "",
  error = "",
}) => {
  const Tag: "input" | "textarea" = textarea ? "textarea" : "input";
  const id = `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;

  const baseStyle = `w-full px-4 pt-6 pb-2 rounded-xl transition-all duration-300 outline-none resize-none`;
  const themeStyle = isDarkMode
    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
    : "bg-white/80 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white";

  const errorStyle = error ? "border-red-500 focus:border-red-500" : "border";

  return (
    <div className="relative">
      <Tag
        id={id}
        {...(!textarea ? { type: "text" } : {})}
        className={`${baseStyle} ${themeStyle} ${errorStyle}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleInputChange(e.target.value)
        }
      />
      <label
        htmlFor={id}
        className="text-sm absolute left-4 top-2 pointer-events-none origin-left"
      >
        {label}
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
