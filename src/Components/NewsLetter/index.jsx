import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import LoadSpinner from "../Loading/LoadSpinner";
import { Link, useParams } from "react-router-dom";
import HeadingComp from "../Others/HeadingComp";

const NewsLetter = () => {

    const [loading, setloading] = useState(false);
    const [htmlRes, setHtmlRes] = useState("");
    const [title, setTitle] = useState(null)
    const { googId } = useParams();


    async function init(id) {
        setloading(false);
        let res
        const uid = window.atob(id)
        const url =
            "https://corsproxy.io/?" +
            encodeURIComponent(
                `https://drive.google.com/embeddedfolderview?id=${uid}#list`,
            );
        const html = await fetch(url).then((resp) => resp.text()).catch(err => res = <Alert style={{ width: '200px', textAlign: "center" }} variant="danger">{err.message}</Alert>);
        const parent = document.createElement("div");
        parent.innerHTML = html;
        const folders = Array.from(parent.querySelectorAll(".flip-entry"));
        if (res) { }
        else if (folders.length === 0) res = <Alert style={{ width: '250px', textAlign: "center" }} variant="warning">No item in the folder</Alert>;
        else {
            res = folders.map((item, index) => {
                const gid = item.getAttribute("id").replace("entry-", "");
                const img = item.querySelector("img");
                const src = item.querySelector("a").getAttribute("href");
                const name = item.querySelector(".flip-entry-title").innerHTML;


                return (
                    <>
                        <Col style={{ cursor: 'pointer' }} className="p-2" key={index} xs={6} md={4} lg={2}>
                            {img !== null ? (
                                <>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} href={src} target="_blank" rel="noreferrer">
                                        <div style={{ border: '5px solid grey' }}>
                                            <div style={{ height: "200px", overflow: "hidden", display: 'flex', flexDirection: 'column' }}>
                                                <img src={img.src} alt={img.alt} />
                                            </div>
                                            <OverlayTrigger placement={'bottom'} overlay={<Tooltip id="tooltip-disabled">{name}</Tooltip>}>
                                                <span style={{ whiteSpace: "nowrap", display: "inline-block", width: '100%', overflow: 'hidden', textOverflow: "ellipsis" }} className="text-center p-2">{name}</span>
                                            </OverlayTrigger>
                                        </div>
                                    </a>

                                </>
                            ) : (
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/news/${window.btoa(gid)}`}>
                                    <div style={{ border: '5px solid grey' }}>
                                        <img style={{ width: '100%' }} src="/folder.png" />
                                        <br></br>
                                        <OverlayTrigger placement={'bottom'} overlay={<Tooltip id="tooltip-disabled">{name}</Tooltip>}>
                                            <span style={{ whiteSpace: "nowrap", display: "inline-block", width: '100%', overflow: 'hidden', textOverflow: "ellipsis" }} className="text-center p-2">{name}</span>
                                        </OverlayTrigger>
                                    </div>
                                </Link>
                            )}
                        </Col>
                    </>
                );
            });
        }

        setloading(true);
        setHtmlRes(res);
        setTitle(parent.querySelector("title").textContent);
    }

    useEffect(() => {
        init(googId || window.btoa("1BlUJDZqV1AZvoKJvlis6agsiITU2dTZT"));
    }, [googId]);


    return (
        <>
                <a target="_blank" style={{color:'var(--font-color)'}} href="https://drive.google.com/drive/folders/1BlUJDZqV1AZvoKJvlis6agsiITU2dTZT">
            <div className="d-flex align-items-center">

                <HeadingComp head={'Monthly Newsletter'} />
            </div>
                </a>
            <div className="mt-2 ms-2 me-2">
                {loading ? (
                    <>
                        <Row className="justify-content-center" >{htmlRes}</Row>
                    </>
                ) : (
                    <LoadSpinner />
                )}
            </div>
        </>
    );
};

export default NewsLetter;
