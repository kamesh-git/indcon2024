import React, { useEffect } from 'react'

const ScrollTopBtn = () => {
    useEffect(() => {
        let mybutton = document.getElementById("btn-back-to-top");
        window.onscroll = function () {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", backToTop);

        function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

        };
    }, [])


    const styles = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none',
    }

    return (
        <>
            <button type="button" className="btn btn-danger btn-floating btn-lg" id='btn-back-to-top' style={styles}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    )
}

export default ScrollTopBtn