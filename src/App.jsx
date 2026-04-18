import React from 'react'
import Card from './component/card'

function App() {
  return (
    <div>
      <div className='card1'>
        <h1>Rustom Singh Yadav</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita delectus impedit laborum minus enim incidunt fugiat. Doloremque maiores laborum perferendis officiis consequuntur blanditiis ab dicta nisi, eligendi, iure earum.</p>

      </div>
      <div className='card2'>
        <h1>Prachi Rajput</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum expedita delectus impedit laborum minus enim incidunt fugiat. Doloremque maiores laborum perferendis officiis consequuntur blanditiis ab dicta nisi, eligendi, iure earum.</p>

      </div>
      {Card()}
    </div>
  )
}

export default App