import React, { useContext, useEffect } from "react"
import "./History.scss"
import { FirebaseContext } from "../context/firebase/firebaseContext"
import { HistoryCards } from "../components/HistoryCards"
import Loader from "react-loader-spinner"

export const History = () => {
         const {
           showLoader,
           fetchStatements,
           loading,
           statements,
         } = useContext(FirebaseContext)

         useEffect(() => {
           showLoader()
           fetchStatements().catch((e) =>
             console.error("Problem with fetching", e)
           )
         }, [])

         return (
           <div className="History">
             <HistoryCards statements={statements} />
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
