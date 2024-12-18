import { Email, WhatsApp } from "@mui/icons-material";
import { useState } from "react";
import api from "../../database/api";
import { useSnackbar } from "notistack";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from 'react-i18next';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const [captchaToken, setCaptchaToken] = useState(null);
  const { t } = useTranslation();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      enqueueSnackbar("Todos los campos son obligatorios", {
        variant: "error",
      });
      return;
    }

    if (!captchaToken) {
      enqueueSnackbar("Por favor completa el CAPTCHA", { variant: "error" });
      return;
    }

    try {
      const response = await api.post("/contact", {
        ...formData,
        captchaToken,
      });
      if (response.status === 200) {
        enqueueSnackbar("Correo enviado correctamente", { variant: "success" });
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken(null);
      }
    } catch (error) {
      enqueueSnackbar("Error al enviar el correo", { variant: "error" });
    }
  };

  return (
    <section className="relative">
      <div
        className="w-full h-[400px] bg-cover bg-center brightness-50"
        style={{
          backgroundImage:
            'url("https://buildern.com/resources/wp-content/uploads/2022/02/construction-trust.jpg")',
        }}
      ></div>
      <div className="relative pb-40 -mt-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="p-8 bg-white rounded-lg shadow-lg md:p-12">
            <div className="mb-4 text-center">
              <h2 className="font-bold text-[#00455E] text-5xl">{t('contactUs.title')}</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600">
                {t('contactUs.description')}
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#00455E] text-gray-50">
                      <WhatsApp />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        +(506) 1234-6578
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center mt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#00455E] text-gray-50">
                      <Email />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        buildconnect@gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-5 h-fit md:p-12">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="name"></label>
                        <input
                          type="text"
                          id="name"
                          placeholder={t('contactUs.form.namePlaceholder')}
                          className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="email"></label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder={t('contactUs.form.emailPlaceholder')}
                          className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="textarea"></label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder={t('contactUs.form.messagePlaceholder')}
                        className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <ReCAPTCHA
                      sitekey="6LcWU3cqAAAAANHWVp2QCFJIivdMQOhNYyYfij_k"
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full bg-[#00455E] hover:bg-[#00455ed8] text-white px-6 py-3 rounded-md"
                    >
                     {t('contactUs.form.submitButton')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
