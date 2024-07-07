import { useEffect, useState } from 'react';
import styles from './index.module.css';
import imgNoVideos from './Asset 2@3x.png';

import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import Titulo from "components/Titulo/Titulo";

function Inicio() {

  const [videos, setVideos] = useState([]);
  const url = 'https://my-json-server.typicode.com/DiegoMoctezuma/Cinema-Alura-API/videos';

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setVideos(data))
  },[])

  return(
    <>
      <Banner img="home" color="#154580"/>
      {videos.length === 0 ?
        <div>
          <Titulo>
            <h1>No hay videos que mostrar</h1>
          </Titulo>
          <img src={imgNoVideos} className={styles.imgNoVideos}/>
        </div>
        :
        <>
          <Titulo>
            <h1>Un lugar para guardar sus videos favoritos</h1>
          </Titulo>

          <section className={styles.container}>
            {videos.map((video) => {
              return <Card {...video} key={video.id} />
            })}
          </section>
        </>
      }
    </>
  )
}

export default Inicio;