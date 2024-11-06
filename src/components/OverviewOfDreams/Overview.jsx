import { useParams, useOutletContext } from "react-router-dom";
import {useState, useEffect} from 'react';


function OverviewDetail({overview, onEdit}) {
  return (
    <>
      <h3 className="text-xl font-bold mb-3">{overview.title}</h3>
      <p><strong>Author:</strong> {overview.author}</p>
      <p><strong>Year:</strong> {overview.year}</p>
      <p><strong>Rating:</strong> {'⭐'.repeat(overview.rating)}</p>
      <p>{overview.summary}</p>
      <button className="mt-4 bg-sky-600 text-white p-3" onClick={onEdit}>Editovat sen</button>
    </>
  )
}

function OverviewEdit({overview, onSave, onCancel}) {

  const [form, setForm] = useState(overview)

  const handleSubmit = (e) => {
    e.preventDefault()

    onSave(form)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="mt-2">
          <label className="block font-bold">Title</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Author</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Year</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="year"
            value={form.year}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Rating</label>
          <input
            className="border border-slate-500 p-1 w-64" type="text"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold">Summary</label>
          <textarea
            className="border border-slate-500 p-1 w-64" type="text" rows="5"
            name="summary"
            value={form.summary}
            onChange={handleChange}
          />
        </div>


        <div className="flex gap-2 mt-4">
          <button type="submit" className="mt-4 bg-sky-600 text-white p-3">Uložit</button>

          <button className="mt-4 bg-slate-600 text-white p-3" onClick={onCancel}>Zrušit</button>
        </div>

      </form>
    </>
  )
}


export function Overview() {

  const {overviewId} = useParams()
  const {onOverviewUpdate} = useOutletContext()

  const [overview, setOverview] = useState(null)
  const [isEdited, setIsEdited] = useState(false)

  useEffect(
    () => {
      async function getOverview() {
        const response = await fetch(`http://localhost:5173/OverviewOfDreams/${overviewId}`)
        const data = await response.json()
        setOverview(data)
      }

      getOverview()
    },
    [overviewId]
  )


  const saveOverview = async (updatedOverview) => {
    const response = await fetch(`http://localhost:5173/OverviewOfDreams/${overview.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedOverview)
    })

    if (response.ok) {
      setOverview(updatedOverview)
      setIsEdited(false)
      onOverviewUpdate()
    } else {
      console.log('chyba pri ukladani', response.statusText)
    }

}

return (
    <div>
      {
        overview === null
        ? <p>Načítám data...</p>
        : (
            isEdited
            ? <OverviewEdit
                overview={overview}
                onSave={saveOverview}
                onCancel={() => {setIsEdited(false)}}
              />
            : <OverviewDetail
                overview={overview}
                onEdit={() => {setIsEdited(true)}}
              />
          )
      }
    </div>
  );
}

export default Overview;