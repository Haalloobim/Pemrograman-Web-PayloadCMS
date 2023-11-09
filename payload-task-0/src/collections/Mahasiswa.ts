import { CollectionConfig } from 'payload/types'

const Mahasiswa: CollectionConfig = {
  slug: 'Mahasiswa',
  auth: {
    disableLocalStrategy: true
  },
  access: {
    create: () => true, 
    read: () => true, 
    update: () => false, 
    delete: () => false
  }, 
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Nama",
      required: true
    },
    {
      name: "ipk",
      type: "number",
      label: "IPK",
      required: true
    }
  ],
}

export default Mahasiswa