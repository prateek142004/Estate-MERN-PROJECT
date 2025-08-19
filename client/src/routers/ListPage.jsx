import '../style/listpage.scss'
import Filter from '../components/Filter'
import Card from '../components/Card'
import Map from '../components/Map'
import { useLoaderData } from 'react-router-dom'

const ListPage = () => {
  const post=useLoaderData()
  return (
    <div className='listpage'>
         <div className="listcontainer">
         <div className="wrapper">
            <Filter/>
            {post.map(item=>(
                <Card key={item.id} item={item}/>
            ))}
         </div>
         </div>
         <div className="mapcontainer">
          <Map items={post}/>
         </div>
    </div>
  )
}

export default ListPage