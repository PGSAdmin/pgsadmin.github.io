import { GetterTree } from 'vuex'

interface Contact {
  phone: string
  email: string
}

export const state = () => ({
  contact: {
    phone: '+45 00 00 00 00',
    email: 'foo@bar.baz',
  } as Contact,
  cvr: '00000000',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  contact: (state) => state.contact,
}
