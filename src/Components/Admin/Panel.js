import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import useFirebase from '../../assests/useFirebase'

const Panel = () => {

  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const { db } = useFirebase()

  async function startfunc() {
    const collectionRef = collection(db, 'paper presentation')
    const docs = await getDocs(collectionRef)
    const docTemp = []
    docs.forEach(doc => {
      docTemp.push(doc.data())
    })
    setData(docTemp)
  }
  async function nextfunc() {
    const collectionRef = collection(db, 'Project display')
    const docs = await getDocs(collectionRef)
    const docTemp = []
    docs.forEach(doc => {
      docTemp.push(doc.data())
    })
    setData1(docTemp)
  }
  function ExportData(incdata, xlname) {
    const filename = `${xlname}.xlsx`;
    const XLSX = window.XLSX
    var ws = XLSX.utils.json_to_sheet(incdata);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "People");
    XLSX.writeFile(wb, filename);
  }

  useEffect(() => {
    startfunc()
    nextfunc()
    return () => { }
  }, [])


  return (
    <div style={{ overflow: 'scroll' }}>
      {
        <>
          <Container>
            <h1>Paper Presentation Entries</h1>
            <Table>
              <thead>
                <th>S.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Year</th>
                <th>Department</th>
                <th>College</th>
                <th>Number</th>

              </thead>
              <tbody>
                {
                  data.map((item, index) => (
                    <tr>
                      <td> {index + 1} </td>
                      <td> {item.name} </td>
                      <td> {item.email} </td>
                      <td> {item.year} </td>
                      <td> {item.department} </td>
                      <td> {item.college} </td>
                      <td> {item.number} </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Button onClick={() => ExportData(data, "Paper Presentation")}>Excel</Button>
          </Container>
          <Container>
            <h1>Project display Entries</h1>
            <Table>
              <thead>
                <th>S.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Year</th>
                <th>Department</th>
                <th>College</th>
                <th>Number</th>

              </thead>
              <tbody>
                {
                  data1.map((item, index) => (
                    <tr>
                      <td> {index + 1} </td>
                      <td> {item.name} </td>
                      <td> {item.email} </td>
                      <td> {item.year} </td>
                      <td> {item.department} </td>
                      <td> {item.college} </td>
                      <td> {item.number} </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Button onClick={() => ExportData(data1, "Project display")}>Excel</Button>
          </Container>
        </>
      }
    </div>
  )
}

export default Panel