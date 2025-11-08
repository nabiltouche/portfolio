/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef } from "react"
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"
import { Send } from "lucide-react"
import { useTheme } from "../context/useTheme"
import { CONTACT_INFO, SOCIAL_LINKS } from "../utils/data"
import { containerVariants, itemVariants } from "../utils/helper"
import TextInput from "../input/TextInput"



const ContactSection = () => {
    const { isDarkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px"});

    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const handleInputChange = (key: string, value: string) => {
      setFormData ({
        ...formData,
        [key]: value,
      });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setShowSuccess(false), 3000)
    };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`pu-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ?  "bg-blue-500" : "bg-blue-400" 
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />

      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className={`text-sm uppercase tracking-widest ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              } mb-4`}
            >
              Let's Connect
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-light mb-6"
            >
              Get In
              <span className="text-blue-500 font-medium"> Touch</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-xl max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to start your next project? Let's discuss how we can bring your ideas to life.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className={`p-8 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                    : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                }`}
              >
                <h3 className="text-2xl font-medium mb-8">Send me a message</h3>

                {/*  FORMULAIRE */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <TextInput
                      isDarkMode={isDarkMode}
                      value={formData.name}
                      handleInputChange={(text) => handleInputChange("name", text)}
                      label="Your Name"
                    />

                    <TextInput
                      isDarkMode={isDarkMode}
                      value={formData.email}
                      handleInputChange={(text) => handleInputChange("email", text)}
                      label="Email Address"
                    />
                  </div>

                  <TextInput
                    isDarkMode={isDarkMode}
                    value={formData.message}
                    handleInputChange={(text) => handleInputChange("message", text)}
                    label="Your Message"
                    textarea
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>


          
      </div>
    </section>
  )
}

export default ContactSection
