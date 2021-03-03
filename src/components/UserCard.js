import React from 'react'
import {Card} from 'react-bootstrap'

const UserCard = ({ user }) => {
    return (
        <div className="cards">
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{user.id}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
    <Card.Text>
      <span>{user.email}</span>
      <span>{user.email}</span>
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
