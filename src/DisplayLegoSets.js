import redLegoTop from "./assets/redLegoTop.svg";

const displayLegoSets = (props) => {

    return (
        <section className="displaySets"> 
            {
            props.legoSets.length === 0 
                ? null
                : (
                    <div className="wrapper">
                            <h2>{`Sets found in ${props.legoSets[0].year}`}</h2>
                        <ul>
                        { props.legoSets.map((legoSet, index) => {
                            const key = {index}
                            return (
                                <>
                                    <li key={key}>
                                        <img className="redLogoTop" aria-hidden="true" src={redLegoTop} alt="" />
                                        <div className="legoSetInfo">
                                            <img src={legoSet.set_img_url} alt={legoSet.name} />
                                            <h3>{legoSet.name}</h3>
                                        </div>
                                    </li>   
                                </>               
                            )
                        })
                        }
                        </ul>
                    </div>
                )
            }
        </section>
    )
}

export default displayLegoSets;