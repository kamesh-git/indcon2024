import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import useFirebase from '../../assests/useFirebase'
import { Accordion, Alert } from 'react-bootstrap'
import HeadingComp from '../Others/HeadingComp'

const Notification = () => {
  const { db } = useFirebase()
  const [notifyDocs, setNotifyDocs] = useState([])
  const [msg, setMsg] = useState({ message: 'Loading...', variant: 'info' })

  useEffect(() => {
    getDocs(collection(db, 'notification')).then(snapshot => {
      if (!snapshot.docs.length) return setMsg({ message: 'No new notifications', variant: 'danger' });
      setNotifyDocs(snapshot.docs)
    }
    ).catch(err => setMsg({ message: err.message, variant: 'danger' }))
  }, [])
  return (
    <div className='p-3'>
      <HeadingComp head={'Notification'} pt={1}  />
      <div>
        {notifyDocs.length
          ?
          <Accordion>
            {notifyDocs.map((item, index) => {
              const html = item.data().html
              console.log(html)
              return (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{item.data().title}</Accordion.Header>
                  <Accordion.Body >
                    <div dangerouslySetInnerHTML={{ __html: item.data().html }} />
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}
          </Accordion>
          :
          <Alert variant={msg.variant}>
            {msg.message}
          </Alert>}
      </div>
    </div>
  )
}

export default Notification