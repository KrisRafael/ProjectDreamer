import Background from '../Background/Background';
import backgroundImage from "../../assets/BckOverview.jpg";
import { supabase } from "../../supabase/supabase";

import { Outlet, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

import classes from "./OverviewOfDreams.module.css";

export function OverviewOfDreams() {

  const [overviews, setOverviews] = useState(null)
  const [error, setError] = useState('')


  async function getOverviews() {
    const{data, err} = await supabase.from('dreams').select()
   console.log(data,err)
    if (err) {
      setError(err)
      return
    }

    setOverviews(data)
  }

  useEffect(
    () => {
      getOverviews()
    },
    []
  )

  const handleOverviewsUpdate = () => {
    getOverviews()
  }

  return (
    <>
      <Background image={backgroundImage} />
       <h1>PŘEHLED SNŮ</h1>

       <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Přehled snů</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem officia? Officia officiis aliquam optio. Odit suscipit repellendus minima minus.</p>

      {error && <p className="text-red-600 mt-5"><strong>CHYBA:</strong><br />{error}</p>}

      <div className={classes.flex}>
        <nav className={classes.nav}>
          {
            overviews === null
            ? <p>Načítám data...</p>
            : <ul className={classes.dreamList}>
                {overviews.map(overview => (
                  <li key={overview.id}>
                    <NavLink to={`${overview.id}`}>
                      {overview.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
          }
        </nav>

        <div className={classes.detail}>
          <Outlet context={{onOverviewUpdate: handleOverviewsUpdate}} />
        </div>
      </div>
    </div>
    </>
  )
}

export default OverviewOfDreams;