import React, { useEffect, useState } from 'react'
import { gallery_id } from '../../assests/DataBase'
import HeadingComp from '../Others/HeadingComp'
import { Button, Carousel, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import LoadSpinner from '../Loading/LoadSpinner'

const Gallery = () => {
  const [loading, setloading] = useState(false);
  const [galleryShow, setGalleryShow] = useState(false)
  const [imgModal, setImgModal] = useState([])
  const [listImg, setListImg] = useState({})

  useEffect(() => {
    setImgs();
  }, [])


  const showImage = (imglist) => {
    console.log(imglist)
    setImgModal(imglist)
    setGalleryShow(true)
  }

  async function setImgs() {
    let result = {};
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        `https://drive.google.com/embeddedfolderview?id=${gallery_id}#list`,
      );
    const html = await fetch(url).then((resp) => resp.text());
    const parent = document.createElement("div");
    parent.innerHTML = html;
    const folders = Array.from(parent.querySelectorAll(".flip-entry"));
    for (var item of folders) {

      // const src = item.querySelector("a").getAttribute("href");
      // const img = item.querySelector("img");
      const gid = item.getAttribute("id").replace("entry-", "");
      const name = item.querySelector(".flip-entry-title").innerHTML;
      result[name] = []
      const innerurl =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://drive.google.com/embeddedfolderview?id=${gid}#list`,
        );
      await fetch(innerurl).then(resp => resp.text()).then(innerhtml => {
        const child = document.createElement("div");
        child.innerHTML = innerhtml;

        child.querySelectorAll(".flip-entry").forEach(item1 => {
          if (item1.querySelector(".flip-entry-list-icon img")) {
            if (item1.querySelector(".flip-entry-list-icon img").getAttribute("src").includes("type/image/jpeg")) {
              result[name].push(item1.getAttribute("id").replace("entry-", ""));
            }
          }
        });
        if (!result[name].length) { delete result[name] }
      })
    }
    console.log(result)
    setListImg(result)
    setloading(true)
  }


  return (
    <>
      {loading ? <div className="pb-5" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <Modal size='lg' show={galleryShow} onHide={() => setGalleryShow(false)}>
          <Modal.Body className='p-0' style={{ position: 'relative' }}>
            <svg style={{ position: 'absolute', top: '0',right:'-20px',zIndex:'999',scale:'1.5',fill:'white' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            <Carousel data-aos="fade-up" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500">
              {imgModal.map((itemid, index) => {
                return (
                  <Carousel.Item style={{ backgroundColor: 'black' }} key={index}>
                    <div style={{ overflow: 'hidden', width: '100%', maxHeight: "593px" }}>
                      <img
                        style={{ filter: 'opacity(0.7)', width: '100%' }}
                        className="d-block"
                        src={`https://drive.google.com/uc?export=view&id=${itemid}`}
                        alt="First slide"
                      />
                    </div>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Modal.Body>
        </Modal>
        <HeadingComp head={'Gallery'} />
        <div className="row justify-content-center ms-1 me-1">
          {
            Object.keys(listImg).map(function (event, index) {
              const result = <p> <span>{event}</span> {listImg[event].map(imgID => (<p>{imgID}</p>))}</p>;
              return (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 mt-2">
                  <div onClick={() => showImage(listImg[event])} style={{ width: "100%", cursor: 'pointer' }} className='img-thumbnail'>
                    <img

                      style={{ width: '100%' }}
                      className="d-block"
                      src={`https://drive.google.com/uc?export=view&id=${listImg[event][0]}`}
                      alt="First slide"
                    />
                    <OverlayTrigger placement={'bottom'} overlay={<Tooltip id="tooltip-disabled">{event}</Tooltip>}>
                      <span style={{ whiteSpace: "nowrap", display: "inline-block", width: '100%', overflow: 'hidden', textOverflow: "ellipsis" }} className="text-center p-2">{event}</span>
                    </OverlayTrigger>
                  </div>
                </div>
              )
            }
            )
          }

        </div>
      </div > : <LoadSpinner />
      }
    </>

  )
}

export default Gallery