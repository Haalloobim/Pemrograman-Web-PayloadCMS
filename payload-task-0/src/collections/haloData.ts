import { CollectionConfig } from 'payload/types'

const haloData: CollectionConfig = {
  slug: 'haloData',
  auth: {
    disableLocalStrategy: true
  },
  access: {
    create: () => true, 
    read: () => true, 
    update: () => true, 
    delete: () => true
  },  
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true
    },
    {
      name: "rate",
      type: "number",
      label: "Rate",
      required: true
    }, 
    {
      name: "studio",
      type: "text",
      label: "Studio",
      required: true
    }
  ],
}

export default haloData