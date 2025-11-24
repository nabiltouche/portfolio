import { CheckCircle, X, Sparkles } from "lucide-react"
import { useTranslation } from "react-i18next"

type SuccessModelProps = {
  showSuccess: boolean
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>
  isDarkMode: boolean
}

const SuccessModel = ({
  showSuccess,
  setShowSuccess,
  isDarkMode,
}: SuccessModelProps) => {
  const { t } = useTranslation()

  if (!showSuccess) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm modal-fade"
      onClick={() => setShowSuccess(false)}
    >
      <div
        className={`relative p-8 rounded-2xl border max-w-sm w-full text-center modal-content ${
          isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setShowSuccess(false)}
          className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
            isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          <X size={18} />
        </button>

        <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 modal-icon">
          <CheckCircle size={32} className="text-white" />
        </div>

        <h3 className="text-2xl font-medium mb-2 modal-title">
          {t("contact.messageSent")}
        </h3>

        <p
          className={`mb-6 modal-text ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("contact.messageText")}
        </p>

        <div className="flex justify-center modal-sparkles">
          <Sparkles className="text-yellow-500" size={24} />
        </div>
      </div>
    </div>
  )
}

export default SuccessModel
