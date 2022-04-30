const { useState, useEffect } = require("react")

const Useservices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/offer')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
}

export default Useservices