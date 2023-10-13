import React, { useEffect } from "react";
import { useState } from "react";
import { rs_gdrive } from "../../assests/DataBase";
import { Button, Col, Row } from "react-bootstrap";
import Files from "./gdrive_scrap";
import LoadSpinner from "../Loading/LoadSpinner";

const Resources = () => {
  const [gID, setGID] = useState(rs_gdrive[0].url);

  const [loading, setloading] = useState(true);
  const [htmlRes, setHtmlRes] = useState("");

  async function init(nid) {
    setloading(false);
    const uid = nid || gID; //test
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        `https://drive.google.com/embeddedfolderview?id=${uid}#list`,
      );
    const html = await fetch(url).then((resp) => resp.text());
    const parent = document.createElement("div");
    parent.innerHTML = html;
    const folders = Array.from(parent.querySelectorAll(".flip-entry"));
    const res = folders.map((item) => {
      const gid = item.getAttribute("id").replace("entry-", "");
      const img = item.querySelector("img");
      const src = item.querySelector("a").getAttribute("href");
      const name = item.querySelector(".flip-entry-title").innerHTML;
      setloading(true);

      return (
        <Col xs={6} md={4} lg={2}>
          {img !== null ? (
            <>
              <a href={src} target="_blank" rel="noreferrer">
                <img src={img.src} alt={img.alt} />
                <br></br>
                <p>{name}</p>
              </a>
            </>
          ) : (
            <div onClick={() => init(gid)}>
              <img width={20} src="/folder.png" />
              <br></br>
              <p>{name}</p>
            </div>
          )}
        </Col>
      );
    });
    setHtmlRes(res);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div>
        <Row xs>
          {rs_gdrive.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Button
                onClick={() => {
                  init(item.url);
                }}
                size="lg"
              >
                {item.name} th
              </Button>
            </Col>
          ))}
        </Row>

        <div>
          {loading ? (
            <>
              <Row>{htmlRes}</Row>
            </>
          ) : (
            <LoadSpinner bgcolor={"#ffffff"} />
          )}
        </div>
      </div>
    </>
  );
};

export default Resources;
