import React, { useEffect } from "react";
import { useState } from "react";
import { rs_gdrive } from "../../assests/DataBase";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Files from "./gdrive_scrap";
import LoadSpinner from "../Loading/LoadSpinner";
import { Link, Route, Routes, useParams } from "react-router-dom";
import HeadingComp from "../Others/HeadingComp";

const Resources = () => {

  const [loading, setloading] = useState(false);
  const [htmlRes, setHtmlRes] = useState("");
  const { googId } = useParams();


  async function init(id) {
    setloading(false);
    const uid = atob(id)
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        `https://drive.google.com/embeddedfolderview?id=${uid}#list`,
      );
    const html = await fetch(url).then((resp) => resp.text());
    const parent = document.createElement("div");
    parent.innerHTML = html;
    const folders = Array.from(parent.querySelectorAll(".flip-entry"));
    let res = folders.map((item, index) => {
      const gid = item.getAttribute("id").replace("entry-", "");
      const img = item.querySelector("img");
      const src = item.querySelector("a").getAttribute("href");
      const name = item.querySelector(".flip-entry-title").innerHTML;


      return (
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
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/resources/${btoa(gid)}`}>
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
      );
    });
    if (folders.length === 0) res = <h1 className="text-center">No item in the folder</h1>;
    setloading(true);
    setHtmlRes(res);
  }

  useEffect(() => {
    init(googId || btoa(rs_gdrive[0].url));
  }, [googId]);


  return (
    <>
      <HeadingComp head={'SIE Resources'} />
      <div className="d-flex justify-content-center flex-wrap">
        {rs_gdrive.map((item, index) => (
          <div className="m-1" key={index}>
            <Link to={`/resources/${btoa(item.url)}`}>
              <Button
                variant={googId ? atob(googId) == item.url ? 'secondary' : 'outline-secondary' : rs_gdrive[0].url == item.url ? 'secondary' : 'outline-secondary'}
              >
                {item.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="m-2">
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

export default Resources;
