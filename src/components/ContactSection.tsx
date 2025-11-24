import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Send } from "lucide-react"
import { useTheme } from "../context/useTheme"
import { CONTACT_INFO, SOCIAL_LINKS } from "../utils/data"
import TextInput from "../input/TextInput"
import SuccessModel from "./SuccessModel"
import { useTranslation } from "react-i18next"
import { send } from "@emailjs/browser"

const ContactSection = () => {
  const { isDarkMode } = useTheme()
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    general: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER

  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "", general: "" }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = t("contact.champs")
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.champs")
      isValid = false
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t("contact.adresseValid")
        isValid = false
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.champs")
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({ name: "", email: "", message: "", general: "" })

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const res = await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      console.log("EMAILJS SUCCESS:", res)

      setShowSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setShowSuccess(false), 3000)
    } catch (error) {
      console.error("EMAILJS ERROR:", error)

      setErrors(prev => ({
        ...prev,
        general: t("contact.errorSending"),
      }))
    }

    setIsSubmitting(false)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`scroll-mt-32 py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-20 ${inView ? "fade-up" : "fade-init"}`}>
          <div
            className={`text-sm uppercase tracking-widest mb-4 ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } ${inView ? "fade-up-delay" : "fade-init"}`}
          >
            {t("contact.letsConnect")}
          </div>

          <h2
            className={`text-3xl md:text-5xl font-light mb-6 ${
              inView ? "fade-up-delay" : "fade-init"
            }`}
          >
            {t("contact.getIn")}
            <span className="text-blue-500 font-medium">
              {t("contact.touch")}
            </span>
          </h2>

          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } ${inView ? "fade-up-delay" : "fade-init"}`}
          >
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="flex justify-center mb-5 px-4">
          <div
            className={`${
              inView ? "fade-up" : "fade-init"
            } w-full max-w-xl md:max-w-2xl p-10 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
            }`}
          >
            <h3 className="text-2xl font-medium mb-8">
              {t("contact.sendMeMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <TextInput
                  isDarkMode={isDarkMode}
                  value={formData.name}
                  handleInputChange={text => handleInputChange("name", text)}
                  label={t("contact.yourName")}
                  error={errors.name}
                />

                <TextInput
                  isDarkMode={isDarkMode}
                  value={formData.email}
                  handleInputChange={text => handleInputChange("email", text)}
                  label={t("contact.emailAddress")}
                  error={errors.email}
                />
              </div>

              <TextInput
                isDarkMode={isDarkMode}
                value={formData.message}
                handleInputChange={text => handleInputChange("message", text)}
                label={t("contact.yourMessage")}
                error={errors.message}
                textarea
              />

              {errors.general && (
                <p className="text-red-500 text-sm">{errors.general}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full spinner" />
                    <span>{t("contact.sending")}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{t("contact.sendMessage")}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div
          className={`space-y-8 ${
            inView ? "fade-up" : "fade-init"
          }`}
        >
          <div>
            <h3 className="text-2xl font-medium mb-6">
              {t("contact.information")}
            </h3>
            <div className="space-y-4">
              {CONTACT_INFO.map(info => (
                <div
                  key={info.label}
                  className={`flex items-center space-x-4 p-4 rounded-xl hover-x ${
                    isDarkMode
                      ? "bg-gray-800/30 hover:bg-gray-800/50"
                      : "bg-gray-50/50 hover:bg-gray-100/50"
                  } transition-all duration-300`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700" : "bg-white"
                    }`}
                  >
                    <info.icon size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <div
                      className={`text-sm ${
                        isDarkMode ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {t(info.label)}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6">
              {t("contact.follow")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.03] ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                      : "bg-white/80 border-gray-200 hover:border-gray-300"
                  } ${social.bgColor} ${social.color}`}
                >
                  <social.icon size={20} />
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div
            className={`p-6 rounded-xl border ${
              isDarkMode
                ? "bg-green-500/10 border-green-500/20"
                : "bg-green-50 border-green-200"
            }`}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium text-green-500">
                {t("contact.available")}
              </span>
            </div>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("contact.workText")}
            </p>
          </div>
        </div>

        <div
          className={`text-center mt-20 mb-5 ${
            inView ? "fade-up" : "fade-init"
          }`}
        >
          <div
            className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-800/30 border-gray-700"
                : "bg-gray-50/50 border-gray-200"
            }`}
          >
            <h3 className="text-xl font-medium mb-4">
              {t("contact.preferCall")}
            </h3>
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {t("contact.callText")}
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] ${
                isDarkMode
                  ? "border-gray-600 hover:border-blue-500 hover:text-blue-400"
                  : "border-gray-300 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {t("contact.scheduleCall")}
            </a>
          </div>
        </div>
      </div>

      <SuccessModel
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        isDarkMode={isDarkMode}
      />
    </section>
  )
}

export default ContactSection
