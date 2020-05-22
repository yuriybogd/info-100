import React, { useContext, useEffect } from "react"
import "./Search.scss"
import { FirebaseContext } from "./../context/firebase/firebaseContext"
import { HistoryList } from "../components/HistoryList"
import Loader from "react-loader-spinner"

export const Search = () => {
  const { showLoader, fetchStatements, loading, statements } = useContext(
    FirebaseContext
  )

  useEffect(() => {
    showLoader()
    fetchStatements().catch((e) => console.error("Problem with fetching", e))
  }, [])

  return (
    <div className="Search">
      <HistoryList statements={statements} />
      {loading ? (
        <Loader
          type="Puff"
          color="#ee9ca7"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : null}
    </div>
  )
}
