import React from "react";
import "./index.scss";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import TeamDetail from "../../../TeamDetail";
import { Button, Space } from "antd";
const Home = () => {
     const [value, setValue] = useState('')
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:5050/business");
    setData(res.data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())));
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5050/business/${id}`);
    await getData();
  };

  useEffect(() => {
    getData();
  }, [value]);
  return (
    <>
      <section></section>
      <div className="home-container">
        <div className="home-parent">
          <div className="bg-image">
            <div className="bg-image-text">
              <div className="committed-parent">
                <div className="div"></div>
                <div className="committed">committed to success</div>
              </div>

              <h1>We help to grow your business</h1>
              <p>
                Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              </p>
              <p style={{ paddingBottom: "30px" }}>
                voluptate velit esscillumlore eu quife nrulla parihatur.
              </p>
              <a href="/">Our Services</a>
            </div>
          </div>

          <div className="best">
            <div className="best-text">
              <div className="committed-parent">
                <div className="div"></div>
                <div className="committed">OUR TOP SERVICES</div>
              </div>

              <h1>Our Best Services</h1>
            </div>

            <div className="best-card">
              <div className="best-card-child">
                <div className="best-card-icon">
                  <AiFillSetting className="icon-settings" />
                </div>
                <div className="best-card-text">
                  <a>Strategy alanning</a>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
              <div className="best-card-child">
                <div className="best-card-icon">
                  <AiFillSetting className="icon-settings" />
                </div>
                <div className="best-card-text">
                  <a>Insurance Service</a>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
              <div className="best-card-child">
                <div className="best-card-icon">
                  <AiFillSetting className="icon-settings" />
                </div>
                <div className="best-card-text">
                  <a>Audit & Evaluation</a>
                  <p>
                    There are many variations of passages of lorem Ipsum
                    available but the new majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="our-best-container">
            <div className="our-best-bgimage">
              <div className="our-best-parent">
                <div className="our-best-img">
                  <img
                    src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png"
                    alt=""
                  />
                </div>

                <div className="our-best-text">
                  <div className="committed-parent">
                    <div className="div"></div>
                    <div className="committed">committed to success</div>
                  </div>
                  <h1>Our Best Services</h1>

                  <p>
                    Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                    ess cillum dolore egru lofrre dsu quality mollit anim
                    laborumuis au dolor in voluptate velit cillu.
                  </p>
                  <span>
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate velit esscillumlore eu quife nrulla
                    parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute
                    iruxvfg dhjinulpadeserunt moll.
                  </span>
                  <br />
                  <button>More About Us</button>
                </div>
              </div>
            </div>
          </div>

          <div className="featured-container">
            <div className="featured-parent">
              <div className="featured">
                <div className="best-text">
                  <div className="committed-parent">
                    <div className="div"></div>
                    <div className="committed">OUR PORTFOLIOS OF CASES</div>
                  </div>

                  <h1>Featured Case Study</h1>
                </div>
              </div>

              <form action="">
               <button>sort</button>
               <input type="text" onChange={(e)=> setValue(e.target.value)}/>
              </form>

              <div className="featured-card-parent">
                {data.map((d) => (
                  <div className="featured-card-child">
                    <div className="featured-image">
                      <img src={d.img} alt="" />
                    </div>

                    <div className="featured-text">
                      <div className="committed-parent">
                        <div className="div"></div>
                        <div className="committed">{d.category}</div>
                      </div>
                      <p>{d.title}</p>
                      <Button onClick={()=> deleteData(d._id)} type="primary" danger>
                        Delet
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="team-container">
            <div className="team-parent">
              <div className="team">
                <div className="best-text">
                  <div className="committed-parent">
                    <div className="div"></div>
                    <div className="committed">OUR PROFESSIONAL MEMBERS</div>
                  </div>

                  <h1>Our Team Mambers</h1>
                </div>
              </div>

              <div className="team-card-parent">
                <TeamDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
