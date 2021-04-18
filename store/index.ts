import { GetterTree } from 'vuex'

interface Contact {
  phone: string
  email: string
}

export const state = () => ({
  contact: {
    phone: '+45 24 67 37 16',
  } as Contact,
  cvr: '30897099',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  contact: (state) => state.contact,
}
