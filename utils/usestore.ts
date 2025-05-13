import { create } from 'zustand'

type datatype = {
    fullname :string,
    email : string,
    password : string
}

interface dataStoreInterface {
    data : datatype | any,
    setData : (data:datatype) => void
    clearData : () => void
}

const useDataStore = create<dataStoreInterface>((set) => ({
    data: null,
    setData: (data) => set({ data }),
    clearData: () => set({ data: null }),
}))

export default useDataStore;