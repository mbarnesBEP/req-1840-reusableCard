import react from 'react'
import { Table } from '@mantine/core'

// const fakeData = [
//   {
//     dpc: "dpc",
//     mpc: "mpc",
//     gtin: "gtin",
//     brand: {
//       name:'BrandName'
//     },
//     pack: "pack",
//     category: {
//       name:'CategoryName'
//     },
//     manufacturer: {
//       name:'manufacturerName'
//     },
//     rawManufacturer: "rawManufacturer",
//     description: "description",
//     created: "created"
//   },
//   {
//     dpc: "dpc2",
//     mpc: "mpx2",
//     gtin: "gtin2",
//     brand: {
//       name:'BrandName2'
//     },
//     pack: "pack2",
//     category: {
//       name:'CategoryName2'
//     },
//     manufacturer: {
//       name:'manufacturerName'
//     },
//     rawManufacturer: "rawManufacturer2",
//     description: "description2",
//     created: "created2"
//   },
//   {
//     dpc: "dpc3",
//     mpc: "mpx3",
//     gtin: "gtin3",
//     brand: {
//       name:'BrandName3'
//     },
//     pack: "pack3",
//     category: {
//       name:'CategoryName3'
//     },
//     manufacturer: {},
//     rawManufacturer: "rawManufacturer3",
//     description: "description3",
//     created: "created3"
//   },
//   {
//     dpc: "dpc4",
//     mpc: "mpx4",
//     gtin: "gtin4",
//     brand: {
//       name:'BrandName4'
//     },
//     pack: "pack4",
//     category: {
//       name:'CategoryName4'
//     },
//     manufacturer: {
//       name:'manufacturerName'
//     },
//     rawManufacturer: "rawManufacturer4",
//     description: "description4",
//     created: "created4"
//   }
// ]

const makeFakeImportData = (numb: number) => {
  const data = []
  for (let i = 0; i < numb; i++) {
    const d = {
      dpc: "dpc" + i,
      mpc: "mpc" + i,
      gtin: "gtin" + i,
      brand: {
        name: 'BrandName' + i
      },
      pack: "pack" + i,
      category: {
        name: 'CategoryName' + i
      },
      manufacturer: {
        name: 'manufacturerName' + i
      },
      rawManufacturer: "rawManufacturer" + i,
      description: "description" + i,
      created: "created" + i
    }
    data.push(d)

  }
  return data
}

const ImportData = () => {
  const data = makeFakeImportData(14)
  const rows = data.map((elm) => (
    <tr key={elm.dpc}>
      <td>{elm.dpc}</td>
      <td>{elm.mpc}</td>
      <td>{elm.gtin}</td>
      <td>{elm.brand.name}</td>
      <td>{elm.pack}</td>
      <td>{elm.category.name}</td>
      <td>{elm.manufacturer.name}</td>
      <td>{elm.rawManufacturer}</td>
      <td>{elm.description}</td>
      <td>{elm.created}</td>
    </tr>
  ))
  console.log('data', data)
  const headers = Object.keys(data[0])
  console.log('keys', Object.keys(data[0]))
  return (
    <Table withColumnBorders>
      <thead>
        <tr>
          {headers.map((txt) => (
            <th>{txt.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
export default ImportData