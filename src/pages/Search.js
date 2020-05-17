import React, { useContext, useEffect } from "react"
import { Jumbotron, Button } from "react-bootstrap"
import "./Search.scss"
import { FirebaseContext } from "./../context/firebase/firebaseContext"
import { HistoryList } from "../components/HistoryList"

export const Search = () => {
  const { showLoader, fetchStatements, loading, statements } = useContext(
    FirebaseContext
  )

  useEffect(() => {
    fetchStatements().catch((e) => console.error("Problem with fetching", e))
  }, [])

  return (
    <div className="Search">
      <HistoryList statements={statements} />
    </div>

  )
}
