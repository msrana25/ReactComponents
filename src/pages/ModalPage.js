import React from 'react'
import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    }

  return (
    <div>
      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal&&<Modal />}
    </div>
  )
}

export default ModalPage
