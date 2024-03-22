import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <footer className='footer'>
                Copyright &copy; {year}
            </footer>
        </>
    )
}

export default Footer
