import React from 'react'

function Footer() {
     let date = new Date().getFullYear()
    return (
        <>
         <footer>
             <p>copyright © {date} , Anubhav Kumar</p>
         </footer>
        </>
    )
}
export default Footer