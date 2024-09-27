import { Email, WhatsApp } from '@mui/icons-material';



const ContactUs = () => {


  return (
    <section className="relative">
      <div className="w-full h-[400px] bg-cover bg-center brightness-50"
        style={{ backgroundImage: 'url("https://buildern.com/resources/wp-content/uploads/2022/02/construction-trust.jpg")' }}>
      </div>
      <div className="relative pb-40 -mt-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="p-8 bg-white rounded-lg shadow-lg md:p-12">
            <div className="mb-4 text-center">
              <h2 className="font-bold text-[#00455E] text-5xl">
                Contáctanos
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600">
                  Tienes preguntas o comentarios, no dudes en comunicarte con nosotros. Para una respuesta más rápida, te recomendamos contactarnos vía WhatsApp.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex items-center mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#00455E] text-gray-50">
                      <WhatsApp />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700">WhatsApp</h3>
                      <p className="text-gray-600 dark:text-slate-400">+(506) 1234-6578</p>
                    </div>
                  </li>
                  <li className="flex items-center mt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#00455E] text-gray-50">
                      <Email />
                    </div>
                    <div className="ml-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-700">Email</h3>
                      <p className="text-gray-600 dark:text-slate-400">buildconnect@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-5 h-fit md:p-12">
                <form >
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="name"></label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Nombre"
                          className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md"
                          name="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email"></label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Correo electrónico"
                          className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md"
                          name="email"
                          
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="textarea"></label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Mensaje..."
                        className="w-full py-2 pl-2 pr-4 mb-2 border border-gray-400 rounded-md shadow-md"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-[#00455E] hover:bg-[#00455ed8] text-white px-6 py-3 rounded-md">
                      Enviar mensaje
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