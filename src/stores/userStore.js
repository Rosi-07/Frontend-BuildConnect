import { create } from 'zustand';

const userStore = create((set) => ({
  user: {
    email: '',
    password: '',
    role: '',
    contacts: {
      emails: [''],
      numbers: [''],
    },
    Owner: null,
    Company: null,
  },

  // Función para actualizar propiedades individuales del usuario
  setUserProperty: (property, value) =>
    set((state) => ({
      user: { ...state.user, [property]: value },
    })),

  // Función para actualizar contactos específicos
  updateContact: (contactType, newContacts) =>
    set((state) => ({
      user: {
        ...state.user,
        contacts: {
          ...state.user.contacts,
          [contactType]: newContacts,
        },
      },
    })),

  // Función para establecer completamente el usuario
  setUser: (newUser) => set({ user: newUser }),
}));

export default userStore;