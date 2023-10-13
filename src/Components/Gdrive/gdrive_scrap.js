import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';

const Files = ({ id }) => {
    const [loading, setloading] = useState(true);

    useEffect(async () => {
        const url = 'https://corsproxy.io/?' + encodeURIComponent(`https://drive.google.com/embeddedfolderview?id=${id}#list`);
        const html = await fetch(url).then(resp => resp.text())
        const parent = document.createElement('div')
        parent.innerHTML = html
        const folders = parent.querySelectorAll('.flip-entry')
        console.log(folders)
        const res = folders.map(item => {
            const img = item.querySelector('img')
            const src = item.querySelector('img').getAttribute('href')
            const name = item.querySelector('.flip-entry-title').innerHTML

            return (

                <Col xs={2}>
                    {img == null ?
                        <>
                        <a href={src} target='_blank' children={img}>
                        </a>
                        <br></br>
                        <p>name</p>
                        </>
                        : <>
                            <img src='/folder.png' />
                            <br></br>
                            <p>name</p>
                        </>}
                </Col>

            )
        })

    }, [])
    return (
        <>
            {loading &&
                <>
                    <Row>

                    </Row>
                </>
            }
        </>
    )
}

export default Files
