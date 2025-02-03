import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { supabase } from '../../supabase/supabase';

export function DreamDetail() {
  const { dreamId } = useParams()
  const [dream, setDream] = useState(null)

  useEffect(() => {
    async function getDream() {
      const { data, error } = await supabase
        .from('dreams')
        .select()
        .eq('id', dreamId)
        .limit(1)
        .single()

      if (error) {
        console.log('Chyba pro nacitani snu', error)
        return
      }
      setDream(data)
    }

    getDream()
  }, [dreamId])


  return (
    <div style={{ background: 'white' }}>
      {
        dream === null
          ? <p>Načítám data</p>
          : <>
            <h2>{dream.title}</h2>
            <p>{dream.type}</p>
            <div dangerouslySetInnerHTML={{ __html: dream.content }} />
          </>
      }
    </div>
  );
}

export default DreamDetail;