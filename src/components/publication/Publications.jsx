import React from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import { PublicationCard } from "./PublicationCard"

export const Publications = ({ publications }) => {
  const navigate = useNavigate()

  const navigateToPublicationHandler = (id) => {
    navigate(`/publicaciones/${id}`)
  }

  return (
    <div className="publications-container">
      {publications.map((publication) => (
        <PublicationCard
          key={publication._id}
          title={publication.title}
          description={publication.description}
          course={publication.course}
          dateCreated={publication.dateCreated}
          id={publication._id}
          navigateToPublicationHandler={navigateToPublicationHandler}
        />
      ))}
    </div>
  )
}

Publications.propTypes = {
    publications: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        dateCreated: PropTypes.string.isRequired,
        })
    ).isRequired,
}